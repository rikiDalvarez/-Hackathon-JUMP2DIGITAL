export interface UserSkinInterface {
  buySkin(skinId: number, userId: number, skinColor: string): Promise<boolean>;
  getMySkins(userId: number): Promise<object[]>;
  updateSkinColor(userSkinId: number, color: string): Promise<boolean>;
  deleteSkin(id: number): Promise<boolean>;
}
