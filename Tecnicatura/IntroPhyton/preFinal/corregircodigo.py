# %%
# El siguiente codigo devuelve la cantida de caracteres
# no numericos e informar cuantos hay de ambos tipos

# Se pide cambiar el codigo ya que devuelva la cantidad de:
#   letras
#   Signos
#   numeros


micadena = 'Este texto #contiene& mas &de 59 letras (alphanumericos )y menos de 10 numeros pero tambien varios signos'

numero = []
letras = []
signos = []
signosArray =[" ", "#", "&", ")","(",]
for caracter in micadena:
    if caracter.isdigit():
        numero.append(caracter)
    elif (caracter in signosArray):
        signos.append(caracter)
        print("entro")
    else:
        letras.append(letras)


print(f'Cantidad de numeros: {len(numero)}, caracteres: {len(letras)}, signos: {len(signos)} ')
# %%
