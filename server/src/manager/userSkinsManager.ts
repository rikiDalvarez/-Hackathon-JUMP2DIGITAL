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
    skinColor: string
  ): Promise<object> {
    // const skin = await this.db.query(
    //   QUERY_SKINS.SELECT_SKIN,
    //   [skinId],
    //   (err: any, results: any) => {
    //     console.log("testing");
    //     console.log(results);
    //     console.log({ err });
    //     if (err) {
    //       return { message: err.message };
    //     } else {
    //       return { skins: results };
    //     }
    //   }
    // );
    // console.log(skin);

    return new Promise((resolve, reject) => {
      this.db.query(
        this.query.CREATE_NEW_USER_SKIN,
        [userId, skinId, "black"],
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
