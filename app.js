const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const filterous = require('filterous');

app.use(express.static('public'));


app.get('/filter/:filter', async (req, res) => {
  const original = fs.readFileSync(path.join(__dirname, 'original.png'));
  const output = path.join(__dirname, 'public', 'filter.png')

  await filterous.importImage(original, {
    format: 'png'
  })
  .applyInstaFilter(req.params.filter)
  .save(output);

  res.sendFile(output);
})

app.listen(4444, () => {
  console.log('Server listening on http://localhost:4444')
});