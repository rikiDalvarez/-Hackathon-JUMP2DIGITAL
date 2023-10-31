export interface UserSkinInterface {
  buySkin(skinId: number, userId: number): Promise<object>;
  getMySkins(userId: number): Promise<object[]>;
  updateSkinColor(
    userSkinId: number,
    color: string
  ): Promise<object>;
}
