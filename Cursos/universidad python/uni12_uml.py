# %%

# diagrama de clases uml

class persona:
    # metodo
    def __init__(Self, nombre, apellido, edad):
        Self.nombre = nombre
        Self.apellido = apellido
        Self.edad = edad
   # nuevo metodo para esta clase a este nivel de tabulacion
   # self se le agrega a todos los metodos de instancia
#    se le dice asi porque se asocia con los objetos que vamos a crear
    def mostrar_detalle(self):
        print(f"Persona: {self.nombre} {self.apellido}{self.edad}")

persona1 = persona("juan", "perez", 21)
# usando el metodo persona 1 de nuestra clase persona imprimimos la persona 1
persona1.mostrar_detalle()

persona2 = persona("carla", "rodriguez", 32)

persona2.mostrar_detalle()
# %%
