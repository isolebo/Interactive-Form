
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
    const activityMain = document.querySelector('.activities');
    let total = 0; 
    const totalText = document.createElement('h2');
    totalText.innerHTML = 'Total: 0';
    activityMain.appendChild(totalText);
    
    
    activityMain.addEventListener('change', (e) => {

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
        totalText.textContent = (" Activity Total: $" + total);//outputs total cost of activity

    });

     /***********End of Section to Select Activities*****************/
