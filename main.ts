let distance = 0
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    led.plotBarGraph(
    distance,
    50
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(distance)
    }
    if (distance < 8) {
        pins.digitalWritePin(DigitalPin.P3, -1)
        pins.digitalWritePin(DigitalPin.P2, -1)
    } else {
        pins.digitalWritePin(DigitalPin.P3, 1)
        pins.digitalWritePin(DigitalPin.P2, 1023)
    }
})
