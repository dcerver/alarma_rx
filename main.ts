radio.onReceivedNumber(function (receivedNumber) {
    Alarma = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    basic.clearScreen()
    basic.showIcon(IconNames.Yes)
    basic.pause(200)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(0)
    basic.clearScreen()
    basic.showIcon(IconNames.Yes)
    basic.pause(200)
    basic.clearScreen()
})
let Alarma = 0
radio.setGroup(76)
Alarma = 0
basic.forever(function () {
    if (Alarma == 0) {
        basic.showIcon(IconNames.Happy)
    } else if (Alarma == 1) {
        basic.showIcon(IconNames.Sad)
        basic.pause(200)
        basic.clearScreen()
        basic.pause(200)
    }
})
