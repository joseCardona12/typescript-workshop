## Typescript
Supertest de Javascript que añade tipado estático y otras características avanzadas.
Lenguaje de programación desarrollado por microsoft que extiende Javascript añadiendo
tipos estáticos. 

- Robutez
- Mantenibilidad del código
El leguaje es tranpilado, se compila a javascript

### ¿Qué es el tipado estático?
Capacidad de definir tipos de datos para variables, parámetros de funciones y valores de retorno

1. Prevención de errores
2. Mejor documentación 
3. Mejor rendimiento
4. Mejor mantenibilidad
5. Mejor legibilidad
6. Mejor escalabilidad
7. Mejor integración 

### Ejemplo de iniciación del proyecto
npm init -y
npm install typescript --save-dev
npx tsc --init : Este comando nos permitirá configurar el proyecto creando un archivo tsconfig.json con a configuración inicial
Configura el compilador de Typescript
nano

### Preguntas de reflexión
1. __¿Cómo influye una buena configuración inicial en el desarrollo de un proyecto?__
    1. Evitar errores comunes en Javascript
    2. Mejorar la calidad el código
    3. Facilitar el mantenimiento de los proyectos. 
    4. Mejora de la seguridad del proyecto

2. __¿Qué ventajas ofrece TypeScript en comparación con JavaScript puro?__
    Typescript ofrece 
    - Tipado a las variables, parámetros de funciones y valores de retorno
    - Prevención de errores
    - Mejor documentación
    - Mantenibilidad
    - Rendimiento
    - autocompletado
    - Legibilidad
    - Escalabilidad 
    - Integración

3. __¿Por qué es importante verificar los tipos de datos en un proyecto de software?__
    Es importante para evitar errores comunes en Javacript (Manejo de datos)

### Conceptos de Programación de Tyscript
1. __Variables y constantes:__ Tipos y Tipos personalizados
    Las variables let y const pueden tener tipos explícitos

    __Pregunta de reflexión:__ 
    1. __¿Cómo ayuda el tipado estático a prevenir errores en el manejo de variables y constantes?__
    Al establecer un tipo de dato, el código se transforma en algo más declarativo para los demás integrantes de trabajo. 
    Asimismo, estos tipos determinan que se debe enviar y que se debe rotornar. Con estos elementos evitamos errores al 
    comprender que tipo recibirá nuestro procedimiento.

2. __Operadores (Aritméticos, booleanos):__ Estos operadores nos permiten
    realizar operaciones matemáticas y lógicas con mayor precisión.

    __Pregunta de reflexión:__
    1. __¿Qué ventajas ofrece el uso de operadores en un lenguaje tipado como TypeScript?__
     - Precisión del cálculo 
     - Evitar errores con respecto a la respuesta
    
3. __Estructuras de decisión (if,switch, ternarios)__
    Controlar el flujo de ejecución de un programa basado en condiciones específicas.
    - Mejorar la lógica
    - Legibilidad del código
    
    __Pregunta de reflexión:__
    1. __¿Cuándo es preferible usar un operador ternario en lugar de una estructura if?__
    - Cuando necesitamos los dos casos, tanto if como else obligatoriamente
    - Cuando solo necesitamos una sola verificación, debido a que no es permite la condición anidada
    - Cuando utilizamos HTML y javascript con interpolación

4. __Estructuras de iteración (while, for, foreach, map)__
    Permiten ejecutar un bloque de código múltiples veces basándose en una condición

    __Pregunta de reflexion:__
    1. __¿Qué ventajas tiene el método map sobre un bucle for en TypeScript?__
    - Código más legible
    - Crear un nuevo array. La estructura for necesita una varaible por fuera de la estructura y el uso del
    método push para agregar el nuevo contenido a la variable.
    - En typescript conserva los tipos del array original
    - Inmutable: El método map es inmutable, no modifica el array original

### Estructurar de datos y funciones
1. __Array | Listas__
Colección de elementos ordenados que puede contener cualquier tipo. En typescript se puede utiilizar el
tipado para establecer un tipo para todos los valores del array.
    __Pregunta de reflexión:__
    1. __¿Cómo se puede asegurar el tipo de datos en un array en TypeScript?__
    Indicando el tipo de dato despues de los dos puntos. Esto asegura que todos los valores del array
    deben cumplir con ese tipo de dato
    const numbers: number[] = [1,2,3,4]

2. __Objetos__
Colecciones de pares clave-valor que representan entidades y sus propiedades
    __Pregunta de reflexión:__
    1. __¿Qué ventajas ofrece el uso de tipos personalizados en objetos?__
    -
3. __Funciones__
Bloques de código reutilizables que encapsulan una lógica en específica.
    __Pregunta de reflexión__
    1. __¿Qué beneficios ofrece la definición explícita de tipos en las funciones en TypeScript?__
    Las funciones al ocupar tanto parámetros con tipos explícitos y retorno de la función explícita,
    controlamos la ejecución de la función con mayor precisión y su flujo. Asimismo, evitamos errores 
    al comprender que variable enviar, que dato obtener y que dato mostrar.

    - Legibilidad del código

    __Por ejemplo__
    const sum = (number,number2) => {console.log(number + number2)}
    Al crear la función esperamos que los datos que se envíen sean números. Sin embargo, es posible 
    que se envíen string o otro tipo de dato que cambia el resultado final. Typescript cambia este
    concepto para restringir y potenciar la seguridad al momento de obtener y enviar datos del tipo de dato
    necesario. 

### Clases, Interfaces, métodos, constructores, Pilares del POO
Las clases son plantillas para crear objetos que compartan propiedades y métodos

__Nota:__ Typescript permite definir modificadores de acceso como private, protected y public

#### Modificadores de acceso en Typescript
1. __Propiedades__ Son variables que se declaran dentro de la clase
2. __Métodos__ Son funciones que se declaran dentro de la clase

Los modificadores de acceso son palabras claves que se utilizan para establecer la accesibilidad de los miembros de una clase

#### Interfacecs
Las interfaces son contratos que definen la estructura de un objeto
Pueden contener
1. Propiedades
2. Métodos
3. Constructores

interface Shape {
  area(): number;
}

class Circle __implements__ Shape {
  private radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  area(): number {
    return Math.PI * this.radius ** 2;
  }
}
 - Definir una estrutura común para los objetos 
 - Garantizar que las clases cumplan con reglas y comportamientos

__Las interfaces sirven:__
Definir contratos
Establecer reglas
Promover la cohesión

__Nota:__ Cohesion es la medida en la que los métodos de una clase están relacionados entre sí. Y el acoplamiento débil es la medida en la que una clase depende de otra clase

#### Inversión de dependencias
__SOLID - D:__ Significa Dependency Inversion Principle: Las clases deben depender de abstracciones y no de implementaciones concretas

- Promoción de la Inversión de dependencias
- Desacoplamiento
- Flexibilidad y Mantenibilidad
- facilitar la reutilización
- Mejorar la legibilidad

#### Métodos estáticos

#### Propiedades de solo lectura
Propiedades que pueden ser asignadas una vez y no pueden ser modificadas posteriormente - constantes

##### Uso
- Constantes
- Configuración inicial
- Inmutabilidad
- Seguridad
- Consistencia
- Integridad

#### Decoradores
Características experimientales de Tyscript que permite añadir metadatos a clases, métodos, propiedades y parámetros
Se utilizan para extender y modificar el comportamiento de clases y sus miembros


