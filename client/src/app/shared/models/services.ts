import { IImageAssets } from './image-assets';
export interface IServiceCreate {
  id?: number
  name: string
  isActive: boolean
  bannerId: number
  description: string
  displayOrder: number
}

export interface IServiceDto {
  id?: number
  name: string
  isActive: boolean
  banner: IImageAssets
  description: string
  displayOrder: number
}

export interface IServiceName {
  id: number
  name: string
  isActive: boolean
}
