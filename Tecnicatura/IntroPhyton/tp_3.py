# %%
# 1) Desarrollar una función que reciba tres números enteros positivos y verifique si
# corresponden a una fecha válida (día, mes, año). Devolver True o False según
# la fecha sea correcta o no. Realizar también un programa para verificar el
# comportamiento de la función.
def fecha_validacion(dia, mes, año):
    """Esta funcion reciebe tres parametros y comprueba si coresponden a una fecha valida"""
    from datetime import date 
    # conviere la lista de str a int, en caso que no pueda arroja false y tipo de error
    try:
        d = date(int(año), int(mes), int(dia))
        print (d)
        return True
    except Exception as error:
        return False, (f"Error tipo {error}")

dia = input("Ingrese el dia(solo numero entero de 2 digitos)")
mes = input("Ingrese el mes(solo numero entero de 2 digitos)")
año = input("ingrese el año(solo numero entero de 4 digitos)")
fecha_validacion(dia, mes, año)
# %%
# 2) Un comercio de electrodomésticos necesita para su línea de cajas un programa
# que le indique al cajero el cambio que debe entregarle al cliente. Para eso se
# ingresan dos números enteros, correspondientes al total de la compra y al dinero
# recibido. Informar cuántos billetes de cada denominación deben ser entregados
# al cliente como vuelto, de tal forma que se minimice la cantidad de billetes.
# Considerar que existen billetes de $500, $100, $50, $20, $10, $5 y $1. Emitir un
# mensaje de error si el dinero recibido fuera insuficiente. Ejemplo: si la compra es
# de $317 y se abona con $500, el vuelto debe contener 1 billete de $100, 1 billete
# de $50, 1 billete de $20, 1 billete de $10 y 3 billetes de $1.

def vuelto_compra(comprado, entregado):
    if comprado > entregado:
        return ("Error, el dinero es insuficiente")
    else:
        vuelto = entregado - comprado
        while vuelto != 0:
            
# %%
