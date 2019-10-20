var list = []
    /*1 : 'eat',
    2 : 'repeat',*/

var element = document.querySelector('.task-view');
var inputElement = document.querySelector('.form-sec form input');
/*console.log(inputElement.value);
function update(){
    /*if(list.length == 0){*/
      /*  var inputElement = document.querySelector('.form-sec form input');
        list.push(inputElement);
        console.log(inputElement);*/
   // }
   
 /*  list.push(inputElement.value);
}
console.log(list[0]);*/

function update(){
  event.preventDefault();
  var val = inputElement.value;
  list.push(val);
  element.innerHTML += "<p>"+val+"</p>";
}

