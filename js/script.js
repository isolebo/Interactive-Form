
// //Function sets focus to first text field by default
function setDefaultFocus() {

    document.getElementById("name").focus()
}
setDefaultFocus();


/***********Section to Select the Job Role*****************/
//when the user selects other,a new text field  appears
const jobTitleSelection = document.querySelector("#title"); //
const jobRole= document.getElementById("other-title");
jobRole.style.display = "none";


jobTitleSelection.addEventListener("change", (e) => {
        
    if(jobTitleSelection.value === "other"){ 
        jobRole.style.display = "block";
    }
    else{
        jobRole.style.display = "none";
    }
});
/*********** End of Section to Select the Job Role*****************/



/***********Section to Select the T-Shirt*****************/

//selects the dom elements
const colorSelection = document.getElementById('color');
const designSelection = document.getElementById('design');
const colorLabel = document.querySelector('label[for="color"]');
const shirtColorDiv = document.getElementById('colors-js-puns');
const option = colorSelection.options;
const firstIndex = designSelection[0];

const message = document.createElement('h4'); //creates a new element
message.innerHTML = 'Please select a T-shirt theme';
message.style.color = "purple";
message.style.textAlign ="center";
colorLabel.appendChild(message);
 
message.hidden = false;// unhides original selection box
colorSelection.hidden = true;
firstIndex.selected = true;
firstIndex.hidden = true;

// event listner to select the shirt color
designSelection.addEventListener('change', () => {
    message.hidden = true;
        colorSelection.hidden = false;

        //loops through the first three color option
        for (i = 0; i < colorSelection.length; i++ ) {

            //if js puns is selected, unhide option indexes 0-2
            if (designSelection.value === 'js puns') {
              if (i < 3) {
                option[0].selected = true;
                option[i].hidden = false;
            } else {
                option[i].hidden = true;
            }
        }
        //if heart js is selected, next three selections are not hidden
            if (designSelection.value === 'heart js') {
              if (i >= 3) {
                option[3].selected = true;
                option[i].hidden = false;
            } else {
                option[i].hidden = true
            } 
           }
        };
    });

    /***********Section to Select Activities*****************/

    //selecting dom elements and createing new h2 element
    const activitySelection = document.querySelectorAll('.activities input');
    const activity = document.querySelector('.activities');
    let total = 0; 
    const text = document.createElement('h2');
    text.innerHTML = 'Total: 0';
    activity.appendChild(text);
    
    
    activity.addEventListener('change', (e) => {

        let clicked = e.target;
        let timeSelected = clicked.getAttribute('data-day-and-time');
        let price = parseInt(clicked.getAttribute('data-cost'));

        for (let i = 0; i < activitySelection.length; i++) {
            //This variable targets ALL of the attributes in the loop
            const time = activitySelection[i].getAttribute('data-day-and-time'); 
            if (timeSelected  === time && clicked !== activitySelection[i]) {
            //If the attribute results are equal, the equevalent day/time that has NOT been checked will be disabled
            if (clicked.checked) {     
            activitySelection[i].disabled = true;
          } else {
            activitySelection[i].disabled = false;
          }
            }
        }
        if (clicked.checked) {
            total = total + price; 
        } else {
            total = total - price;
        }
        text.textContent = (" Total: $" + total);//outputs total cost of activity
        text.style.color = "blue";
        

    });

     /***********End of Section to Select Activities*****************/

     /********************Payment Section****************************/

     //selection of the DOM elements
     const creditCard = document.querySelector("#credit-card");
     const paypal = document.querySelector("#paypal ");
     const bitcoin = document.querySelector("#bitcoin");
     const payment = document.querySelector("#payment");
     const paymentMethod = payment.value = "select method";
     const card = payment.value = "credit card";
     const selectPayment = payment[0];

     //select  credit-card by default
     card.selected = true;
     selectPayment.hidden = true;
     paypal.hidden = true;
     bitcoin.hidden = true;
     paymentMethod.hidden = true;

     //event to check what the user selects for payment
     payment.addEventListener('change', (e) => {

        const type = e.target.value; 
        if (type === 'credit card') {//if credit card, other form of payment are blocked
            creditCard.style.display = 'block';
            payPal.style.display = 'none';
            bitCoin.style.display = 'none';
        } else if (type === 'paypal') {//if paypal, other form of payment are blocked
            creditCard.style.display = 'none';
            payPal.style.display = 'block';
            bitCoin.style.display = 'none';
        } else {//if bitcoin, other form of payment are blocked
            creditCard.style.display = 'none';
            payPal.style.display = 'none';
            bitCoin.style.display = 'block';
        }

     });

     /***********End of Payment Section*****************/

     /****************Validation Section***************/ 
     
    /*****************Name Validation******************/ 
    const name = document.getElementById('name');//selects the name id
    const labelName = document.querySelector('label[for = "name"]');
    const nameError = document.createElement('h3');//creates a new label just in case theres an error
    labelName.appendChild(nameError);
    nameError.style.color = 'red';
     nameError.innerHTML = "Enter Your Name";
     nameError.style.textAlign = "center";
     nameError.hidden= true;


    const validateName = () =>{//checks to see if the name is valid
        if(!name.value){
            nameError.hidden = false;
            return false;
        }else{//returns error message if invalid name
            nameError.hidden = true;
              return true;

        }
    }
     name.addEventListener('keyup',validateName);

    /**********************EmaiL Validation****************/ 
    
    const email = document.getElementById('email');//selects the email id
    const emailLabel = document.querySelector('label[for = "email"]');
    const emailError = document.createElement('h3');//creates a new label just in case theres an error
    emailLabel.appendChild(emailError);
    emailError.style.color = 'red';//error messages in case of invalid email
    emailError.innerHTML = "Enter Your Email";
    emailError.style.textAlign = "center";
    emailError.hidden= true;

    const validateEmail = () =>{//checks to see is email is valid
        if(!email.value){//if valid nothing happens
            emailError.hidden = false;
            return false;
        }else{//if invalid email error message is visible
            emailError.hidden = true;
              return true;
        }
    }
     email.addEventListener('keyup',validateEmail);

    /**********************Activity Validation****************/ 
    
    
    const activityLabel = document.querySelector(".activities legend");//creates new label at the activity section
    const activityError = document.createElement("h3");
    activityError.innerHTML ="Select at least one checkbox";
    activityError.style.backgroundColor= "red";
    activityError.style.textAlign= "center";
    activityError.hidden = true;
    activityLabel.appendChild(activityError);


    const activityValidation = () => {
        for(i = 0; i <activitySelection.length; i++){//checks to see if any activity has been checked, if so, no error message
        if(activitySelection[i].checked){           
            activityError.hidden = true;
            return true;
        }
        else{
            activityError.hidden = false;//display error if no  activity has been selected
            return false;
        }
    }
    }
