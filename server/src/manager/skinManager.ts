import { SkinInterface } from "../Interfaces/SkinInterface";

export class SkinManager implements SkinInterface {
  db: any;
  query: any;
  constructor(db: any, query: any) {
    this.db = db;
    this.query = query;
  }

  async getAvailableSkin(): Promise<object[]> {
    return new Promise((resolve, reject) => {
      this.db.query(
        this.query.SELECT_AVAILABLE_SKINS,
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

  async getSkinById(id: number): Promise<object> {
    return new Promise((resolve, reject) => {
      this.db.query(this.query.SELECT_SKIN, [id], (err: any, results: any) => {
        if (err) {
          reject(err.message);
        } else {
          resolve(results[0]);
        }
      });
    });
  }
}
