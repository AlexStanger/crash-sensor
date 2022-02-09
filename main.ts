basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        pins.digitalWritePin(DigitalPin.P4, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P4, 0)
    }
})
