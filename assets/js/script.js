// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add code to display the current date in the header of the page.
  $('#currentDay').text(dayjs().format('dddd, MMMM D'));
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  function saveBtn(event) {
    var hourId = $(event.target).closest('.time-block').attr('id');
    var eventText = $(event.target).siblings('.description').val();
    localStorage.setItem(hourId, eventText);
  }

  $('.container-lg').on('click', '.saveBtn', saveBtn);

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  function createTimeBlocks() {
  var startHour = 9; 
  var endHour = 18; 

  for (var hour = startHour; hour < endHour; hour++) {
    var displayHour = hour === 0 ? '12AM' : (hour < 12 ? hour + 'AM' : (hour === 12 ? '12PM' : (hour - 12) + 'PM'));
    var timeBlock = $('<div>').addClass('row time-block').attr('id', 'hour-' + hour);
    var hourDiv = $('<div>').addClass('col-2 col-md-1 hour text-center py-3').text(displayHour);
    var textArea = $('<textarea>').addClass('col-8 col-md-10 description').attr('rows', '3');
    var saveButton = $('<button>').addClass('btn saveBtn col-2 col-md-1').attr('aria-label', 'save');
    var saveIcon = $('<i>').addClass('fas fa-save').attr('aria-hidden', 'true');

    saveButton.append(saveIcon);
    timeBlock.append(hourDiv, textArea, saveButton);
    $('.container-lg').append(timeBlock);

    var currentHour = dayjs().hour();
    if (hour < currentHour) {
      timeBlock.addClass('past');
    } else if (hour === currentHour) {
      timeBlock.addClass('present');
    } else {
      timeBlock.addClass('future');
    }
    
    var savedEvent = localStorage.getItem('hour-' + hour);
    if (savedEvent) {
      textArea.val(savedEvent);
    }
  }
}

  createTimeBlocks();
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  function loadSavedEvents() {
    $('.time-block').each(function () {
      var hourId = $(this).attr('id');
      var savedEvent = localStorage.getItem(hourId);
      if (savedEvent) {
        $(this).find('.description').val(savedEvent);
      }
    });
  }

  loadSavedEvents();
});
