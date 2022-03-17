interface SpotFormInterface {
  id?: string;
  name: string;
  description: string;
  location: string;
  coordinates: string;
  image: File | null;
}

export default SpotFormInterface;
