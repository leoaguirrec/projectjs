class Plato {
    constructor (id, nombre, precio, categoria){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }
}

let menu = [];

let comidas = new Plato(1, "Ojo de bife con guarnicion", 1400, "Carnes");
menu.push(comidas);
menu.push(new Plato(2, "Filet de merluza con guarnicion", 1750, "Pescados"));
menu.push(new Plato(3, "Tallarines con tuco", 1200, "Pastas"));
menu.push(new Plato(4, "Napolitana especial", 900, "Pizzas"));
menu.unshift(new Plato(5, "MENU DEL DIA", 700, "Especial"));
menu.splice(2,1);

console.log("Menu", menu);