print("Proporcione los siguientes datos del libro: ")
nombre = input("Proporciona el nombre del libro: ")
id = int(input("proporcona el ID del libro: "))
precio = float(input("Proporciona el valor del libro: "))
envioGratuito = input("Indica si el envio es gratuito (true/false): ")

if envioGratuito == "true":
    envioGratuito = True
elif envioGratuito == "false":
    envioGratuito = False
else:
    envioGratuito = "Valor incorrecto, debe esvcribir true o false"


print(f"""
    Nombre: {nombre}
    Id: {id}
    Precio: {precio}
    Envio gratuito: {envioGratuito}
""")