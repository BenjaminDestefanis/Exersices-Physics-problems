// Exercises Class One

// 1. Ohm's law [Ley de ohm]


const OhmLaw = (obj) => {
    // La funcion recibe 1 objeto con 2 propiedades: EJ: obj = { prop : 32,4 , prop2 : 12}
    // La funcion debe funcionar como la ley de OHM que dice lo siguiente
    // V = I * R || I = V / R || R = V / I (./images/ley_ohm.png)
    // V = Voltage - R = Resistencia - I = Amperaje
    // Primero: La funcion debe descubrir que 2 valores tenemos , de acuerdo a los nombres de las pripiedades
    // si tenes 'V' o 'R' o 'I'
    // Luego la funcion debe aplicar la ley de Ohm para obtener el valor faltante.
    // Por ultimo la funcion debe retornar el nuevo valor
    // EJ: obj = { V : 45, I : 10} -  R = V / I -  R = 45 / 10  - R = 4.5
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



