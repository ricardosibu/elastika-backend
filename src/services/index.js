const Axios = require("axios");
const { V4: uuidv4 } = require('uuid');
const config = require("../config");


const Conversation = require('../models');

const token = config.CODY_API_KEY;

const services = {
  chatBashAI: async (data) => {
    const urlApi = `${process.env.CODY_AI_API}/messages`;
    const headers = {
      Authorization: `Bearer ${process.env.CODY_API_KEY}`,
      "Content-Type": "application/json",
    };
    try {
      const result = await Axios.post(urlApi, data, {
        headers,
      })
        .then((response) => response.data)
        .catch((error) => error);

      return result;  
    } catch (error) {
      return error;
    }
  },
  
};

module.exports = services;
