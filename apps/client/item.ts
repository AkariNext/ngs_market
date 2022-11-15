export interface IItem {
  id: string
  name: string
  rarity: number
  droparies: { id: string, name: string }[]
}
