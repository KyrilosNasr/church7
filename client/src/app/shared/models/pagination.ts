export class IPaginationParams {
  PageIndex?: number;
  PageSize?: number;
  Sort?: string;
  Search?: string;
}

export class IPaginatorEvent {
  page?: number;
  first?: number;
  rows?: number;
  pageCount?: number
}

export class IMaterialsPagination {
  length: number
  pageIndex: number
  pageSize: number
  previousPageIndex: number
}
