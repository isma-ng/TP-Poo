//Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades. Posteriormente, cree tres instancias de este objeto y guárdalas en un array. Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.

class Producto {
    constructor(codigo, nombre, precio) {
      this.codigo = codigo;
      this.nombre = nombre;
      this.precio = precio;
    }
    imprimeDatos() {
      console.log(`Código: ${this.codigo} \nNombre: ${this.nombre} \nPrecio: $${this.precio}`);
    }
  }
  const productos = [
    new Producto("Producto1", "Laptop HP", 1200000),
    new Producto("Producto2", "Mouse inalámbrico", 15700),
    new Producto("Producto3", "Teclado mecánico", 27000)
  ];
  
  console.log("=== LISTADO DE PRODUCTOS ===");
  productos.forEach(producto => {
    producto.imprimeDatos();
  });