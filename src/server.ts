import app from "./app";
import config from "./app/config";

app.listen(config.port, () => {
  console.log(`Example app listening on process.env.PORT ${config.port}`);
});
