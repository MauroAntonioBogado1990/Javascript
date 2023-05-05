//------------------------------------------------------------------------------------------------
//3 Dado el siguiento objeto
/* 
let carrito = {
    montoTotal: 10,
    productos: ["Leche"]
}
Crear las clases necesarias para generar carritos respetando la estructura del objeto dado.
3.2) Agregar un metodo a la clase que agregue un producto al carrito y actualice el montoTotal
agregarProducto(nombre, precio, unidades) {
    // Completar aca...
}
Ej:
agregarProducto("Azucar", 5, 2);
//Resultado esperado
carrito = {
    montoTotal: 20,
    productos: ["Leche", "Azucar"]
}
3.3)Agregar al ejercicio anterior una validación para
no permitir duplicados e imprimir un mensaje si el item 
ya existe “ya existe xxx con yyy unidades”
*/
//------------------------------------------------------------------------------------------
//creacion de la clase
class Carrito {
    monto;
    productos;

    constructor() {
    this.monto = 10;
    this.productos = ["Leche"];
    }

    //funcion para agregar el producto
    agregarProducto(nombre, precio, unidades) {
        //uso de variable para verificar existencia de producto    
        let repetido = this.productos.includes(nombre);
        //control y/o carga de productos en el carrito       
            if (!repetido){
                this.productos.push(nombre);
                this.monto = this.monto + (precio*unidades);
            } else{
                console.log("Ya existe "+ nombre +" con " + unidades);
            }   
 
    }
 
}
//creacion del objeto carrito1
const carrito1 = new Carrito();
//verificaciones de la funcionalidad de la operacion del carrito
console.log(carrito1);
carrito1.agregarProducto("Azucar", 5, 2);
console.log(carrito1);    
carrito1.agregarProducto("Aceite", 900, 2);
console.log(carrito1);   
carrito1.agregarProducto("Azucar", 5, 2);
