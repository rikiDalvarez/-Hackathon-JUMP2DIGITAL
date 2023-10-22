const QUERY_USERS = {
  SELECT_USER: "SELECT * FROM users WHERE id = ?",
  SELECT_USER_BY_EMAIL: "SELECT * FROM users WHERE email = ?",
  CREATE_USER: "INSERT INTO users(email) VALUES(?) ",
  UPDATE_USER: "UPDATE users SET email = ? WHERE id = ?",
  DELETE_USER: "DELETE FROM users WHERE id = ?",
};
