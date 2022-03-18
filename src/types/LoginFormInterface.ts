export interface LoginFormInterface {
  username: string;
  password: string;
}

export interface RegisterFormInterface extends LoginFormInterface {
  username: string;
  password: string;
  name: string;
  bio: string;
  age: number | string;
  city: string;
  image: File | null;
}
