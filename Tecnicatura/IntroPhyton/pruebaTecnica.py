cant_divisores = 0
i = 1
n=int(input("Ingrese un número natural (>0): "))
while (i <= n):
    if n % i == 0:
            cant_divisores+=1
    i+=1
if cant_divisores==2:
        print("El número es primo")
else:
        print("El número no es primo") 