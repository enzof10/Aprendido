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
# %%
