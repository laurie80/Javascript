// Traduire cette fonction fléchée en fonction nommée (utiliser 'this')

// (name) => {
//   `Bonjour, ${name} ! Comment vas-tu ?`;
// }

let name = function () {
    return "Bonjour" + this.name + "! Comment vas-tu?";
}

