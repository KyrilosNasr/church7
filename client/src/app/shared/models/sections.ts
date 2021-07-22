import { IImageAssets } from './image-assets';
export interface ICreateSection {
  id: number
  sectionName: number
  displayOrder: number
  bannerId?: number
  isActive: boolean,
  isWhite: boolean
}

export interface ISection {
  id: number
  sectionName: number
  displayOrder: number
  banner: IImageAssets
  isActive: boolean
  isWhite: boolean
}
