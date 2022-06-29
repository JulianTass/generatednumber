const app = require('express') ();
const port =8080;

app.listen(
    port,
    () => console.log('its alive on http://localhost:${PORT}')
)

app.get('/random', (req, res) => {

    console.log("hello world");
      
    let x = Math.floor((Math.random() * 100000) + 100000);
    const randomNumb = JSON.parse(x);
   

    res.status(200).send({
        number:randomNumb
    })



});