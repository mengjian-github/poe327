import BoneshatterJuggernaut from './boneshatter-juggernaut'
import ChaosMinionArmyNecromancer from './chaos-minion-army-necromancer'
import CycloneElementalist from './cyclone-elementalist'
import EarthquakeGladiator from './earthquake-gladiator'
import EarthshatterSlayer from './earthshatter-slayer'
import EviscerateBleedGladiator from './eviscerate-bleed-gladiator'
import ExplosiveArrowBallistaChampion from './explosive-arrow-ballista-champion'
import ExplosiveArrowBallistaElementalist from './explosive-arrow-ballista-elementalist'
import ExsanguinateMinerTrickster from './exsanguinate-miner-trickster'
import ForgedFrostbearerSpectreNecromancer from './forged-frostbearer-spectre-necromancer'
import FrostBladesSlayer from './frost-blades-slayer'
import GlacialCascadeElementalist from './glacial-cascade-elementalist'
import GroundSlamOfEarthshakingSlayer from './ground-slam-of-earthshaking-slayer'
import IceShotOfPenetrationMinerDeadeye from './ice-shot-of-penetration-miner-deadeye'
import IceTrapTrickster from './ice-trap-trickster'
import KineticBlastDeadeye from './kinetic-blast-deadeye'
import LightningArrowDeadeye from './lightning-arrow-deadeye'
import LightningTrapOfSparkingElementalist from './lightning-trap-of-sparking-elementalist'
import PoisonRangedAnimateWeapons from './poison-ranged-animate-weapons'
import PoisonSrsNecromancer from './poison-srs-necromancer'
import PoisonousConcoctionOfBouncingPathfinder from './poisonous-concoction-of-bouncing-pathfinder'
import RollingMagmaMinesSaboteur from './rolling-magma-mines-saboteur'
import StormRainDeadeye from './storm-rain-deadeye'
import TornadoOfElementalTurbulenceInquisitor from './tornado-of-elemental-turbulence-inquisitor'
import ViperStrikeOfMambaPathfinder from './viper-strike-of-mamba-pathfinder'
import WaveOfConvictionElementalist from './wave-of-conviction-elementalist'

export type CuratedProps = { meta: any }

export const curatedStarters: Record<string, (props: CuratedProps) => React.ReactElement> = {
  'boneshatter-juggernaut': BoneshatterJuggernaut,
  'chaos-minion-army-necromancer': ChaosMinionArmyNecromancer,
  'cyclone-elementalist': CycloneElementalist,
  'earthquake-gladiator': EarthquakeGladiator,
  'earthshatter-slayer': EarthshatterSlayer,
  'eviscerate-bleed-gladiator': EviscerateBleedGladiator,
  'explosive-arrow-ballista-champion': ExplosiveArrowBallistaChampion,
  'explosive-arrow-ballista-elementalist': ExplosiveArrowBallistaElementalist,
  'exsanguinate-miner-trickster': ExsanguinateMinerTrickster,
  'forged-frostbearer-spectre-necromancer': ForgedFrostbearerSpectreNecromancer,
  'frost-blades-slayer': FrostBladesSlayer,
  'glacial-cascade-elementalist': GlacialCascadeElementalist,
  'ground-slam-of-earthshaking-slayer': GroundSlamOfEarthshakingSlayer,
  'ice-shot-of-penetration-miner-deadeye': IceShotOfPenetrationMinerDeadeye,
  'ice-trap-trickster': IceTrapTrickster,
  'kinetic-blast-deadeye': KineticBlastDeadeye,
  'lightning-arrow-deadeye': LightningArrowDeadeye,
  'lightning-trap-of-sparking-elementalist': LightningTrapOfSparkingElementalist,
  'poison-ranged-animate-weapons': PoisonRangedAnimateWeapons,
  'poison-srs-necromancer': PoisonSrsNecromancer,
  'poisonous-concoction-of-bouncing-pathfinder': PoisonousConcoctionOfBouncingPathfinder,
  'rolling-magma-mines-saboteur': RollingMagmaMinesSaboteur,
  'storm-rain-deadeye': StormRainDeadeye,
  'tornado-of-elemental-turbulence-inquisitor': TornadoOfElementalTurbulenceInquisitor,
  'viper-strike-of-mamba-pathfinder': ViperStrikeOfMambaPathfinder,
  'wave-of-conviction-elementalist': WaveOfConvictionElementalist,
}
