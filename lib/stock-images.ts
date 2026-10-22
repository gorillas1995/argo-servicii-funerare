/** Named stock photographs from the Argo image brief (Pexels + local assets). */

export type StockAspect = '3/2' | '4/3' | '4/5' | '3/4' | '16/9'

export type StockImage = {
  src: string
  alt: string
  aspect?: StockAspect
  objectPosition?: string
}

const pexels = (id: string, w = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`

/** Hands held in a gesture of support — homepage presence, Sector 4. */
export const SPRIJIN_1: StockImage = {
  src: pexels('5184136'),
  alt: 'Mâini ținute într-un gest de sprijin și încredere',
  aspect: '4/3',
}

/** Hands close in a gesture of care — Servicii consultation, Ilfov. */
export const SPRIJIN_2: StockImage = {
  src: pexels('7659453'),
  alt: 'Mâini apropiate într-un gest de grijă și susținere',
  aspect: '4/3',
}

/** White roses in a glass vase — Produse florals, Sector 6. */
export const FLORI_1: StockImage = {
  src: pexels('18532003'),
  alt: 'Trandafiri albi într-o vază de sticlă, pe un fundal neutru',
  aspect: '4/5',
  objectPosition: '50% 75%',
}

/** Completing and checking documents — Servicii actes, Sector 3. */
export const ACTE_1: StockImage = {
  src: pexels('8152735'),
  alt: 'Completarea și verificarea unor documente la birou',
  aspect: '4/3',
}

/** Closed coffin with flowers and candles — Servicii ceremony, Sector 2. */
export const CEREMONIE_1: StockImage = {
  src: pexels('7317666'),
  alt: 'Sicriu închis, aranjamente florale și lumânări pentru o ceremonie funerară',
  aspect: '4/3',
}

/** Funeral arrangement indoors with flowers and candles — Sector 5. */
export const CEREMONIE_2: StockImage = {
  src: pexels('7317671'),
  alt: 'Amenajare funerară într-un interior, cu flori și lumânări',
  aspect: '3/2',
}

/** Wooden coffin detail with metal handle — Produse sicrie (illustrative). */
export const SICRIU_1: StockImage = {
  src: pexels('7317680'),
  alt: 'Detaliu de sicriu din lemn, cu mâner metalic și flori',
  aspect: '4/3',
}

/** Aerial view of Bucharest near Casa Presei Libere — Sector 1 context only. */
export const BUCURESTI_1: StockImage = {
  src: pexels('12743443'),
  alt: 'Vedere aeriană a Bucureștiului, în zona Casei Presei Libere',
  aspect: '16/9',
}

/** Local homepage photograph — complete funeral services in Bucharest. */
export const HOME_SERVICES: StockImage = {
  src: '/servicii-funerare-complete-bucuresti.jpg',
  alt: 'Servicii funerare complete în București — Agenția Funerară Argo',
  aspect: '4/3',
}

/** Repatriere page figure — international funeral transport. */
export const REPATRIERE: StockImage = {
  src: '/repatriere-decedati-romania-transport-funerar-international.jpg',
  alt: 'Transport funerar internațional pentru repatrierea decedaților',
  aspect: '3/2',
}
