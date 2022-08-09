import { Material } from "./Material";
import { Occurrence } from "./Occurrence";

export interface Card {
  id: string;
  title: string;
  collectionId: string;
  materials: Array<Material>;
  occurences: Array<Occurrence>;
}
