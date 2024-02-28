const {
    ohmLaw,
    seriesCircuits,
    secondNewtonLaw,
    forceCalculation,
    pyramidConstrucction,
    calculateRestVoltAmp,
    calculatePower,
    efectJoule,
    calculateCapacitorCharge


} = require('../Class_1')

// TEST 1
describe("1. ohmLaw(obj)", () => {
    test.todo("La funcion debe retornar el valor faltante utilizando la ley de ohm.", () => {

        const case1 = {V: 12, R: 103} // 12 Volts - 103 Ohms
        const case2 = {R: 204, I: 5} // 204 Ohms - 5 Ampers
        expect(ohmLaw(case1)).toBe()
    })
})