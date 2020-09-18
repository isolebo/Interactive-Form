
//Function sets focus to first text field by default
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
            //Here I'm comparing the attribute that has been clicked to all the attributes that have been looped over
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
        text.style.textAlign = "center";

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

     //select card by default
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
     
     //function to produce error message for incorrect format
    function producePrompt(message,promptLocation,color){
        document.getElementById(promptLocation).innerHTML=message;
        document.getElementById(promptLocation).style.color =color;


    }
    /*****************Name Validation******************/ 
     //function to validate name
     function validateName(){
        var name1 = document.getElementById("name").value;
        if (name1.length == 0){

            producePrompt("Name is required", "namePrompt","red");
            return false;
        }
        if(!name1.match(/^[a-zA-Z]+ ?[a-zA-Z]+$/))//checks to seeif it is in name format
        {
            producePrompt("First and Last Name Please","namePrompt","red");
            return false;
        }

        producePrompt("Welcome "+name1,"namePrompt","green");
        return true;
     }

    /**********************EmaiL Validation****************/ 
     function validateEmail(){

        var email2 = document.getElementById("email").value;
        if (email2.length == 0){

            producePrompt("EMAIL is required", "email2Prompt","red");
            return false;
        }
        if(!email2.match(/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3}$/))//checks to if is in email format
        {
            producePrompt("Email Please","email2Prompt","red");
            return false;
        }

        producePrompt("Welcome "+ email2,"email2Prompt","green");
        return true;
     
     }


     
    