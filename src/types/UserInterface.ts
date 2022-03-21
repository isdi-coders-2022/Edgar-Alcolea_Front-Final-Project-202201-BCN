import { SpotInterface } from "./SpotInterface";

export interface UserInterface {
  name: string;
  username: string;
  password: string;
  age: number;
  bio: string;
  city: string;
  image: string;
  createdSpots?: SpotInterface[];
}

export interface LoggedUserInterface {
  id: string;
  username: string;
  image: string;
  loggedIn: boolean;
  admin: boolean;
}
