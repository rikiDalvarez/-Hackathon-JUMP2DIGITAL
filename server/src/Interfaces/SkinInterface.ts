import { Skin } from "../types";
export interface SkinInterface {
  getAvailableSkin(): Promise<Skin[]>;
  getSkinById(skinId: number): Promise<Skin>;
}
