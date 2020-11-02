// Global variables:
    // var container = document.querySelector(".container")
    var container = $(".container");

    var startTime = 9;
    var endTime =17;
    var currentHour = moment().format('H');
    console.log(currentHour);

    // Time array
    var timeArray = ["9 AM", "10 AM", "11 AM", "12 PM", "13 PM", "14 PM", "15 PM", "16 PM", "17 PM"];

// Global variables.

// "for loop" :

    //This is the vanilla javascript way of appending a new P tag in the document
    // var newP = document.createElement("p")
    // container.appendChild(newP)
    //<p></p>

    //With Jquery
    for(i=startTime; i<=endTime; i++){

        // new row
        var newRow = $("<div>");
        newRow.addClass("row time-block");

        // new paragraph
        var newP = $("<p>");
        newP.text(timeArray[i-9]);
        newP.addClass("hour col-1");

        // "if/else" statement for newTextarea 
        var newTextarea = $("<textarea>");
        // if currentHour is biger than time in row then use the "past" css style
        if(i< currentHour){
            newTextarea.addClass("col-10 past");
        
        // else if currentHour is equal than time in row then use the "present" css style
        } else if( i == currentHour ){
            newTextarea.addClass("col-10 present");

        // else currentHour is less than time in row then use the "future" css style
        } else {
            newTextarea.addClass("col-10 future");
        }
        // log this into local storage
        newTextarea.text(localStorage.getItem(timeArray[i-9]));
        
        // save button
        var saveBtn = $("<button>");
        saveBtn.text("Save");
        saveBtn.addClass("saveBtn col-1")

        // Appendings
        newRow.append(newP)
        newRow.append(newTextarea)
        newRow.append(saveBtn)
        container.append(newRow)
    }

// "for loop".

// "function":

    // local storage
    $(document).on("click", "button", function(){
        var valueString = $(this).prev().val()
        var keyString = $(this).prev().prev().text()
        localStorage.setItem(keyString, valueString)

    })

// "function".