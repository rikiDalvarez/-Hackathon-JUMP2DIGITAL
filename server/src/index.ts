import exporess from "express";
import ip from "ip";
import cors from "cors";
import "dotenv/config";
import config from "../config/config";
import { router } from "./routes";

const app = exporess();

const PORT = config.PORT || 3000;

app.use(cors({ origin: "*" }));
app.use(exporess.json());
app.use("/skins", router);

app.listen(PORT, () => {
  console.log(`Server running at http://${ip.address()}:${PORT} 🍄`);
});
