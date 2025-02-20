const express = require('express');
const app = express();
const port = 5005;

app.listen(port,()=>{
    console.log(`running on http://localhost:${port}`);    
})