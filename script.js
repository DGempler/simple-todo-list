var form = document.querySelector("form");
var list = document.querySelector("ul");
var input = document.querySelector('input');
var li;

form.addEventListener("submit", function(event) {
  event.preventDefault();
  var input = document.getElementById("items");
  var newItem = document.createElement('li');
  newItem.innerHTML = input.value;
  createSpan(newItem);
  if (input.value === '') {
    input.setAttribute("placeholder", "YOU ACTUALLY HAVE TO ENTER AN ITEM!!!!");
  }
  else {
    list.appendChild(newItem);
    form.reset();
    input.setAttribute("placeholder", "What do you need to do?");
    }
});

function createSpan(newItem) {
  span = document.createElement('span');
  span.innerHTML = "Delete";
  newItem.appendChild(span);
}



list.addEventListener("click", function(event) {
  li = document.querySelectorAll('li');
  for (var i = 0; i < li.length; i++) {
    if(li[i] == event.target) {
      if (li[i].hasAttribute('class')) {
        li[i].removeAttribute('class');
      } else {
        li[i].setAttribute("class", "completed");
      }
    }
    else if(li[i].querySelector('span') == event.target) {
      list.removeChild(li[i]);
    }
  }
});
