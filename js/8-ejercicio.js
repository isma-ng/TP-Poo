//Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse".

class Persona {
    constructor(nombre, edad, profesion) {
      this.nombre = nombre;
      this.edad = edad;
      this.profesion = profesion;
    }
    saludar() {
      console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}. ¡Mucho gusto!`);
    }
    despedirse() {
      console.log(`Adiós, fue un placer. Atentamente, ${this.nombre}.`);
    }
  }
  const persona1 = new Persona("María", 28, "ingeniera");
  const persona2 = new Persona("Carlos", 35, "médico");

  console.log("=== Persona 1 ===");
  persona1.saludar();
  persona1.despedirse();
  
  console.log("\n=== Persona 2 ===");
  persona2.saludar();
  persona2.despedirse();