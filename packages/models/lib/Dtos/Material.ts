export enum MaterialType {
  Example = "Example",
  Image = "Image",
  Definition = "Definition",
}
export interface Material {
  header: string;
  content: string;
  MaterialType: MaterialType;
  cardId: string;
}
