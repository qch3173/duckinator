radio.onReceivedNumber(function (receivedNumber) {
    duck_count += 1
    basic.showNumber(duck_count)
})
radio.onReceivedString(function (receivedString) {
    basic.showString("f")
})
let duck_count = 0
radio.setGroup(444)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
})
basic.forever(function () {
    if (duck_count >= 5) {
        radio.sendString("f")
        pins.servoWritePin(AnalogPin.P1, 0)
        pins.servoWritePin(AnalogPin.P2, 180)
    } else {
        while (input.lightLevel() < 10) {
            radio.sendNumber(1)
            pins.servoWritePin(AnalogPin.P1, 180)
            basic.pause(2000)
            pins.servoWritePin(AnalogPin.P2, 180)
            basic.pause(2000)
            pins.servoWritePin(AnalogPin.P1, 0)
            pins.servoWritePin(AnalogPin.P2, 0)
        }
    }
})
