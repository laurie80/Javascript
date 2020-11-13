// Traduire la fonction en fonction fléchée.

// function getStringLength(string){
//   let stringLength;
//   if(string.length === 1){
//     stringLength = 'La chaîne contient qu'un seul caractère';
//   } else {
//     stringLength = `La chaîne contient ${string.length} caractères`;
//   }
//   return stringLength;
// }

let getStringLength = (string) => {
    let stringLength;
    if(string.length === 1){
    stringLength = "La chaîne contient un seul caractère";
    } else {
    stringLength = "La chaîne contient ${string.length} caractères";
    }
    return stringLength;
    };


    // CORRECTION POUR FAIRE APPARAITRE LE RESULTAT
    // console.log(document.getElementById('string').textContent)
    // alert(getStringLength(document.getElementById('string').textContent));
