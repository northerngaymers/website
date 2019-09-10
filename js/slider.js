var slider = document.getElementById("myRange1");


  slider.addEventListener('mouseup', 'touch', function(event) {
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
  }) 
    
    var slider2 = document.getElementById("myRange2");


  slider2.addEventListener('mouseup', function(event) {
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
  }) 
    
    var slider3 = document.getElementById("myRange3");


  slider3.addEventListener('mouseup', function(event) {
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
  }) 