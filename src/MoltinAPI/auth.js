//moltin Package 
const moltin = require('@moltin/sdk'); 
 
const Moltin = moltin.gateway({ 
  client_id: "v39e9kb4PuuTinzGeGCn3ajysc0wg5gYt07ipiGzpw", 
  client_secret: "yC5OULIpoLBgyNgl2yMNx2hGaXPDFHBvUdL0fF2x3y" 
}); 
 
 
 
var auth = { 
 
    moltinAuth :  function(){ 
            return Moltin.Authenticate().then((response) => { 
                 
            }); 
    } 
}; 
 
 
module.exports = auth;