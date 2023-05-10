// Máme mít sestavu abychom věděli že auto jezdí, nevím jestli použít senzory
// "XYABLO12" mohu poslat např. "@_______" => bude osa x 64
// x  = -128 - 127, y = -128 - 127, A B = 0, 1
  
radio.setGroup(12)
radio.setTransmitSerialNumber(true)
radio.setFrequencyBand(12)
radio.setTransmitPower(7)

function autickoJede(lw: number = 0, rw: number = 0) {
    const ul = Math.map(lw, -100, 100, -235, 235) // přizpůsobit našem kolům
    const ur = Math.map(rw, -100, 100, -255, 255)
    PCAmotor.MotorRun(PCAmotor.Motors.M1, -ul)
    PCAmotor.MotorRun(PCAmotor.Motors.M4, -ur)
}


function autickoDozadu() {
    autickoJede(-100, -100)
}

function autickoDopredu() {
    autickoJede(100 , 100)

}

function autickoDoleva() {
    autickoJede(100, 0)
}     

function autickoDoprava() {
    autickoJede(0, 100)
}
/*

let cas = 

function sestava() { // 2 sekundy dopředu, poté zastavit a 1 sek doleva zastavit a sekundu dozadu, poté sekundu doprava dozadu a zpět rovně 3 sekundy
    while () {
        
    }
}



radio.onReceivedString(function (receivedString: string) {
    return 
})

*/

radio.onReceivedNumber(function(receivedNumber: number) {
    PCAmotor.MotorRun(PCAmotor.Motors.M1, 250)
    PCAmotor.MotorRun(PCAmotor.Motors.M4, -215)
    basic.pause(2000)
    PCAmotor.MotorRun(PCAmotor.Motors.M1, 50)
    PCAmotor.MotorRun(PCAmotor.Motors.M4, -200)
    basic.pause(1000)
    PCAmotor.MotorRun(PCAmotor.Motors.M1, 200)
    PCAmotor.MotorRun(PCAmotor.Motors.M4, -50)
    basic.pause(1000)
    PCAmotor.MotorRun(PCAmotor.Motors.M1, -220)
    PCAmotor.MotorRun(PCAmotor.Motors.M4, 200)
    basic.pause(2000)
    PCAmotor.MotorRun(PCAmotor.Motors.M1, 250)
    PCAmotor.MotorRun(PCAmotor.Motors.M4, 250)
    basic.pause(1000)
    PCAmotor.MotorRun(PCAmotor.Motors.M1, 20)
    PCAmotor.MotorRun(PCAmotor.Motors.M4, -250)
    basic.pause(5000)
    PCAmotor.MotorStopAll()
})



radio.onReceivedNumber(function(receivedNumber: number) {
    console.log(receivedNumber)
    basic.showLeds(`
    # . . . #
    . . . . .
    . . # . .
    . . . . .
    # . . . #
    `)
})