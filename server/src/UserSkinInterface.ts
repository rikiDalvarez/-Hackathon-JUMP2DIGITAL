export interface UserSkin {
  buySkin(skinId: number, userId: number): Promise<object>;
  getMySkins(userId: number): Promise<object[]>;
}
