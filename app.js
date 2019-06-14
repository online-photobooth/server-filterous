const express = require('express');
const app = express.app();
const path = require('path');
const fs = require('fs');

app.use(express.static('public'));


app.get('/filter/:filter', (req, res) => {
  res.setHeader('image/png')
  const original = fs.readFileSync(path.join(__dirname, 'original.png'));
  const output = path.join(__dirname, 'public', 'filter.png')

  filterous.importImage(original)
  .applyInstaFilter(filter)
  .save(output);

  res.sendFile(output);
})

app.listen(4444);