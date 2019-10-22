var list = [];
var element = document.querySelector('.task-view');
var inputElement = document.querySelector('.form-sec form input');
function update(){
  event.preventDefault();
  var val = inputElement.value;
  list.push(val);
  inputElement.value = "";
  var innerEle = addElement('div','tasks');
  if(val !== ""){
    element.appendChild(innerEle);
  }
  del();
}
function addElement(elementTag,elementClass){
  var newElement = document.createElement(elementTag);
  newElement.className = elementClass;
  var all = innerChilds();
  for(var i =0;i<all.length;i++){
    newElement.appendChild(all[i]);
  }
 /* newElement.appendChild(all[0]);
  newElement.appendChild(all[1]);
  newElement.appendChild(all[2]);
  newElement.appendChild(all[3]);*/
  return newElement;
}
function innerChilds(){
  var para = document.createElement('p');
  para.innerHTML = list[list.length-1];
  var input = document.createElement('INPUT');
  input.setAttribute('type','checkbox');
  var span = document.createElement('span');
  var icon = document.createElement('i');
  icon.className = 'fa fa-trash';
  icon.setAttribute('aria-hidde',true);
  span.appendChild(icon);
  var line = document.createElement('span');
  line.className = 'line';
  line.innerHTML += '<hr>';
  var arr = [para,input,span,line]
  return arr;
}
function del(){
  var element = document.querySelectorAll(".task-view .tasks span i");
  for(i of element){
      i.addEventListener('click',function(){
      var selectedElement = event.target;
      selectedElement.parentNode.parentNode.classList.add("deleted");
    })
  }
}