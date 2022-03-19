interface SpotFormInterface {
  id?: string;
  name: string;
  description: string;
  location: string;
  coordinates: string;
  image: File | null;
  createdBy?: string;
}

export default SpotFormInterface;
