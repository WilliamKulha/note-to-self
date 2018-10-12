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

    $('#work_goes_here').append(`<span class="work_item">` + currentTask.workToDo + `</span><br>`)
    $('#work_goes_here').last().click(function() {
      $('#task_at_hand').slideDown();
      $('#task_at_hand h3').text(currentTask.workToDo);
      $('.time_estimate').text(currentTask.timeEstimate);
      $('.note_to_self').text(currentTask.noteToSelf);
    });
    $('#task_done').click(function() {
      $('#task_at_hand').slideUp();
    })
    $('.work_item').dblclick(function() {
      this.remove();
    });
    console.log(currentTask.workToDo);
  });
});
