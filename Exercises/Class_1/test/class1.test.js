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
    it("La funcion debe retornar el valor faltante utilizando la ley de ohm.", () => {

        const case1 = {V: 12, R: 103} // 12 Volts - 103 Ohms
        const case2 = {R: 204, I: 5} // 204 Ohms - 5 Ampers
        const case3 = {I: 10, V: 24} // 10 Ampers - 24 Volts

        expect(ohmLaw(case1)).toBe(0.11)
        expect(ohmLaw(case2)).toBe(1.020)
        expect(ohmLaw(case3)).toBe(2.4)
    })
})