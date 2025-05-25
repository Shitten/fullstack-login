const path = require('path');
const express = require('express');
const app = express();
app.use(express.json());
const username = process.env['USERNAME_KEY'];
const password = process.env['PASSWORD_KEY'];
const PORT = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, '../frontend')));


app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


app.use(express.urlencoded({ extended: true }))
app.post('/login', (req, res) => {
  const data = req.body;
  console.log('Received data:', data);
  
    if(data.username === username && data.password === password ){
  console.log('correct');
      res.json({ success: true });
      return
    }else{
      console.log('wrong')
      res.json({ success: false });
    }
});

