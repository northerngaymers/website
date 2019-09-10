function addListenerMulti(element, eventNames, listener) {
  var events = eventNames.split(' ');
  for (var i=0, iLen=events.length; i<iLen; i++) {
    element.addEventListener(events[i], listener, false);
  }
}

var slider = document.getElementById("myRange1");

addListenerMulti(slider, 'mouseup touchend', function(event){
  var x = event.target.value
  console.log(x)
  if (x <= 5) {
    slider.className = '';
    slider.className = `MyClass-${x}`;
    slider.className = `MyClass-${x}`;
    slider.className = `MyClass-${x}`;
    slider.className = `MyClass-${x}`;
    slider.className = `MyClass-${x}`;
  }
});

var slider2 = document.getElementById("myRange2");
addListenerMulti(slider2, 'mouseup touchend', function(event){
  var x = event.target.value
  console.log(x)
  if (x <= 5) {
    slider2.className = '';
    slider2.className = `MyClass-${x}`;
    slider2.className = `MyClass-${x}`;
    slider2.className = `MyClass-${x}`;
    slider2.className = `MyClass-${x}`;
    slider2.className = `MyClass-${x}`;
  }
});

var slider3 = document.getElementById("myRange3");
addListenerMulti(slider3, 'mouseup touchend', function(event){
  var x = event.target.value
  console.log(x)
  if (x <= 5) {
    slider3.className = '';
    slider3.className = `MyClass-${x}`;
    slider3.className = `MyClass-${x}`;
    slider3.className = `MyClass-${x}`;
    slider3.className = `MyClass-${x}`;
    slider3.className = `MyClass-${x}`;
  }
});
