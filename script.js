var list = [];
var element = document.querySelector('.task-view');
var inputElement = document.querySelector('.form-sec form input');
function update(){
  event.preventDefault();
  var val = inputElement.value;
  list.push(val);
  //element.innerHTML += "<p>"+list[list.length-1]+"</p>"+"<input type='checkBox'>";
  element.innerHTML += "<div class='tasks'>"+"<p>"+list[list.length-1]+"</p>"+
  "<input type='checkbox' name='chk'>"+"<span>"+
  "<i class='fa fa-trash' aria-hidden='true'></i>"+"</span>"+"<span class='line'><hr></span>";
  del();
}
function del(){
  var element = document.querySelectorAll(".task-view .tasks span i");
  for(i of element){
      i.addEventListener('click',function(){
      var selectedElement = event.target;
      selectedElement.parentNode.parentNode.classList.add("deleted");
    })
  }
  
 // console.log(element);
}