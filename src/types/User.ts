export type TLogin = {
  username: String;
  password: String;
};

export type TResponseLogin = {
  accessToken: string;
  username: string;
  name: string;
  role: string;
  status: string;
  brandName?: string;
};

export type TUserBase = {
  id: string;
  username: string;
  name: string;
  role: boolean;
  status: boolean;
  storeId: string;
  storeCode: string;
  brandId: string;
  brandCode: string;
};
