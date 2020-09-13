
//Function sets focus to first text field by default
function setDefaultFocus() {

    document.getElementById("name").focus()
}
setDefaultFocus();


//if the user selects other then a new text field should appear
const jobTitleSelection = document.querySelector("#title");
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
displayJobRole();