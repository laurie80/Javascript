for (let i = 0; i <= 100; i++) {
    let span = document.createElement("span");
    span.innerHTML = i+' ';
    document.body.appendChild(span);
    if (i % 15 == 0){
        span.innerHTML = "... "; 
    }
}
    