let name = document.getElementById("name");
let mail = document.getElementById("mail");
let age = document.getElementById("age");

name.onfocus = function() {
    document.getElementById("name").style.border = "2px solid black";
  }
  
  name.onblur = function() {
    document.getElementById("name").style.border = '';
  }

  mail.onfocus = function() {
    document.getElementById("mail").style.border = "2px solid black";
  }
  
  mail.onblur = function() {
    document.getElementById("mail").style.border = '';
  }

  age.onfocus = function() {
    document.getElementById("age").style.border = "2px solid black";
  }
  
  age.onblur = function() {
    document.getElementById("age").style.border = '';
  }