import { UserSkinInterface } from "../Interfaces/UserSkinInterface";
export class UserSkinsManager implements UserSkinInterface {
  db: any;
  query: any;
  constructor(db: any, query: any) {
    this.db = db;
    this.query = query;
  }

  async buySkin(
    userId: number,
    skinId: number,
    color: string
  ): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.db.query(
        this.query.CREATE_NEW_USER_SKIN,
        [userId, skinId, color],
        (err: Error, results: any) => {
          if (err) {
            reject(new Error(err.message));
          } else {
            resolve(true);
          }
        }
      );
    });
  }

  async getMySkins(userId: number): Promise<object[]> {
    return new Promise((resolve, reject) => {
      this.db.query(
        this.query.SELECT_USER_SKINS,
        [userId],
        (err: Error, results: any) => {
          if (err) {
            reject(new Error(err.message));
          } else {
            resolve(results);
          }
        }
      );
    });
  }

  async updateSkinColor(userSkinId: number, color: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.db.query(
        this.query.UPDATE_USERSKIN_COLOR,
        [color, userSkinId],
        (err: any, results: any) => {
          if (err) {
            reject(new Error(err.message));
          } else {
            resolve(results.affectedRows > 0);
          }
        }
      );
    });
  }

  async deleteSkin(userSkinId: number): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.db.query(
        this.query.DELETE_USER_SKIN,
        [userSkinId],
        (err: any, results: any) => {
          if (err) {
            reject(new Error(err.message));
          } else {
            resolve(results.affectedRows > 0);
          }
        }
      );
    });
  }
}
