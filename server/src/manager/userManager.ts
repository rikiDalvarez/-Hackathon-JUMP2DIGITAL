import { Pool } from "mysql2";
import { UserInterface } from "../Interfaces/UserInterface";

export class UserManager implements UserInterface {
  db: Pool;
  query: any;
  constructor(db: Pool, query: any) {
    this.db = db;
    this.query = query;
  }

  async createUser(email: string): Promise<string> {
    return new Promise((resolve, reject) => {
      this.db.query(
        this.query.CREATE_USER,
        [email],
        (err: any, results: any) => {
          if (err) {
            reject(err.message);
          } else {
            console.log(results);
            resolve("User created");
          }
        }
      );
    });
  }

  async getUser(id: number): Promise<string> {
    return new Promise((resolve, reject) => {
      this.db.query(this.query.SELECT_USER, [id], (err: any, results: any) => {
        if (err) {
          reject(err.message);
        } else {
          if (results.length === 0) {
            reject("User not found");
          } else {
            resolve(results[0]);
          }
        }
      });
    });
  }
}
