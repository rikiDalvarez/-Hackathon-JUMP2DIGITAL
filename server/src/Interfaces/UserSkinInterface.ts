import { Skin } from "../types";

export interface UserSkinInterface {
  buySkin(skinId: number, userId: number, skinColor: string): Promise<boolean>;
  getMySkins(userId: number): Promise<object[]>;
  updateSkinColor(userSkinId: number, color: string): Promise<object>;
}
