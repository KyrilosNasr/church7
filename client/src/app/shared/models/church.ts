import { IImageAssets } from './image-assets';
export interface IChurchCreate {
  id?: number
  imageId: number | undefined
  bannerId: number | undefined
  description: string
}

export interface IChurchSection {
  image: IImageAssets
  banner: IImageAssets
  description: string
}


