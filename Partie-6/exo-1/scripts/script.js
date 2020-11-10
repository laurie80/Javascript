for (let i = 2020; i <= 2030; i++) {
    let span = document.createElement("span");
    
    if (i % 4 == 0 && i % 100 != 0 || i % 400 == 0){
        span.style.color='red';
    }

    span.innerHTML = i+' ';
    document.body.appendChild(span);
}
