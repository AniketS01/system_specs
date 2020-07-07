const express = require('express')
const path = require('path')
var exphbs  = require('express-handlebars')
const specs = require('./specifications/specifications')

const app = express()



app.set('views', path.join(__dirname, 'views'))
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.get('/', (req, res) => {
    res.render('home' , {specs})
})


PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log('server started .......'))