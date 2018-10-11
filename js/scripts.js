//Business logic

//Constructor for tasks
function Task (work, time, note) {
  this.workToDo = work;
  this.timeEstimate = time;
  this.noteToSelf = note;
}

Task.prototype.eraseTask = function(taskToDelete) {
  delete taskToDelete;
}
