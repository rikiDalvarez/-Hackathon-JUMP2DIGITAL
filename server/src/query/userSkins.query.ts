const QUERY_USERSKINS = {
  SELECT_USERS: "SELECT * FROM user_skins",
  SELECT_USER_SKINS: "SELECT * FROM user_skins WHERE user_id = ?",
  UPDATE_USER: "UPDATE user_skins SET color = ? WHERE id = ?",
  CREATE_NEW_USER_SKIN:
    "INSERT INTO user_skins(user_id, skin_id, color) VALUES(?, ?, ?)",
  DELETE_USER_SKIN: "DELETE FROM user_skins WHERE user_id = ? && skin_id = ?",
};

export default QUERY_USERSKINS;
