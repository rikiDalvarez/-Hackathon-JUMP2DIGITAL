export interface UserSkinInterface {
  buySkin(skinId: number, userId: number, skinColor: string): Promise<object>;
  getMySkins(userId: number): Promise<object[]>;
  updateSkinColor(userSkinId: number, color: string): Promise<object>;
}
