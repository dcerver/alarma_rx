radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showIcon(IconNames.Happy)
    } else if (receivedNumber == 1) {
        basic.showIcon(IconNames.Sad)
        basic.pause(200)
        basic.clearScreen()
        basic.pause(200)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("ON")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("OFF")
})
radio.setGroup(76)
