import { UserSkinInterface } from "../Interfaces/UserSkinInterface";
export class UserSkinService {
  userSkinInterface: UserSkinInterface;
  constructor(userSkinInterface: UserSkinInterface) {
    this.userSkinInterface = userSkinInterface;
  }

  async buySkin(
    skinId: number,
    userId: number,
    skinColor: string
  ): Promise<boolean> {
    return this.userSkinInterface.buySkin(skinId, userId, skinColor);
  }

  getMySkins(userId: number): Promise<object[]> {
    return this.userSkinInterface.getMySkins(userId);
  }

  updateSkinColor(userSkinId: number, color: string): Promise<boolean> {
    return this.userSkinInterface.updateSkinColor(userSkinId, color);
  }

  deleteSkin(id: number): Promise<boolean> {
    return this.userSkinInterface.deleteSkin(id);
  }
}
