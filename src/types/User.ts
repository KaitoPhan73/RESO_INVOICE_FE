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
  name: string;
  code: string;
  role: string;
  taxcode: string;
  descriptions: string;
  status: boolean;
  secretKey: string;
};

export type TUser = {
  id: string;
  name: string;
  username: string;
  role: string;
  status: string;
  brandName: string;
};
