export interface SpotInterface {
  id: string;
  name: string;
  marked?: number;
  description: string;
  createdBy: CreatedByInterface;
  location: string;
  xCoordinate: number;
  yCoordinate: number;
  image: string;
}

export interface CreatedByInterface {
  id: string;
  username: string;
}
