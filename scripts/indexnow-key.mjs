export const INDEXNOW_KEY = 'poe327indexnowd6330ea6b3d84f8120251111'
export const INDEXNOW_HOST = 'poe327.net'
export const INDEXNOW_KEY_LOCATION = `https://${INDEXNOW_HOST}/${INDEXNOW_KEY}.txt`

export function buildIndexNowPayload(urls) {
  const list = [...new Set(urls)].filter(Boolean)
  if (!list.length) throw new Error('At least one URL must be provided to submit to IndexNow.')
  return {
    host: INDEXNOW_HOST,
    key: INDEXNOW_KEY,
    keyLocation: INDEXNOW_KEY_LOCATION,
    urlList: list,
  }
}
