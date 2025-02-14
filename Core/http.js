const express = require("express");
const axios = require("axios");
const logger = require("./logger");
const router = new express.Router();

const getRouterHelper = () => {
  router.get("/api/get", async (req, res) => {
    logger.start();
    const { url } = req.query;

    if (!url) {
      return res.status(400).send(logger.urlReq());
    }

    try {
      const response = await axios.get(url);
      res.json(response.data);
    } catch (error) {
      res.status(500).send(logger.failure("GET", url, error));
    }
  });
};

const postRouterHelper = () => {
  router.post("/api/post", async (req, res) => {
    logger.start();
    const { url, jsonBody } = req.body;

    if (!url) {
      return res.status(400).send(logger.urlReq());
    }

    try {
      const response = await axios.post(url, jsonBody);
      res.json(response.data);
    } catch (error) {
      res.status(500).send(logger.failure("POST", url, error));
    }
  });
};

const putRouterHelper = () => {
  router.put("/api/put", async (req, res) => {
    logger.start();
    const { url, jsonBody } = req.body;

    if (!url) {
      return res.status(400).send(logger.urlReq());
    }

    try {
      const response = await axios.put(url, jsonBody);
      res.json(response.data);
    } catch (error) {
      res.status(500).send(logger.failure("PUT", url, error));
    }
  });
};

const deleteRouterHelper = () => {
  router.delete("/api/delete", async (req, res) => {
    logger.start();
    const { url } = req.body;

    if (!url) {
      return res.status(400).send(logger.urlReq());
    }

    try {
      const response = await axios.delete(url);
      res.json(response.data);
    } catch (error) {
      res.status(500).send(logger.failure("DELETE", url, error));
    }
  });
};

getRouterHelper();
postRouterHelper();
putRouterHelper();
deleteRouterHelper();

module.exports = router;
