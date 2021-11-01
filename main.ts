radio.onReceivedNumber(function (receivedNumber) {
    duck_count = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P1, 0)
    pins.servoWritePin(AnalogPin.P2, 0)
})
let duck_count = 0
radio.setGroup(444)
radio.sendNumber(duck_count)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
})
basic.forever(function () {
    if (duck_count >= 5) {
        radio.sendString("f")
        basic.showString("f")
        pins.servoWritePin(AnalogPin.P1, 0)
        pins.servoWritePin(AnalogPin.P2, 180)
    } else {
        if (duck_count < 5) {
            while (input.lightLevel() < 10) {
                radio.sendString("duck")
                pins.servoWritePin(AnalogPin.P1, 180)
                basic.pause(2000)
                pins.servoWritePin(AnalogPin.P2, 180)
                basic.pause(2000)
                pins.servoWritePin(AnalogPin.P1, 0)
                pins.servoWritePin(AnalogPin.P2, 0)
            }
        }
    }
})
