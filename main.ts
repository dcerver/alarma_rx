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
    radio.sendNumber(1)
    basic.showIcon(IconNames.Yes)
    basic.pause(200)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(0)
    basic.showIcon(IconNames.Yes)
    basic.pause(200)
    basic.clearScreen()
})
radio.setGroup(76)
