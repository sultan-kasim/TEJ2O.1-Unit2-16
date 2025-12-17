/* Copyright (c) 2025 MTHS All rights reserved
 *
 * Created by: Sultan
 * Created on: Oct 2025
 * This program sends a message throught radio if sonar too close to something.
*/
// setup
radio.setGroup(15)
basic.showIcon(IconNames.Happy)


basic.forever(function () {
    let distance = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )


    // check if that object is too close
    if (distance > 0 && distance < 10) {
        basic.clearScreen()
        radio.sendString("Too close")
        basic.pause(200)
        basic.showIcon(IconNames.Happy)
    }


    basic.pause(500)
})