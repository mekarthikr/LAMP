let todoList = [];
function pushin(task) {
  todoList.push(task);
}
function shiftin() {
  return todoList.shift();
}
function unshiftout(task) {
  todoList.unshift(task);
}
pushin("one");
shiftin();
unshiftout("two");
console.log(todoList);