export interface SkinInterface {
  getAvailableSkin(): Promise<Object[]>;
  getSkinById(skinId: number): Promise<Object>;
}
