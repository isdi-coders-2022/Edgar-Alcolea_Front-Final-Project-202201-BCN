export interface UserInterface {
  name: string;
  username: string;
  password: string;
  age: number;
  bio: string;
  city: string;
  image: string;
}

export interface LoggedUserInterface {
  id: string;
  username: string;
  image: string;
  loggedIn: boolean;
}
