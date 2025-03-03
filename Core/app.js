const express = require("express");
const chalk = require("chalk");
const path = require("path");
const hbs = require("hbs");
const configData = require("./config.json");
const httpRouter = require("./http");
const open = require("open");
const cors = require("cors");

const app = express();
const port = process.env.PORT || configData.port;
app.use(express.json());
app.use(httpRouter);
app.use(cors());

const copyright = configData.copyright;
const publicDirectoryPath = path.join(__dirname, "../public");
const viewDirectoryPath = path.join(__dirname, "../template/views");
const partialDirectoryPath = path.join(__dirname, "../template/partial");

app.set("view engine", "hbs");
app.set("views", viewDirectoryPath);
hbs.registerPartials(partialDirectoryPath);

const expressStaticCall = () => {
  app.use(express.static(publicDirectoryPath));
};

const callingDynamicHBS = () => {
  app.get("", (req, res) => {
    console.log(chalk.yellow(` |> Calling landing page of Http Man`));
    res.render("index", {
      methordAllowed: configData.methordAllowed,
      copyright,
    });
  });
};

const startServer = () => {
  app.listen(port, () => {
    console.clear();
    console.log(
      chalk.yellowBright(
        `Server is up and running at  [-> localhost:${port} <-]`
      )
    );
  });
  open(`http://localhost:${port}`, { app: "chrome" });
};

// starting main server here
expressStaticCall();
callingDynamicHBS();
startServer();
