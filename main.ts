radio.onReceivedNumber(function (receivedNumber) {
    duck_count = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("duck")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "f") {
        pins.servoWritePin(AnalogPin.P2, 180)
        basic.showString("f")
    } else if (receivedString == "duck") {
        duck_count += 1
        basic.showNumber(duck_count)
    }
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
