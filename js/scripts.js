//Business logic

//Constructor for tasks
function Task (work, time, note) {
  this.workToDo = work;
  this.timeEstimate = time;
  this.noteToSelf = note;
}

//User logic
$(document).ready(function() {
  $('#task_form').submit(function(event) {
    event.preventDefault();
    let work = $('#work').val();
    let time = $('#time').val();
    let note = $('#note').val();

    let currentTask = new Task(work, time, note);
    console.log(currentTask);
  });
});
