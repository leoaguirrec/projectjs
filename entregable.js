let seleccionDeProducto = Number(prompt(`Coloque el numero del producto, que desea comprar: 
1 - Monitor
2 - Teclado
3 - Notebook
4 - Auriculares
`));

if (seleccionDeProducto <= 0) {
    alert('No ingreso un parametro correcto');
};

switch (seleccionDeProducto) {
    case "1":
        alert('Usted selecciono Monitor');
        
        break;

    default:
        break;
}

let tipoDePago = Number(prompt(`Seleccione la opcion del tipo de pago:
1 - Un pago
2 - 3 Cuotas sin interes
3 - 6 Cuotas sin interes
4 - 12 Cuotas sin interes
`));