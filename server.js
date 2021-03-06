const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 3000;
var app = express();
app.set('view engine','hbs');
app.use(express.static(__dirname + '/public'))

app.get('/',(req,res) => {

res.render('home.hbs',{
	pageTitle:'HomePage',
	welcomeMsg:'Welcome to the server website',
	currentYear:new Date().getFullYear()
})
})

app.get('/about',(req,res)=>{

res.render('about.hbs',{
	pageTitle:'about',
	currentYear:new Date().getFullYear()
});
});

app.listen(port, ()=>{
	console.log(`Server is started on ${port}`);
});