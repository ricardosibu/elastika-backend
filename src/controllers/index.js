"use strict";
const config = require("../config");
const services = require("../services");

const Conversation = require("../models");

const controllers = {
  elastikaHome: (req, res) => {
    return res.status(200).send({
      message: "Bienvenido a la API para modelos AI de Eslatika test",
    });
  },

  createConversation: async (req, res) => {
    try {
      const conversationData = {
        conversation: req.body
      };
      const newConversation = new Conversation(conversationData);
      const savedConversation = await newConversation.save();
      res.status(201).json(savedConversation);
    } catch (error) {
      res.status(500).json({ message: "Error al crear nueva conversacion", error: error.message });
    }
  },

  elastikaPromptBash: async (req, res) => {
    try {
      const { linux_distribution, backend_platform, database } = req.query;
      if (!linux_distribution) {
        return res
          .status(400)
          .json({ error: "El parámetro linux_distribution es obligatorio" });
      }
      const data = {
        content: `Proveeme de un script bash sin comentarios y tampoco me des las instrucciones, solo dame el script bash, 
        para instalar ${linux_distribution}, ${backend_platform} y ${database}`,
        conversation_id: process.env.CONVERSATION_ID,
      };
      const sendMessageAI = await services.chatBashAI(data);
      return res.status(200).send({
        message: { sendMessageAI },
      });
    } catch (error) {
      return res.status(500).send({
        message: `Ha ocurrido un error ${error}`,
      });
    }
  },

  elastikaChatConversation: async (req, res) => {
    try {
      const { comments } = req.body;
      const data = {
        content: comments,
        conversation_id: process.env.CONVERSATION_ID,
      };
      const sendMessageAI = await services.chatBashAI(data);
      return res.status(200).send({
        message: { sendMessageAI },
      });
    } catch (error) {
      return res.status(500).send({
        message: `Ha ocurrido un error ${error}`,
      });
    }
  },

  getAllConversation: async (req, res) => {
    try {
      const conversation = await Conversation.find();
      res.status(200).json(conversation);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener las conversaciones", error: error.message });
    }
  },

  getConversationById: async (req, res) => {
    try {
      const conversation = await Conversation.findById(req.params.id).exec();
      res.status(200).json(conversation);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener la conversacion por el id indicado", error: error.message });
    }
  },
};

module.exports = controllers;
