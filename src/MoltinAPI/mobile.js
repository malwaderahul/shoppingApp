
var mobile = {
   
    moltinBrands : function(Moltin){
        return Moltin.Brands.All()
                .then((brands) => {
                // 200 response
                console.log(brands);
                })
                .catch((error) => {
                  console.log(error);
                });
        
    },
    moltinProducts : function(Moltin){
        return Moltin.Authenticate().then((response) => {
                    //console.log('authenticated', response);
                    Moltin.Products.All().then((products) => {
                        res.send(products);
                    });
                });
    },

};


module.exports = mobile;