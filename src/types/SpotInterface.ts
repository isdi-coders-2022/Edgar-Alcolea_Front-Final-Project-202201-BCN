interface SpotInterface {
  id: string;
  name: string;
  marked?: number;
  description: string;
  createdBy?: string;
  location: string;
  xCoordinate: number;
  yCoordinate: number;
  image: string;
}

export default SpotInterface;
