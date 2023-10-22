import database from "../../config/mysql.config";
import QUERY_USERSKINS from "../query/userSkins.query";

export const userSkins = async (req: any, res: any) => {
  database.query(QUERY_USERSKINS.SELECT_USERS, (err, results) => {
    if (err) {
      res.status(500).json({ message: err.message });
    } else {
      res.status(200).json({ skins: results });
    }
  });
};
