const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const globalArray = []

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', getHomepage)
app.post('/', getFormDataThenRedirect)
app.listen(3000, server)


function getHomepage(request, response) {
    let valueOfTitle = currentDate()
    let valueOfList = globalArray
    response.render('list', { keyOfTitle: valueOfTitle, keyOfList: valueOfList })
}

function server() {
    console.log('Server Kickin!')
}

function currentDate(){
	let x = new Date();
	let options = {
		weekday: 'long',
		day: 'numeric',
		month: 'short'
	};
	let currentDate = x.toLocaleDateString('en-us', options)
	return currentDate
}

function getFormDataThenRedirect(request, response){
	let x = request.body.valueOfList
	globalArray.push(x)
	response.redirect('/')
}