let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi','Dimanche'];


    
    days.forEach(element => {
        let div = document.createElement("div");
        div.innerHTML = element;
        if (element == 'Samedi'|| element == 'Dimanche'){
            div.style.fontWeight = "bold";
        }
        document.body.appendChild(div);
    });
    
    