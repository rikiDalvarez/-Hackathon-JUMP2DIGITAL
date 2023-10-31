import { UserSkinInterface } from "../Interfaces/UserSkinInterface";

export class UserSkinService {
  userSkinInterface: UserSkinInterface;
  constructor(userSkinInterface: UserSkinInterface) {
    this.userSkinInterface = userSkinInterface;
  }

  async buySkin(skinId: number, userId: number): Promise<object> {
    return this.userSkinInterface.buySkin(skinId, userId);
  }

  getMySkins(userId: number): Promise<object[]> {
    return this.userSkinInterface.getMySkins(userId);
  }

  updateSkinColor(userSkinId: number, color: string): Promise<object> {
    return this.userSkinInterface.updateSkinColor(userSkinId, color);
  }
}
