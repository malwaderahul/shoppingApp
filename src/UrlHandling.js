var express = require('express');
var app = express();
var router = express.Router();
const moltin = require('@moltin/sdk');
const Moltin = moltin.gateway({
        client_id: "v39e9kb4PuuTinzGeGCn3ajysc0wg5gYt07ipiGzpw",
        client_secret: "yC5OULIpoLBgyNgl2yMNx2hGaXPDFHBvUdL0fF2x3y"
});


var auth = require('./MoltinAPI/auth.js');
var mobiles = require('./MoltinAPI/mobile.js');
var cartObj = require('./MoltinAPI/listCartProduct.js');



router.get('/', function(req, res){
   //res.send('GET route on urls.');
   //get All the Products
    Moltin.Authenticate().then((response) => {
        //console.log('authenticated', response);
        Moltin.Products.All().then((products) => {
             res.send(products);
        });
    });
});


router.get('/cart',function(req,res){

    cartObj.getCartDetails(Moltin).then(function(response){
        console.log(response);
        res.send(response);
    });


});



router.post('/', function(req, res){
   res.send('POST route on urls.');
});

//export this router to use in our index.js
module.exports = router;