module.exports={

    /* Log into application*/

    'Login': browser =>{

         browser
         .url('https://www.saucedemo.com/')
         .maximizeWindow()
         .pause(3000)
         .setValue('#user-name','standard_user')
         .setValue('#password','secret_sauce')
         .saveScreenshot('./screen_evidence/Login Page.png')
         .click('#login-button')
         .pause(3000)
         .assert.urlEquals('https://www.saucedemo.com/inventory.html')
         .saveScreenshot('./screen_evidence/Select Product.png')
         
    },


    /* Select and add product to cart*/

    'Add product to cart': browser =>{

        browser
      
        .click('#add-to-cart-sauce-labs-backpack')
        .pause(3000)
        .assert.containsText('#shopping_cart_container > a > span', '1')
        .saveScreenshot('./screen_evidence/Added product in cart .png')
        .click('#shopping_cart_container > a')
        .saveScreenshot('./screen_evidence/Verify product in cart and checkout.png')
        .pause(3000)
        

    },

     /* Checkout selected product*/

    'Checkout product':browser =>{
        browser
        .assert.containsText(' #cart_contents_container > div > div.cart_list > div.cart_item > div.cart_quantity', '1')
        .click('#checkout')
        .pause(3000)
       
    },


     /*Enter personal details*/

    'Enter details':browser=>
    {
    browser
    .click('#continue')
    .assert.containsText('#checkout_info_container > div > form > div.checkout_info > div.error-message-container.error > h3','Error: First Name is required')
    .setValue('#first-name','Shraddha')
    .pause(3000)
    .click('#continue')
    .assert.containsText('#checkout_info_container > div > form > div.checkout_info > div.error-message-container.error > h3','Error: Last Name is required')
    .setValue('#last-name','Bhalsing')
    .pause(3000)
    .click('#continue')
    .assert.containsText('#checkout_info_container > div > form > div.checkout_info > div.error-message-container.error > h3','Error: Postal Code is required')
    .setValue('#postal-code','81375')
    .pause(3000)
    .saveScreenshot('./screen_evidence/Verify details and click continue.png')

    },

    /*Place an order*/

    'Place an order':browser=>{

        browser
        .click('#continue')
        .click('#finish')
        .saveScreenshot('./screen_evidence/Click on Finish and then on Menu button.png')
        .pause(3000)
      

    },

    /*Logout from application*/

    'Logout':browser=>{

        browser
        .click('#react-burger-menu-btn')
        .pause(3000)
        .saveScreenshot('./screen_evidence/Click on logout button.png')
        .click('#logout_sidebar_link')
        .pause(3000)
        .assert.title('Swag Labs')
        .saveScreenshot('./screen_evidence/Verify LoginPage.png')
        .pause(3000)
    }

    }