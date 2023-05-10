// Máme mít sestavu abychom věděli že auto jezdí, nevím jestli použít senzory
// "XYABLO12" mohu poslat např. "@_______" => bude osa x 64
// x  = -128 - 127, y = -128 - 127, A B = 0, 1
    
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

function sestava() {
    
}



radio.onReceivedString(function (receivedString: string) {
    return 
})





input.onButtonPressed(Button.AB, function() {
    input.acceleration(Dimension.X)
})