import { SkinInterface } from "../Interfaces/SkinInterface";
import { Skin } from "../types";

export class SkinService {
  skinInterface: SkinInterface;
  constructor(skinInterface: SkinInterface) {
    this.skinInterface = skinInterface;
  }

  async getAvailableSkin(): Promise<object> {
    return this.skinInterface.getAvailableSkin();
  }

  async getSkinById(id: number): Promise<object> {
    return this.skinInterface.getSkinById(id);
  }
}
