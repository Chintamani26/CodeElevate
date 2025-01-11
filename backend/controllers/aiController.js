const { analyzeCode } = require('../utils/codeAnalysis');
const { answerQuery } = require('../utils/aiDoubtSolver');
const { getRecommendations } = require('../utils/recommendations');

exports.analyzeCode = (req, res) => {
  const { code } = req.body;
  const analysis = analyzeCode(code);
  res.json(analysis);
};

exports.answerQuery = async (req, res) => {
  const { question } = req.body;
  const answer = await answerQuery(question);
  res.json({ answer });
};

exports.getRecommendations = (req, res) => {
  const { userProfile, problemFeatures } = req.body;
  const recommendation = getRecommendations(userProfile, problemFeatures);
  res.json({ recommendation });
};