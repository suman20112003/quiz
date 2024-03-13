const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/quiz', (req, res) => {
  res.sendFile(__dirname + '/public/quiz.html');
});

app.get('/result', (req, res) => {
  const userScore = req.query.score;
  res.send(`Your score is ${userScore}`);
});

app.listen(port, () => {
  console.log(`Quiz app listening at http://localhost:${port}`);
});