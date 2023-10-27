export interface User {
  createUser(email: string): Promise<string>;
  getUser(id: number): Promise<string>;
}
