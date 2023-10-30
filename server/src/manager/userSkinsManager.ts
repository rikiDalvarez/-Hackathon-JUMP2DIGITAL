import { UserSkinInterface } from "../Interfaces/UserSkinInterface";

export class UserSkinsManager implements UserSkinInterface {
  db: any;
  query: any;
  constructor(db: any, query: any) {
    this.db = db;
    this.query = query;
  }

  async buySkin(skinId: number, userId: number): Promise<object> {
    return new Promise((resolve, reject) => {
      this.db.query(
        this.query.BUY_SKIN,
        [skinId, userId],
        (err: any, results: any) => {
          if (err) {
            reject(err.message);
          } else {
            resolve(results);
          }
        }
      );
    });
  }

  async getMySkins(userId: number): Promise<object[]> {
    return new Promise((resolve, reject) => {
      this.db.query(
        this.query.GET_MY_SKINS,
        [userId],
        (err: any, results: any) => {
          if (err) {
            reject(err.message);
          } else {
            resolve(results);
          }
        }
      );
    });
  }

  async updateSkinColor(userSkinId: number, color: string): Promise<object> {
    return new Promise((resolve, reject) => {
      this.db.query(
        this.query.UPDATE_USERSKIN_COLOR,
        [color, userSkinId],
        (err: any, results: any) => {
          if (err) {
            reject(err.message);
          } else {
            resolve(results);
          }
        }
      );
    });
  }
}
