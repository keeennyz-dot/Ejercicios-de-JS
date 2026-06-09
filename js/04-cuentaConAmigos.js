let monto, amigos, total
console.log(typeof(monto))
console.log(monto)
monto = parseInt(prompt("Ingresa el monto total"))

amigos = parseInt(prompt("Ingresa la cantidad de personas"))
console.log(typeof(amigos))
console.log(amigos)

total = monto / amigos
console.log("El total se deberá repartir en: " + total)