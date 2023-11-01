import { UserSkinInterface } from "../Interfaces/UserSkinInterface";
import QUERY_SKINS from "../query/skins.query";
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
  ): Promise<object> {
    return new Promise((resolve, reject) => {
      console.log("inside buy skin");
      console.log(userId, skinId, color);
      this.db.query(
        this.query.CREATE_NEW_USER_SKIN,
        [userId, skinId, color],
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
        this.query.SELECT_USER_SKINS,
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
