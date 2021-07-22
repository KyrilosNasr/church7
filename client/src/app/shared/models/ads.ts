import { IImageAssets } from './image-assets';
export interface IAd {
  id?: number
  image: IImageAssets
  displayOrder: number
  isActive: boolean
}

export interface ICreateAd {
  id: number
  imageId: number
  displayOrder: number
  isActive: boolean
}
