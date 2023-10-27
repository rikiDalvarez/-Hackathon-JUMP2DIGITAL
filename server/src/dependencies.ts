import database from "../config/mysql.config";
import { UserManager } from "./manager/userManager";
import QUERY_USERS from "./query/users.query";
import { UserService } from "./services/UserService";

// Create an instance of the UserManager class with the database connection and queries
export const userManager = new UserManager(database, QUERY_USERS);

export const userService = new UserService(userManager);

// console.log("dependenciesu", userService);
