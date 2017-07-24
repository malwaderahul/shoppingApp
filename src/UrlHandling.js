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
var dummycheck = require('./MoltinAPI/dummyCheckout.js');

//Get Mobile Products  List after authentication
router.get('/mobile', function(req, res){
   //res.send('GET route on urls.');
   //get All the Products
    Moltin.Authenticate().then((response) => {
        //console.log('authenticated', response);
        Moltin.Products.All().then((products) => {
             res.send(products);
        });
    });
});

//Get the cart details
router.get('/cart',function(req,res){

    cartObj.getCartItems(Moltin).then(function(response){
        console.log(response);
        res.send(response);
    });

});


//dummy checkout funtion for posting it to moltin Saas
router.post('/dummyCheckout' , function(req,res){

    var checkoutObj = { customer: {
                        name: 'John Doe',
                        email: 'john@doe.co'
                        },
                        shipping_address: {
                            first_name: 'John',
                            last_name: 'Doe',
                            line_1: '2nd Floor British India House',
                            line_2: '15 Carliol Square',
                            city: 'Newcastle Upon Tyne',
                            postcode: 'NE1 6UF',
                            county: 'Tyne & Wear',
                            country: 'United Kingdom'
                        },
                        billing_address: {
                            first_name: 'John',
                            last_name: 'Doe',
                            line_1: '2nd Floor British India House',
                            line_2: '15 Carliol Square',
                            city: 'Newcastle Upon Tyne',
                            postcode: 'NE1 6UF',
                            county: 'Tyne & Wear',
                            country: 'United Kingdom'
                        }
                    };
       //     console.log(checkoutObj);        
    Moltin.Cart.Checkout(checkoutObj).then(function(response){
            console.log(response);
            res.send(response);
    });

    // dummycheck.cartCheckout(Moltin,checkoutObj).then(function(response){
    //         console.log(response);
    //         res.send(response);
    // });
        

});

router.post('/', function(req, res){
   res.send('POST route on urls.');
});



//export this router to use in our index.js
module.exports = router;