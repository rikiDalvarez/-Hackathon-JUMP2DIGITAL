import { SkinInterface } from "../Interfaces/SkinInterface";
import { Pool } from "mysql2";
import { Skin } from "../types";

export class SkinManager implements SkinInterface {
  db: Pool;
  query: any;
  constructor(db: Pool, query: any) {
    this.db = db;
    this.query = query;
  }

  async getAvailableSkin(): Promise<Skin[]> {
    return new Promise((resolve, reject) => {
      this.db.query(
        this.query.SELECT_AVAILABLE_SKINS,
        (err: Error, results: any) => {
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

  async getSkinById(id: number): Promise<Skin> {
    return new Promise((resolve, reject) => {
      this.db.query(
        {
          sql: this.query.SELECT_SKIN,
          timeout: 4000,
          values: [id],
        },
        (err: Error, results: any) => {
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
