import { UserSkinInterface } from "../Interfaces/UserSkinInterface";
import { Skin } from "../types";

export class UserSkinService {
  userSkinInterface: UserSkinInterface;
  constructor(userSkinInterface: UserSkinInterface) {
    this.userSkinInterface = userSkinInterface;
  }

  async buySkin(
    skinId: number,
    userId: number,
    skinColor: string
  ): Promise<Skin> {
    return this.userSkinInterface.buySkin(skinId, userId, skinColor);
  }

  getMySkins(userId: number): Promise<object[]> {
    return this.userSkinInterface.getMySkins(userId);
  }

  updateSkinColor(userSkinId: number, color: string): Promise<object> {
    return this.userSkinInterface.updateSkinColor(userSkinId, color);
  }
}
