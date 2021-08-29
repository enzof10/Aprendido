# variables y constantes
# constante en mayusculas TODITO
import clase2
MI_MENSAJE = "esta es la constante"

strCadena = "hola mundo"  #cadena de caracteres
intCadena = 0
strCadena2 = "hello word" #string
intNumero = 0
floatNumero = 0.0 #float

print(strCadena, strCadena2, intCadena)

strCadenaGrande = strCadena + " " + strCadena2

print(strCadenaGrande)

# f se usa para que salga en formato literal

print(f"variable {strCadena} esta cadena esta en constante{strCadena2}")

# para que escriba sin saltar se escrib end 


# tambien escribe literal pero necesito agregarle la f para que tome las variables
print(strCadena2)

strSalida =f""""
                  variable {strCadena}
                  esta cadena es otra en
                  constante {strCadenaGrande}
             """

# aca tampoco toma las variables
strSalidaSinF =""""
                  variable {strCadena}
                  esta cadena es otra en
                  constante {strCadenaGrande}
             """
print(strSalida)
print(strSalidaSinF)


# solo convierte si el numero no tiene letras
numero = "12"
print(type(numero))
print(type(int(numero)))
numero2= "12b"
# print(type(int(numero2)))

# si quiero que sume algo que es alfanumerico tengo que indicar la posicion del string primero y despues pasarloa  int
print(numero2 + numero2, int(str(numero2[1])) + int(str(numero2[1])))


