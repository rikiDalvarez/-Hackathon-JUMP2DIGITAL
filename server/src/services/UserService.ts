import { UserInterface } from "../Interfaces/UserInterface";

export class UserService {
  userInterface: UserInterface;
  constructor(userInterface: UserInterface) {
    this.userInterface = userInterface;
  }

  createUser(email: string): Promise<string> {
    return this.userInterface.createUser(email);
  }

  async getUser(id: number): Promise<string> {
    return this.userInterface.getUser(id);
  }
}
