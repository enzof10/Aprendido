# # %%
# class Persona:
#     def __init__(Self, nombre, apellido, edad):
#         Self._nombre = nombre
#         Self._apellido = apellido
#         Self._edad = edad

        
#     @property
#     def nombre(self):
#         print("Llamndo metodo get nombre")
#         return self._nombre

#     @nombre.setter
#     def nombre(self, nombre):
#         print("Llamando metodo set nombre")
#         self._nombre = nombre

    
#     @property
#     def apellido(self):
#         return self.apellido

#     @apellido.setter
#     def apellido(self, apellido):
#         return self.apellido

    
#     @property
#     def edad(self):
#         return self.edad

#     @edad.setter
#     def edad(self, edad):
#         return self.edad


#     def mostrar_detalles(self):
#         print(f"Persona: {self.__apellido} {self._nombre} de edad {self.edad}")


# # cuando tenemos atributos con guin bajo solo debe ser accesible dentro de la clase
# persona1 = Persona("juan", "perez", 29)
# # mandamos a llamar el metodo mostras destalle despues de la cracion del objeto
# persona1.mostrar_detalles()

# # solo de usa afuera para prueba, no en produccion
# print(persona1.nombre)

# persona1.__apellido = "comenio"
# # poniendo dos guiones no se odifica el atributo
# print(persona1.__apellido)
# persona1.mostrar_detalles()
# # metodo get para obtener los atributos y set para modificar
# # con el decorador @ no necesito usar patenteiss
# print(persona1.nombre)

# persona1.nombre = "juan carlos cambiado"
# print(persona1.nombre)

# %%
class Persona:
    def __init__(Self, nombre, apellido, edad):
        Self._nombre = nombre
        Self._apellido = apellido
        Self._edad = edad

        
    @property
    def nombre(self):
        print("Llamndo metodo get nombre")
        return self._nombre

    @nombre.setter
    def nombre(self, nombre):
        print("Llamando metodo set nombre")
        self._nombre = nombre

    
    @property
    def apellido(self):
        return self.apellido

    @apellido.setter
    def apellido(self, apellido):
        self._apellido = apellido

    
    @property
    def edad(self):
        return self._edad

    @edad.setter
    def edad(self, edad):
        self._edad = edad


    def mostrar_detalles(self):
        print(f"Persona: {self._apellido} {self._nombre} de edad {self._edad}")


    def __del__(self):
        print("entro")
        print(f"Persona: {self._nombre} {self._apellido}")


if __name__ == "__main__":
    # esto para que no se ejecute la prueba desde donde llamo al modulo
    persona1 = Persona("juan", "perez", 29)
    persona1.nombre = "juancito"
    persona1.apellido = "perzito"
    persona1.edad = 21
    persona1.mostrar_detalles()


# %%