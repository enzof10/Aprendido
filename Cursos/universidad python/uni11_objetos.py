# innit nos permite agregar, e inicializar atributos
#  es como un constructor metodo donder init, init es un metodo
# parametro por default es self, referencia al objeto ques e va a crear
# metodos de tipo donder, doble guion bajo
#  %%
class persona:
    def __init__(Self):
        Self.nombre = "juan"
        Self.apellido = "perez"
        Self.edad = 29

print(persona().nombre)
persona1 = persona()
print(persona1.nombre)
print(persona1.edad)
print(persona1.apellido)


# %%
# el nombre del parametro puede ser cualwuiera pero se recomienda nombre de paramero igual al atributo de nuestra clase
# el ojeto es como una plantilla
# la clase nos va a permitir definir los valores de los metodos de nuestros objetos

class persona:
    def __init__(Self, nombre, apellido, edad):
        Self.nombre = nombre
        Self.apellido = apellido
        Self.edad = edad

persona1 = persona("juan", "perez", 28)
print(persona1)
print(persona1.nombre)
print(persona1.apellido)
print(persona1.edad)

persona2 = persona("carla", "gomez", 30)
print(f"objeto persona 2 : {persona2.nombre} {persona2.apellido} {persona2.edad}")

# aca les asigno otras caracteristicas a los metodos
persona1.nombre = "juan carlos"
persona1.apellido = "raul"
persona1.edad = 32
print(f"objeto persona 1 : {persona1.nombre} {persona1.apellido} {persona1.edad}")

print
# cada objeto tiene sus propios valores


 # %%
