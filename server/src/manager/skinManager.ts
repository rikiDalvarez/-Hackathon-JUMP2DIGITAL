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
            console.log(err.message);
            reject(new Error(err.message));
          } else {
            resolve(results);
          }
        }
      );
    });
  }

  async getSkinById(id: number): Promise<object> {
    return new Promise((resolve, reject) => {
      this.db.query(
        { sql: this.query.SELECT_SKIN, timeout: 4000, values: [id] },
        // this.query.SELECT_SKIN, [id],
        //         {
        //   sql: 'SELECT * FROM `books` WHERE `author` = ?',
        //   timeout: 40000, // 40s
        //   values: ['David']
        // }, function (error, results, fields) {
        //   // error will be an Error if one occurred during the query
        //   // results will contain the results of the query
        //   // fields will contain information about the returned results fields (if any)
        //       }
        (err: any, results: any) => {
          if (err) {
            reject(new Error(err.message));
          } else {
            console.log("results", results);
            resolve(results[0]);
          }
        }
      );
    });
  }
}
