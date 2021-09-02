# %%
class Persona:
    def __init__(Self, nombre, apellido, edad):
        Self._nombre = nombre
        Self.__apellido = apellido
        Self.edad = edad

    def mostrar_detalles(self):
        print(f"Persona: {self.__apellido} {self._nombre} de edad {self.edad}")
# cuando tenemos atributos con guin bajo solo debe ser accesible dentro de la clase
persona1 = Persona("juan", "perez", 29)
# mandamos a llamar el metodo mostras destalle despues de la cracion del objeto
persona1.mostrar_detalles()

# solo de usa afuera para prueba, no en produccion
print(persona1._nombre)

persona1.__apellido = "comenio"
print(persona1.__apellido)
persona1.mostrar_detalles()

# %%
