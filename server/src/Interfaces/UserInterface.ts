export interface UserInterface {
  createUser(email: string): Promise<string>;
  getUser(id: number): Promise<string>;
}
