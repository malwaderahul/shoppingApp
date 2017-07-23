


var listCartProduct = {
    getCartDetails : function(Moltin){
        return Moltin.Cart.Get();
    },
    getCartItems : function(Moltin){
        return Moltin.Cart.Items();
    },
    addProduct : function(Moltin,productId){
        return Moltin.Cart.AddProduct(productId);
    },
    removeItem : function(Moltin,itemId){
        return Moltin.Cart.RemoveItem(itemId);
    },
    updateCartItemQuantity : function(Moltin,itemId,quantity){
        return Moltin.Cart.UpdateItemQuantity(itemId,quantity);
    },
    deleteCart : function(Moltin){
        return Moltin.Cart.Delete();

    }



};


module.exports = listCartProduct;
