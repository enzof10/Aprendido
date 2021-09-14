# %%
lista = ['Banana','100.10']
tipos = [str,float]

datos = zip(tipos, lista)
# print(list(datos))
for func, val in zip(tipos, lista):
    converted  = func(val)
    print(converted, end=' ')
    print(datos.values, type(datos))

# %%

a1 = [1,2,3,4]
b1 = [5,6,7,8]
c1 = [4,5,6,7,8,9,0]
 
zi = zip (a1, b1) # devolver un objeto <objeto zip en 0x7f71c0062788>
 
print(zi)
for i in zi:
    print(i)

# %%
# - Manejo de archivos (open)
from pprint import pprint
precios = {}
cabecera = ['Fruta','Precio']
tipos = [str,float]

# Con compresion de listas
f = open('precios.csv', 'r', encoding='utf-8')
# for i in f:
#     print(i)

records = []
for line in f:
    converted = [func(val) for func, val in zip(tipos, line.replace('\n','').split(','))]
    print(converted)
    records.append(dict(zip(cabecera, converted)))
pprint(records)
f.close()
# %%
from pprint import pprint
precios = {}
cabecera = ['Fruta','Precio']
tipos = [str,float]

# Sin compresion de listas
f = open('precios.csv', 'r', encoding='utf-8')
records = []
for line in f:
    linea = line.replace('\n','').split(',')
    # print(len(linea))
    if len(linea) == 2: 
        linea[1] = float(linea[1])
        records.append(dict(zip(cabecera, linea)))
pprint(records)
f.close()

# %%

from pprint import pprint
cabecera = ["titulo" , "apellido", "nombre", "email", "sexo", "genero", "colorfavorito", "telefono", "fechanac", "direccion", "ciudad", "pais"]
datos = {}

# %%
def leer_datos(nombre_archivo):
    ''' Devuelve una lista de diccionarios con la información del datos del archivo especificado '''
    import csv
    
    datos_dict = []
    try:
        f = open(nombre_archivo, 'rt', encoding='utf8')
        filas = csv.reader(f)
        cabecera = next(filas)
        for fila in filas:
            item =  dict(zip(cabecera,fila))
            datos_dict.append(item)
        f.close()
    except Exception as e:
        datos_dict.append(f'A sucedido un Error {e}')
    finally:
        return datos_dict

def cantidad_latioamericanos(listaDic, listaAmericaSur):
    """Esta funcion devuelve la cantidad de usuarios latinoamericanos"""
    cantPaises = dict()
    # recorre la cantidad de diccionarios que hay
    for i in range(len(listaDic)):
        #dentro de cada diccionario busco por clave los valores de los paises
        for j in listaAmericaSur:
            if j.upper() == listaDic[i]["pais"].upper():
                if listaDic[i]["pais"] in cantPaises:
                    cantPaises[listaDic[i]["pais"]] = cantPaises[listaDic[i]["pais"]] +1
                else:
                    cantPaises[listaDic[i]["pais"]] = 1
    return cantPaises
    
paisesAmericaDelSur = ['Argentina', "Bolivia", "Brasil", "Chile", "Colombia", "Ecuador", "Guyana", "Paraguay", "Peru", "Suriname", "Uruguay", "Venezuela"]
us_datos = leer_datos('MOCK_DATA (1).csv')

for i, j in cantidad_latioamericanos(us_datos, paisesAmericaDelSur).items():
    print(i, j)
#%%