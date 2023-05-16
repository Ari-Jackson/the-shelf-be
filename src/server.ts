import app from "./app";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT;

app.listen(PORT || 3000, () => {
  console.log(`I'll be right by your side, on port ${PORT || 3000}`);
});
