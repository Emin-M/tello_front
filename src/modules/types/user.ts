export interface Meta {
  utm_campaign: string;
}

export interface IUserData {
  id: string;
  external_id?: any;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  meta: Meta;
  created: number;
  updated: number;
}

export interface ICreateUser {
  firstname: string;
  lastname: string;
  email: string;
}

export interface IUser {
  loading: "idle" | "pending" | "succeeded" | "failed";
  user: IUserData | any;
  isLoggedin: boolean;
}
