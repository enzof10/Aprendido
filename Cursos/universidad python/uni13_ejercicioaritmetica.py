# %%

class AritmeticaNuevo:
    """
    clase aritmetica para realizar las operaciones de sumar. restar, ect
    """
    def __init__(self, operandoA, operandoB):
    #   utilizamos la variable self para crear nuestros atributos
    # y le asginamos el valor del argumento que recibimos
       self.opeandoA = operandoA
       self.operandoB = operandoB

    def sumar(self):
        return self.opeandoA + self.operandoB
    
    def restar(self):
        return self.opeandoA - self.operandoB
    # se acostumbra a que los metodos sean acciones, como sumar, restar
    def multiplicar(self):
        return self.opeandoA * self.operandoB
    
    def dividir(self):
        return self.opeandoA / self.operandoB

# creamos obejetos de la clase AritmeticaNuevo

aritmetica1 = AritmeticaNuevo(3, 8)
print(f"suma: {aritmetica1.sumar()}")
print(f"resta: {aritmetica1.restar()}")
print(f"multiplicacion: {aritmetica1.multiplicar()}")
print(f"divison: {aritmetica1.dividir():.2f}") #:.2f para que muestre 2 numeros desp de la coma

# %%

class Rectangulo:
    def __init__(self, base, altura):
        self.base = base
        self.altura = altura
    
    # se usa self porque es un metodo de instancia de nuestra clase
    def calcular_area(self):
        return self.base * self.altura

# creamos los objetos que vamos a trabajar

base = int(input("Proporciona la base: "))
altura = int(input("Proporciona la altura: "))

rectangulo1 = Rectangulo(base, altura)
print(f"Area de rectangulo: {rectangulo1.calcular_area()}")


base = int(input("Proporciona la base: "))
altura = int(input("Proporciona la altura: "))

rectangulo2 = Rectangulo(base, altura)
print(f"Area de rectangulo: {rectangulo1.calcular_area()}")
# %%

class Cubo:
    def __init__(self, ancho, profundo, alto):
        self.ancho = ancho
        self.alto = alto
        self.profundo = profundo
    
    
    def calcular_volume(self):
        return self.alto * self.ancho * self.profundo

alto = int(input("Proporciona el alto del cubo: "))
profundo = int(input("Proporciona la profundidad del cubo: "))
ancho = int(input("Proporciona el ancho del cubo:"))

volumenCubo = Cubo(ancho, profundo, alto)
print(f"El volumen del cubo es: {volumenCubo.calcular_volume()}M3")
# %%

class Persona:
    def __init__(Self, nombre, apellido, edad, *valores, **terminos):
        Self.nombre = nombre
        Self.apellido = apellido
        Self.edad = edad
        Self.valores = valores
        Self.terminos = terminos

    def mostrar_detalles(self):
        print(f"Persona: {self.apellido} {self.nombre} de edad {self.edad} {self.valores} {self.terminos}")

persona1 = Persona("juan", "perez", 29, "323232323", 23, 21, 1, 2, 8, m = "manzana", p = "pera")
# mandamos a llamar el metodo mostras destalle despues de la cracion del objeto
persona1.mostrar_detalles()

persona2 = Persona("juan", "perez", 29)
persona2.mostrar_detalles()




# %%
