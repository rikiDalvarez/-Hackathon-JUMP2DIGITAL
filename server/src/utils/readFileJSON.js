const fs = require("fs").promises;

async function readFileJSON(filePath) {
  if (!filePath) {
    return "please provide a file path"
  }

  try {
    const rawData = await fs.readFile(filePath, "utf8");
    const jsonData = JSON.parse(rawData);

    const availableSkins = jsonData.filter((skin) => skin.quantity > 0);

    return availableSkins;
  } catch (error) {
    console.error("Error reading or parsing the file:", error);
    throw error;
  }
}

async function execute(filePath) {
  try {
    const availableSkins = await readFileJSON(filePath);
    console.log(availableSkins);
  } catch (error) {
  }
}

execute("../skinsTest.json");

