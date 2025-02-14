const chalk = require("chalk");

const startMessage = () => {
  console.log(chalk.blue("********************"));
};

const successMessage = (_method, _url) => {
  console.log(chalk.green(`${_method} is api is Success with url - ${_url}`));
};

const failureMessage = (_method, _url, error) => {
  console.log(chalk.red(`${_method} api is failed with url - ${_url}`));
  return { error: error?.message };
};

const endMessage = () => {
  console.log(chalk.grey("********************"));
};

const urlErrorMessage = () => {
  console.log(chalk.red(`!!! URL is Required !!!`));
  return {
    error: "URL is required",
  };
};

module.exports = {
  start: startMessage,
  success: successMessage,
  failure: failureMessage,
  end: endMessage,
  urlReq: urlErrorMessage,
};
