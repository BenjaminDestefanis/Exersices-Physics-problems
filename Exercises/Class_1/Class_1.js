// Exercises Class One

// 1. Ohm's law [Ley de ohm]

const ohmLaw = (obj) => {
    // La funcion recibe 1 objeto con 2 propiedades: EJ: obj = { prop : 32,4 , prop2 : 12}
    // La funcion debe funcionar como la ley de OHM que dice lo siguiente
    // V = I * R || I = V / R || R = V / I (./images/ley_ohm.png)
    // V = Voltage - R = Resistencia - I = Amperaje
    // Primero: La funcion debe descubrir que 2 valores tenemos , de acuerdo a los nombres de las pripiedades
    // si tenes 'V' o 'R' o 'I'
    // Luego la funcion debe aplicar la ley de Ohm para obtener el valor faltante.
    // Por ultimo la funcion debe retornar el nuevo valor
    // EJ: obj = { V : 45, I : 10} -  R = V / I -  R = 45 / 10  - R = 4.5
    // PD: Los resultados flotantes , si tiene mas de 2 decimales, redondear con 2 decimales.
    // Tu codigo AQUI:

}


// 2. Series Circuits [Circuitos en Serie]

const seriesCircuits = (values) => {
    // La corriente en un circuito serie es absolutamente la misma en todos sus puntos.
    // La funcion recibe un objeto que contiene 2 propiedades , que muestran los valores
    // de baterias y resistencias.
    // La funcion debe retornar un objeto , que contega 3 propiedades 
    // {"Voltaje", "Amperaje", "Resistencia Total"}
    // PD: Los valores deben ser strings, junto con sus descripciones, "12v", "3A", "412 Ohm"
    // EJ: values = {"Voltaje": '24v', "Amperaje": '0.69mA', "Resistencia Total": '345 Ohm }
    // Tu codigo AQUI:

}

// 3. Final free fall velocity calculation [Calculo de velocidad final - caida libre]

const secondNewtonLaw = (initialVelocity, acceleration, time, expectdVelocity) => {
    // La funcion debe retornar true , si la diferencia entre el calculo de la velocidad
    // final , y la velocidad que se espera (expectdVelocity), no es mayor de 10 m/s
    // PD: Para calcualr la velocidad final del objeto, utilizar la segunda ley de Newton
    // Tu codigo AQUI:

}

// 4. Force Calculation [Calculo de fuerza]

const forceCalculation = (mass, acceleration, firstExpectdForce, secondExperctdForce) => {
    // La funcion debe retornar true, si la fuerza (Newtons), se encuentra entre las espectativas de fuerza
    // (firstExperctdForce, secondExperctdForce)
    // PD: Para obtener la fuerza, debes utilizar la formula de la segunda ley de Newton
    // Tu codigo AQUI:

}

// 5. Pyramid Construction

const pyramidConstrucction = () => {
    
}


// 6. Resistence - Voltage - Amper - Calculate [Calculo de resistencia-Voltaje-Ampere]

const calculateRestVoltAmp = (array) => {
    // La function recibe un array de objetos. EJ: [{V: 12, A: 1},{R: 4 , V: 24},{A: 5, R: 80}]
    // Cada objeto tendra 2 propiedades, que pueden ser Amperaje (A), Voltaje (V), o Resistencia (R)
    // La fundcion debe recorrer el array y obtener el valor faltante, utilizando la ley de ohm
    // Luego guardar el valor (en formato String) encontrado y calculado, dentro de un array,
    // EJ: ['2 A', '54 V', '320 ohm' , etc]
    // finalmente la funcion debe retornar el array
    // tu codigo AQUI:

}

// 7. Calculate Power [Calcular Potencia]

const calculatePower = (homeAppliances, totalPowerLimit) => {
    // homeAppliances es una matriz de objetos que continern 3 popiedades {nombre del electrodomestico, Voltaje, Amperaje}
    // la funcion debe calcular la potencia de cada electrodomestico , y luego saber si la potencia total, es menor
    // que el limite de la potencia total (totalPowerLimit) que nos habilita nuestro provedor.
    // si el consumo es menor que el limite retornar el mensaje "El limite de potencia alcanza."
    // si el consumo es mayor que el limite retornar el mensaje "El limite de potencia no es suficiente."
    // tu codigo AQUI:

}

// 8. Law Joule Efect [Efecto de ley joule]

const efectJoule = (resistence, volt, time) => {
    // La funcion debe calcular la energia termica que genera una resistencia de un 
    // termotanque electrico. En este ejercicio debemos utilizar 2 leyes.
    // La ley de ohm y la ley de Joule. 
    // La funcion recibe 3 valores (resistence[number], volt[number], time[number - minutos])
    // La formula de la Ley de Joule es: Q = I**2 x R x t
    // Donde : Q = Calor expresado en Joules. I = Amperaje. R = Resistencia. t = tiempo en segundos
    // Una vez obtenido el valor en Joules, la funcion debe retornar el valor de calorias de energia
    // termica, teniendo en cuenta que 1 Joule = 0.24 calorias de energia termica
    // PD: Tener en cuenta que para realizar la formula de la ley de Joule, necesitemaos tener
    // el Amperaje, ya que la funcion ese valor no lo recibe.
    // tu codigo AQUI:

}

// 9. Calculate capacitor charge (Calcular garca de un capacitor)

const calculateCapacitorCharge = (farads, Volts) => {
    // La funcion debe calcular 
}


module.exports = {
    ohmLaw,
    seriesCircuits,
    secondNewtonLaw,
    forceCalculation,
    pyramidConstrucction,
    calculateRestVoltAmp,
    calculatePower,
    efectJoule,
    calculateCapacitorCharge

}