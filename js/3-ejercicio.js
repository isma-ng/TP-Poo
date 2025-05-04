//Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

class Rectangulo {
    constructor(alto, ancho) {
      this.alto = alto;
      this.ancho = ancho;
    }
    setAlto(nuevoAlto) {
      if (nuevoAlto > 0) {
        this.alto = nuevoAlto;
      } 
    }
    setAncho(nuevoAncho) {
      if (nuevoAncho > 0) {
        this.ancho = nuevoAncho;
      }
    }
    getAlto() {
      return this.alto;
    }
    getAncho() {
      return this.ancho;
    }
    calcularPerimetro() {
      return 2 * (this.alto + this.ancho);
    }
    calcularArea() {
      return this.alto * this.ancho;
    }
    mostrarPropiedades() {
      return `Rectángulo: Alto = ${this.alto} | Ancho = ${this.ancho} | Perímetro = ${this.calcularPerimetro()} | Área = ${this.calcularArea()}`;
    }
  }
  const miRectangulo = new Rectangulo(5, 10);
  
  console.log(miRectangulo.mostrarPropiedades());
  
  miRectangulo.setAlto(7);
  miRectangulo.setAncho(12);
  
  console.log("\nDespués de modificar:");
  console.log(`Alto actualizado: ${miRectangulo.getAlto()}`);
  console.log(`Ancho actualizado: ${miRectangulo.getAncho()}`);
  console.log(`Nuevo perímetro: ${miRectangulo.calcularPerimetro()}`);
  console.log(`Nueva área: ${miRectangulo.calcularArea()}`);
