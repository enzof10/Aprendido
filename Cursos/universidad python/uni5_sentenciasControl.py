condicion = 10
# toma como condicion verdadera el solo hecho de tener algo
if condicion:
   print("condicion verdadera")
else:
    print("condicion falsa")
 
  
condicion = False
# toma como condicion verdadera el solo hecho de tener algo
if condicion == True:
   print("condicion verdadera")
elif condicion == False:
    print("condicion falsa")
else:
    print("condicion no reconocida")

condicion = False

if condicion:
    print("codicion vedadera")
else:
    print("condicion falsa")


# operador ternario si el if es chico
print("condicion verdadera") if condicion else("condicion falsa")

# %%
mes = int(input("proporciona mes del año (1-12): "))
estacion = None
if mes == 1 or mes == 2 or mes == 12:
    estacion = "invierno"
elif mes == 3 or mes == 4 or mes == 5:
    estacion = "primavera"
elif mes == 6 or mes == 7 or mes == 8:
    estacion = "verano"
elif mes == 9 or mes == 10 or mes == 11:
    estacion = "otoño"
else:
    estacion = "mes incorrecto"
print(f"para el mes {mes} la estacion es: {estacion}")
# %%

edad = int(input("Proporciona tu edad"))

if 0<=edad<10:
    mensaje = "La infacnia es increible.." 
elif 10<=edad<20:
    mensaje = "Muchoas cambios, mucho estudio.."
elif 20<=edad<30:
    mensaje = "Amor y comienza el trabajo"
else:
    mensaje = "etapa de vida no reconocida"

print(f"Tu edad es {edad} {mensaje}")
# %%

calificacion = int(input("Proporciona un valor entre 0 y 10: "))
if calificacion>=9 and calificacion <=10:
    nota = "A"
elif calificacion >= 8 and calificacion < 9:
    nota = "B" 
elif calificacion >= 7 and calificacion < 8:
    nota = "C" 
elif calificacion >= 6 and calificacion < 7:
    nota = "D" 
elif calificacion >= 0 and calificacion < 6 :
    nota = "F"
else:
    nota = "Valor desconocido"
print(nota)
 
# %%
