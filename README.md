# shoppingApp
ShoppingApp with Nodejs 


#installation:
   > npm install --save express
   > npm install --save @moltin/sdk
   
   
   #load this git repo on ur machine. 
   
   How i proceeded with this?
       First went through the Moltin Saas Doc. Then Created an account on Moltin and created one online shop store.
       Doing this, will give me an access to token i.e client id and secret, through which i got a autheorization token .
        I've used this token to access the moltin apis.
      Moltin SDK provided me the gateway interface where i've inserted my client id and secret, on which i got access to read and write on the saas store.
      
      Note: I've manually through moltins forge UI, added list of mobile products and brands.

      This way i've implemented my NodeJS backend communication to Moltin saas, for below listed features.
      
    1. List 10 mobiles for sale on the website [Necessary]
   2. Dummy checkout functionality [Necessary]
   3. Authentication [Necessary]
   4. Enlist cart products [Necessary]
   
   
   From terminal, within the repo directory, just do
    > node index.js
    
    
    and from browser, access below URLS
    http://localhost:3000/mobile   this uses authentication and retrives a list of mobiles from moltin.
    http://localhost:3000/cart     this will list down the items that are in the cart.
    
    
    
    I have started creating UI for this, but bcoz of time i couldn't finish it.

   
   
