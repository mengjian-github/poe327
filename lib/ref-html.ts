import { load } from 'cheerio'

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
}

// Transform reference HTML into site-styled, brand-neutral content.
export function transformStarterHtml(input: string): string {
  const $ = load(input, { decodeEntities: false })

  // 1) Strip scripts/styles and obvious ad/video containers
  // Keep non-ad iframes for video; we'll handle them below.
  $('script, style, noscript, iframe[src*="ads"], #poe-post-video-ad, .pgOts, .VPV').remove()

  // 2) Remove Maxroll coupling: links, logos, and any paragraphs mentioning it
  $('a[href*="maxroll.gg"], img[src*="maxroll" i], img[alt*="maxroll" i]').remove()
  $('*').each((_, el) => {
    const t = $(el).text().trim()
    if (/maxroll/i.test(t)) {
      // Remove small blocks that read as credits/banners/notes
      if (t.length < 1200) $(el).remove()
    }
  })
  // Remove sections titled Credits/Changelog/Related Posts (and following content until next header)
  $('h1,h2,h3').each((_, h) => {
    const title = $(h).text().trim()
    if (/^(credits|changelog|related posts)/i.test(title)) {
      // remove this heading and all siblings until the next heading at the same level
      let cur = $(h).next()
      $(h).remove()
      while (cur.length && !/H1|H2|H3/.test(cur.prop('tagName') || '')) {
        const next = cur.next()
        cur.remove()
        cur = next
      }
    }
  })

  // 3) Normalize headings and strip inline attributes; add ids for TOC
  $('h1').each((_, el) => {
    const html = $(el).html() || ''
    $(el).replaceWith(`<h2>${html}</h2>`) // demote h1
  })
  $('h2, h3, h4').each((_, el) => {
    const text = $(el).text().trim()
    const id = slugify(text)
    $(el).attr('id', id)
  })
  $('[style]').removeAttr('style')
  // Keep classless content; our own classes will style the container
  $('[class]').removeAttr('class')
  // Remove default yellow highlights coming from <mark>
  $('mark').each((_, el) => {
    const text = $(el).text()
    $(el).replaceWith(text)
  })

  // 3a) Global meta cleanup (safer): only remove tiny one-liners that are clearly utility/meta
  $('p, div, small, span').each((_, el) => {
    const txt = $(el).text().replace(/\s+/g, ' ').trim()
    if (!txt) return
    // Single-character or punctuation-only lines (often icon fallbacks)
    if (/^([!?.•\-]|[A-Za-z])$/.test(txt)) { $(el).remove(); return }
    // Last updated / FAQ / Changelog lines appearing deeper in the doc
    if (/^last\s*updated\s*:/i.test(txt) && txt.length <= 140) { $(el).remove(); return }
    if (/^(faq|changelog|follow)$/i.test(txt)) { $(el).remove(); return }
    if (/keepers of the flame\s*3\.27/i.test(txt) && txt.length <= 60) { $(el).remove(); return }
  })

  // 3b) Remove source-site meta rows (仅在标题后面，且仅小块元素)
  {
    const $h2 = $('h2').first()
    if ($h2.length) {
      // 扫描标题后的前 8 个兄弟节点，删除“极短 meta 行”和图标占位
      const siblings = $h2.nextAll().slice(0, 8)
      siblings.each((_, el) => {
        const tag = (($(el).prop('tagName') as string) || '').toLowerCase()
        if (!/^(p|span|div|small)$/i.test(tag)) return
        const txt = $(el).text().replace(/\s+/g, ' ').trim()
        if (!txt) { $(el).remove(); return }
        const isMeta = /(last\s*updated|changelog|faq|follow|keepers of the flame)/i.test(txt)
        const isVeryShort = txt.length <= 140
        const isIcony = /^([!?.•\-]|[A-Za-z])$/.test(txt) // 单字符/标点占位
        if (isIcony || (isMeta && isVeryShort)) $(el).remove()
      })
    }
  }

  // 4) Enhance images and tables for readability
  $('img').each((_, img) => {
    const $img = $(img)
    $img.attr('loading', 'lazy')
    $img.attr('decoding', 'async')
    $img.attr('width', $img.attr('width') || '640')
    $img.attr('height', $img.attr('height') || '360')
    // Wrap in a figure-like div for spacing
    $img.wrap('<div data-figure></div>')
  })
  $('table').each((_, t) => {
    const $t = $(t)
    if (!$t.parent('[data-table-wrap]').length) {
      $t.wrap('<div data-table-wrap></div>')
    }
  })

  // 4a) If a paragraph-like element contains <br> lines, split them into separate paragraphs
  $('p, div').each((_, el) => {
    const html = $(el).html() || ''
    if (/<br\s*\/?>(?:\s*<br\s*\/?>)*/i.test(html)) {
      const parts = html.split(/<br\s*\/?>(?:\s*<br\s*\/?>)*/i)
      const lines = parts.map((h) => h.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()).filter(Boolean)
      if (lines.length >= 2) {
        const frag = lines.map((t) => `<p>${t}</p>`).join('')
        $(el).replaceWith(frag)
      }
    }
  })

  // 4b) Make common video embeds responsive (YouTube/Twitch/Vimeo/etc.)
  $('iframe[src]').each((_, el) => {
    const $el = $(el)
    const src = $el.attr('src') || ''
    const isVideo = /(youtube\.com|youtu\.be|player\.twitch\.tv|kick\.com|streamable\.com|vimeo\.com|dailymotion\.com)/i.test(src)
    if (isVideo) {
      $el.attr('loading', 'lazy').attr('referrerpolicy', 'no-referrer')
      if (!$el.parent('[data-video]').length) {
        $el.wrap('<div data-video></div>')
      }
    }
  })

  // 4c) Heuristics to promote short, standalone lines into headings.
  const h3Keywords = new Set([
    'early game','midgame','endgame','resistances','video','summary',
  ])
  $('p, div').each((_, p) => {
    const txt = ($(p).text() || '').trim()
    const words = txt.split(/\s+/)
    const isShort = words.length > 0 && words.length <= 5 && /[A-Za-z]/.test(txt)
    const lower = txt.toLowerCase()
    if (h3Keywords.has(lower) || (isShort && /^[A-Z][\w\s]+$/.test(txt))) {
      $(p).replaceWith(`<h3>${txt}</h3>`)
    }
  })

  // 4d) Convert bullet-like paragraphs into lists when there are 2+ in a row
  const paras = $('p, div').toArray()
  let buffer: any[] = []
  const commitList = () => {
    if (buffer.length >= 2) {
      const ul = $('<ul></ul>')
      buffer.forEach((el) => {
        const text = $(el).text().replace(/^[-•—\u2022\s]+/, '').trim()
        ul.append(`<li>${text}</li>`)
        $(el).remove()
      })
      // Insert the list where the first p was
      const first = buffer[0]
      $(first).before(ul)
    }
    buffer = []
  }
  paras.forEach((el, idx) => {
    const t = $(el).text().trim()
    const bullet = /^[-•—\u2022]/.test(t)
    if (bullet) buffer.push(el)
    else commitList()
    // Flush at parent boundary
    const next = paras[idx + 1]
    if (next && $(next).parent().get(0) !== $(el).parent().get(0)) commitList()
  })
  commitList()

  // 4d-2) Roman numeral lines (I, II, III...) -> ordered list
  const ps = $('p, div').toArray()
  let rbuf: any[] = []
  const romanRe = /^(?=.)M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,4})$/
  const commitRoman = () => {
    if (rbuf.length >= 2) {
      const ol = $('<ol></ol>')
      ol.attr('type', 'I')
      rbuf.forEach((el) => {
        ol.append(`<li>${$(el).text().trim()}</li>`) // 保留原文
        $(el).remove()
      })
      const first = rbuf[0]
      $(first).before(ol)
    }
    rbuf = []
  }
  ps.forEach((el) => {
    const t = $(el).text().trim()
    if (romanRe.test(t)) rbuf.push(el)
    else commitRoman()
  })
  commitRoman()

  // 4e) Remove stray punctuation-only paragraphs
  $('p, div').each((_, p) => {
    const t = $(p).text().trim()
    if (/^([!?.•\-]|[A-Za-z])$/.test(t)) $(p).remove() // 单字符/标点
  })
  // 4f) Split overlong paragraphs into multiple paragraphs by sentences
  $('p').each((_, p) => {
    const txt = $(p).text().trim()
    if (txt.length < 500) return
    const parts = txt.split(/(?<=[.!?])\s+(?=[A-Z0-9])/)
    if (parts.length < 3) return
    const chunks: string[] = []
    let buf: string[] = []
    parts.forEach((s) => {
      buf.push(s)
      const joined = buf.join(' ')
      if (joined.length > 220 || buf.length >= 3) {
        chunks.push(joined)
        buf = []
      }
    })
    if (buf.length) chunks.push(buf.join(' '))
    const frag = chunks.map((c) => `<p>${c}</p>`).join('')
    $(p).replaceWith(frag)
  })

  // 6) Convert simple callouts: lines starting with Note:/Tip:/Warning:/Important:
  $('p').each((_, p) => {
    const txt = $(p).text().trim()
    const m = /^(Note|Tip|Warning|Important)\s*:\s*(.*)$/i.exec(txt)
    if (m) {
      const kind = m[1].toLowerCase()
      const rest = m[2]
      $(p).replaceWith(`<div data-callout="${kind}"><strong>${m[1]}:</strong> ${rest}</div>`) // keep it simple
    }
  })

  // 5) Make external links safe
  $('a[href]').each((_, a) => {
    const $a = $(a)
    const href = $a.attr('href') || ''
    if (/^https?:\/\//i.test(href)) {
      $a.attr('target', '_blank').attr('rel', 'noopener noreferrer')
    }
  })

  // Return inner HTML only
  const body = $('body')
  const html = body.length ? body.html() || '' : $.root().html() || ''
  return html
}

export function extractHeadings(transformedHtml: string) {
  const $ = load(`<div id="root">${transformedHtml}</div>`, { decodeEntities: false })
  const items: { id: string; text: string; level: 2 | 3 }[] = []
  $('h2, h3').each((_, el) => {
    const id = $(el).attr('id') || slugify($(el).text().trim())
    const text = $(el).text().trim()
    const level = ($(el).get(0).tagName === 'h3' ? 3 : 2) as 2 | 3
    items.push({ id, text, level })
  })
  return items
}
