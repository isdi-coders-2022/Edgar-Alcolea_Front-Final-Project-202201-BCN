export interface LoginFormInterface {
  userName: string;
  password: string;
}

export interface RegisterFormInterface extends LoginFormInterface {
  userName: string;
  password: string;
  name: string;
  bio: string;
  age: number | string;
  city: string;
}
