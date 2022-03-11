import ObjectID from "bson-objectid";

interface SpotInterface {
  id: ObjectID;
  name: string;
  marked: number;
  description: string;
  createdBy: string;
  location: string;
  coordinates: number[];
  image: string;
}

export default SpotInterface;
