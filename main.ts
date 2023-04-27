radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
        basic.pause(100)
        basic.clearScreen()
        basic.pause(100)
    }
})
radio.setGroup(76)
basic.forever(function () {
	
})
