import { IPaginationParams } from "./pagination"

export class IImageAssets {
  id?: number;
  title?: string;
  imgUrl?: string;
}

export interface IImageAssetsParams extends IImageAssets , IPaginationParams{

}

