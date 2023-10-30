export interface UserSkinInterface {
  buySkin(skinId: number, userId: number): Promise<object>;
  getMySkins(userId: number): Promise<object[]>;
  updateSkinColor(
    skinId: number,
    userId: number,
    color: string
  ): Promise<object>;
}
