import { IImageAssets } from './image-assets';
import { IPaginationParams } from './pagination';
import { IPagination } from 'src/app/shared/models/response-result';

export interface IConfession {
  id?: number
  day: number
  startTime: Date
  endTime: Date
  place: string
  isActive: boolean
  gender: number
  displayOrder: number
}


export class IFather {
  id?: number
  name: string
  priestlyRank: string
  priestlyDate: string
  isDead: boolean = false
  deathDate?: string
  about?: string
  image: IImageAssets
  isActive: boolean = true
  displayOrder: number
  confessions?: IConfession[]
}

export class IFatherParams extends IPaginationParams{
  ConfessionId?:number;
}

export class IFatherReturn {
  banner?: IImageAssets;
  fathers: IPagination<IFather>
}
