const express = require('express');
const router = express.Router();

// const athir_controller = require('../app/controllers/AthirController.js');


const my_routes = {
	helloWorld: function(req, res) {
		res.send("Hello world");
	
	},

	//iniFungsi: function(req, res) {
		//res.send('Athir');
	//}
};


router.get('/', my_routes.helloWorld);



module.exports = router;