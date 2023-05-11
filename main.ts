// Máme mít sestavu abychom věděli že auto jezdí, nevím jestli použít senzory
// "XYABLO12" mohu poslat např. "@_______" => bude osa x 64
// x  = -128 - 127, y = -128 - 127, A B = 0, 1
/* 

function autickoJede(lw: number = 0, rw: number = 0) {
    const ul = Math.map(lw, -100, 100, -235, 235); // přizpůsobit našem kolům
    const ur = Math.map(rw, -100, 100, -255, 255);
    PCAmotor.MotorRun(PCAmotor.Motors.M1, -ul);
    PCAmotor.MotorRun(PCAmotor.Motors.M4, -ur);
}


function autickoDozadu() {
    autickoJede(-100, -100);
}

function autickoDopredu() {
    autickoJede(100 , 100);

}

function autickoDoleva() {
    autickoJede(100, 0);
}     

function autickoDoprava() {
    autickoJede(0, 100);
}
*/

let acceleration = 40;

/*
radio.onReceivedNumber(function(receivedNumber: number) {
    basic.showIcon(IconNames.Heart);
    PCAmotor.MotorRun(PCAmotor.Motors.M1, 250);
    PCAmotor.MotorRun(PCAmotor.Motors.M4, -215);
    basic.pause(2000);
    PCAmotor.MotorRun(PCAmotor.Motors.M1, 50);
    PCAmotor.MotorRun(PCAmotor.Motors.M4, -200);
    basic.pause(1000);
    PCAmotor.MotorRun(PCAmotor.Motors.M1, 200);
    PCAmotor.MotorRun(PCAmotor.Motors.M4, -50);
    basic.pause(1000);
    PCAmotor.MotorRun(PCAmotor.Motors.M1, -220);
    PCAmotor.MotorRun(PCAmotor.Motors.M4, 200);
    basic.pause(2000);
    PCAmotor.MotorRun(PCAmotor.Motors.M1, 250);
    PCAmotor.MotorRun(PCAmotor.Motors.M4, 250);
    basic.pause(1000);
    PCAmotor.MotorRun(PCAmotor.Motors.M1, 20);
    PCAmotor.MotorRun(PCAmotor.Motors.M4, -250);
    basic.pause(5000);
    PCAmotor.MotorStopAll();
})
*/


radio.onReceivedNumber(function (receivedNumber: number) {
    if (receivedNumber == 1) { // aktivace AB
    basic.showIcon(IconNames.Heart);
        PCAmotor.MotorRun(PCAmotor.Motors.M1, 120);
        PCAmotor.MotorRun(PCAmotor.Motors.M4, -100); 

    } else if (receivedNumber == 2) { // aktivace A
        PCAmotor.MotorRun(PCAmotor.Motors.M1, 120 + acceleration);

    } else if (receivedNumber == 3) { // aktivace P0
        PCAmotor.MotorRun(PCAmotor.Motors.M1, 120 - acceleration);

    } else if (receivedNumber == 4) { // aktivace B
        PCAmotor.MotorRun(PCAmotor.Motors.M4, -100 - acceleration);

    } else if (receivedNumber == 5) { // aktivace P2
        PCAmotor.MotorRun(PCAmotor.Motors.M4, -100 + acceleration);
        
    } else if (receivedNumber == 6) { // logo
        PCAmotor.MotorStopAll();
        basic.clearScreen();
    }
})


