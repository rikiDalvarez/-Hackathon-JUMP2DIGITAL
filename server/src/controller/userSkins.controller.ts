import database from "../../config/mysql.config";
import QUERY_USERSKINS from "../query/userSkins.query";
import QUERY_SKINS from "../query/skins.query";
import QUERY_USERS from "../query/users.query";
import { userSkinService } from "../dependencies";
import { RowDataPacket } from "mysql2";

export const userSkins = async (req: any, res: any) => {
  database.query(QUERY_USERSKINS.SELECT_USERS, (err, results) => {
    if (err) {
      res.status(500).json({ message: err.message });
    } else {
      res.status(200).json({ skins: results });
    }
  });
};

export const addSkin = async (req: any, res: any) => {
  const { user_id, skin_id } = req.body;

  //TODO - use service
  const getSkinColor = (skin_id: number): Promise<string> => {
    return new Promise((resolve, reject) => {
      database.query(
        QUERY_SKINS.SELECT_SKIN,
        [skin_id],
        (err, results: RowDataPacket[]) => {
          if (err) {
            reject(err);
          } else {
            resolve(results[0].color);
          }
        }
      );
    });
  };

  const skinColor: string = await getSkinColor(skin_id);
  console.log("skincolor", skinColor);

  const test = await userSkinService.buySkin(user_id, skin_id, skinColor);
  console.log(test);
  res.status(200).json({ skin: test });
  // try {
  //   const availableSkins: any = await new Promise((resolve, reject) => {
  //     database.query(QUERY_SKINS.SELECT_AVAILABLE_SKINS, (err, results) => {
  //       if (err) {
  //         reject(err);
  //       } else {
  //         resolve(results);
  //       }
  //     });
  //   });
  //   const skinToUpdate = availableSkins.find((skin) => skin.id === skin_id);
  //   if (!skinToUpdate) {
  //     throw new Error("Skin not available");
  //   }

  //   const user = await new Promise((resolve, reject) => {
  //     database.query(QUERY_USERS.SELECT_USER, [skin_id], (err, results) => {
  //       if (err) {
  //         reject(err);
  //       } else {
  //         resolve(results);
  //       }
  //     });
  //   });
  //   if (!user) {
  //     throw new Error("User not found");
  //   }

  //   const updatedSkin = await new Promise((resolve, reject) => {
  //     const updatedQuantity = skinToUpdate.quantity - 1;
  //     database.query(
  //       QUERY_SKINS.UPDATE_SKIN,
  //       [
  //         skinToUpdate.name,
  //         skinToUpdate.price,
  //         skinToUpdate.type,
  //         skinToUpdate.color,
  //         updatedQuantity,
  //         skinToUpdate.id,
  //       ],
  //       (err, results) => {
  //         if (err) {
  //           reject(err);
  //         } else {
  //           resolve(results);
  //         }
  //       }
  //     );
  //   });

  //   const userSkinsUpdated = await new Promise((resolve, reject) => {
  //     database.query(
  //       QUERY_USERSKINS.CREATE_NEW_USER_SKIN,
  //       [user_id, skin_id, skinToUpdate.color],
  //       (err, results) => {
  //         if (err) {
  //           reject(err);
  //         } else {
  //           resolve(results);
  //         }
  //       }
  //     );
  //   });

  //   console.log("updatedSkin:", updatedSkin);

  //   console.log("user:", user);
  //   console.log("skinToUpdate:", userSkinsUpdated);
  //   res.status(201).json({ skin: updatedSkin });
  // } catch (error) {
  //   res.status(500).json({ message: error.message });
  // }
};

export const getUserSkins = async (req: any, res: any) => {
  const { user_id } = req.body;
  const mySkins = await userSkinService.getMySkins(user_id);
  console.log(mySkins);
  res.status(200).json({ skins: mySkins });
};

export const updateUserSkinColor = async (req: any, res: any) => {
  const { color, id } = req.body;
  const updatedSkin = await userSkinService.updateSkinColor(id, color);
  console.log(updatedSkin);
  res.status(200).json({ skin: updatedSkin });
};

export const deleteUserSkin = async (req: any, res: any) => {
  const { id } = req.params;
  console.log("inside", id);
  try {
    const deletedSkin = await new Promise((resolve, reject) => {
      database.query(QUERY_USERSKINS.DELETE_USER_SKIN, [id], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
    res.status(200).json({ skin: deletedSkin });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
