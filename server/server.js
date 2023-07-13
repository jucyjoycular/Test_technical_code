const express = require('express')
const cors = require('cors')
const app = express()
const port = 8000

app.use(cors())
app.use(express.json());
app.get('/message', (req,res) => {
res.json({ message: "test ajax"});
} 
)


app.listen(port, () => console.log(" Server started on port 8000"))