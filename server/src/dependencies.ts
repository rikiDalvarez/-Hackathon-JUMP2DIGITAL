import database from "../config/mysql.config";
import QUERY_USERSKINS from "./query/userSkins.query";
import QUERY_USERS from "./query/users.query";
import QUERY_SKINS from "./query/skins.query";
import { UserManager } from "./manager/userManager";
import { UserService } from "./services/UserService";
import { SkinService } from "./services/SkinService";
import { SkinManager } from "./manager/skinManager";
import { UserSkinsManager } from "./manager/userSkinsManager";
import { UserSkinService } from "./services/UserSkinService";

// Instaciate User services
const userManager = new UserManager(database, QUERY_USERS);
export const userService = new UserService(userManager);

// Instaciate UserSkin services
const userSkinManager = new UserSkinsManager(database, QUERY_USERSKINS);
export const userSkinService = new UserSkinService(userSkinManager);

// Instaciate Skin services
const skinManager = new SkinManager(database, QUERY_SKINS);
export const skinService = new SkinService(skinManager);
