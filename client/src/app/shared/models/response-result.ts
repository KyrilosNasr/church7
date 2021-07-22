import { IImageAssets } from './image-assets';
export class ResponseResult<T> {
  error: any
  result: T
  success: Boolean
  unAuthorizedRequest: boolean
}

export class ListResult<T>{
  items: T[]
  totalCount: number
}

export class IPagination<T>{
  pageSize: number;
  pageIndex: number;
  count: number;
  result: T[];
}

export class IEnumMapping {
  id: number;
  name: string
}
