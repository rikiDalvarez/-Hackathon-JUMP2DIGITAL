import exporess from "express";
import ip from "ip";
import cors from "cors";
import "dotenv/config";
import config from "../config/config";

const app = exporess();

const PORT = config.PORT || 3000;
app.use(cors({ origin: "*" }));
app.use(exporess.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server running at http://${ip.address()}:${PORT} 🍄`);
});
