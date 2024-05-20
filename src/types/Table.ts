export type TTableResponse<T> = {
  items: T[];
  page: number;
  pageSize: number;
  total: number;
};
