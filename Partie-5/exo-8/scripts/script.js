let name = document.getElementById("name");
let age = document.getElementById("age");
let button = document.getElementById("submitButton");

button.onclick = function (Clone_Element){
    let clone = name.cloneNode( true);
    document.body.appendChild( clone);
    let oClone = age.cloneNode( true);
    document.body.appendChild( oClone);
    return Clone_Element;
}
    
    

