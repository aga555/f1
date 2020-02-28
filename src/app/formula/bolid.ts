export class Bolid {
  modelName: string;
  imageUrl: string;
  range = 100;
  constructor(modelName: string, imageUrl: string) {
    this.modelName = modelName;
    this.imageUrl = imageUrl;
  }
}
