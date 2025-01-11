const express = require('express');
const router = express.Router();
const aiController = require('../controllers/aiController');

router.post('/analyze-code', aiController.analyzeCode);
router.post('/answer-query', aiController.answerQuery);
router.post('/recommendations', aiController.getRecommendations);

module.exports = router;