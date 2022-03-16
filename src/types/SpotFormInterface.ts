interface SpotFormInterface {
  name: string;
  description: string;
  location: string;
  xCoordinate: number | null;
  yCoordinate: number | null;
  image: File | null;
}

export default SpotFormInterface;
