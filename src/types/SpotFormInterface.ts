interface SpotFormInterface {
  name: string;
  description: string;
  location: string;
  xCoordinate: number | undefined;
  yCoordinate: number | undefined;
  image: File | null;
}

export default SpotFormInterface;
