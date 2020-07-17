const express = require('express');
const ArticlesService = require('./articles-service');

const articlesRouter = express.Router();
const jsonParser = express.json();

articlesRouter