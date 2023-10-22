const QUERY_SKINS = {
  SELECT_AVAILABLE_SKINS:
    "SELECT * FROM skins WHERE quantity > 0 ORDER BY created_at DESC ",
  SELECT_SKIN: "SELECT * FROM skins WHERE id = ?",
  CREATE_SKIN:
    "INSERT INTO skins(name, price, type, color, quantity) VALUES(?, ?, ?, ?, ?) ",
  UPDATE_SKIN:
    "UPDATE skins SET name = ?, price = ?, type = ?, color = ?, quantity = ? WHERE id = ?",
};

export default QUERY_SKINS;