activity.addEventListener("click", activityValidation); //calls function to listen for an click event

/***********************Credit-Card Validation***********************/

    const creditCard2 = document.querySelector("#credit-card").children[0];
    const ccInput = document.getElementById("cc-num");
    const ccError = document.createElement("h3");//creates new element to display error message
    creditCard2.appendChild(ccError);
    ccError.innerHTML= "Enter valid Credit Card Number";
    ccError.hidden = true;
    ccError.style.backgroundColor= "red";

    const ccValidation = () => {//checks to see if card is valid, if not error meassage is produced
        let validCard = /^\d{13,16}$/;
        if(!ccInput.value){
            ccError.hidden = true;
            return false;
        }
        else if(ccInput.value > 0 && validCard.test(ccInput.value) === false){
            ccError.hidden = false;
            return false;
        }
        else{
            ccError.hidden = true;
            return true;
        }

    }
    ccInput.addEventListener("keyup",ccValidation);


 /***********************Zip Code Validation***********************/
   

    const zipVal = document.querySelector("#credit-card").children[1];
    const zipInput = document.getElementById("zip");
    const zipLabel = document.querySelectorAll(".zip label");//creates new element to display error message
    const zipError = document.createElement('h3');
    zipVal.appendChild(zipError);
    zipError.innerHTML= "Enter valid zipcode";//error message to be displayed if invalid zipcode
    zipError.hidden = true;
    zipError.style.backgroundColor= "red";

    const zipValidation = () => {//checks to see if zip code is valid, if not error meassage is produced
        let zipCard = /^\d{5}$/;
        if(!zipInput.value){//if input value matches zipCard then no error
            zipError.hidden = true;
            return false;
        }
        else if(zipInput.value > 0 && zipCard.test(zipInput.value) === false){
            zipError.hidden = false;
            return false;
        }
        else{
            zipError.hidden = true;
            return true;
        }

    }
    zipInput.addEventListener("keyup",zipValidation);

    /***********************CVV Validation***********************/


    const cvvVal = document.querySelector("#credit-card").children[2];
    const cvvInput = document.getElementById("zip");
    const cvvLabel = document.querySelectorAll(".zip label");//creates new element to display error message
    const cvvError = document.createElement('h3');
    cvvVal.appendChild(cvvError);
    cvvError.innerHTML= "Enter valid cvv";
    cvvError.hidden = true;
    cvvError.style.backgroundColor= "red";

    const cvvValidation = () => {//checks to see if cvv number is valid, if not error meassage is produced
        let cvvCard = /^\d{3}$/;
        if(!cvvInput.value){
            cvvError.hidden = true;
            return false;
        }
        else if(cvvInput.value > 0 && cvvCard.test(cvvInput.value) === false){
            cvvError.hidden = false;
            return false;
        }
        else{
            cvvError.hidden = true;
            return true;
        }

    }
    cvvInput.addEventListener("keyup",cvvValidation);


    
    

    const form = document.querySelector('form');
    //adding an event listener on the for element
    form.addEventListener('submit', (e) => {
    //Uses the condition to prevent the default action if anything is incomplete
    if (!validateName()) {
        e.preventDefault();
    }
    if (!validateEmail()) {
        e.preventDefault();
    }
    if (!activityValidation()) {
        e.preventDefault();
    }
    if (payment.value === 'credit card') {//if all input value matches the format of credit card, no error message to be displayed
        if (!ccValidation()) {
            e.preventDefault();
            ccError.hidden = false;
            cvvError.hidden = false;
            zipError.hidden = false;
            return false;
             }
        }
    });




