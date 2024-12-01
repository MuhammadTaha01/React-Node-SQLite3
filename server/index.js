const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let db = new sqlite3.Database('creditentials.db',(err)=>{
    if(err)
    {
        console.log('Error, connnecting to the database');
    }
    else{
        console.log('Connected to the database');
    }
});

app.post('/validate', (req,res) => {
    const {username,password} = req.body;
    const query = `SELECT * FROM creditentials WHERE username = ? AND password = ?`;
    db.all(query, [username, password], (err, rows) => {
        if (err) {
          console.error(err);
          res.status(500).send({ error: 'Internal Server Error' });
        } else {
          if (rows.length > 0) {
            res.send({ validation: true });
          } else {
            res.send({ validation: false });
          }
        }
      });
});


app.listen(PORT,()=>{
    console.log(`Listeing in PORT: ${PORT}`)
})