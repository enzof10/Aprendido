# %%

from uni14_encapsulamiento import Persona

print("Creacion de objetos".center(40,"-"))
persona1 = Persona("Karla", "Gomez", 30)
persona1.mostrar_detalles()

print("Eliminacion d e objetos".center(40,"-"))

del persona1
# print(__name__)
# esto imprime el modulo sobre el cual se "trabaja" main significa principal

# %%
