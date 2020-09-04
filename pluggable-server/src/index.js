import loadPlugins from "mf-plugins";
import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Base pluggable server page");
});

const start = async () => {
  const plugins = await loadPlugins("../plugins");
  plugins.forEach((plugin) => {
    app.get(plugin.path, plugin.handler);
  });

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
};

start();
