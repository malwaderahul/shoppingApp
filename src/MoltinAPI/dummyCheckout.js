module.exports = dummyCheckout;



var dummyCheckout = {

    cartCheckout : function(Moltin,checkoutObj){
        return Moltin.Cart.Checkout(checkoutObj);
    },

};




