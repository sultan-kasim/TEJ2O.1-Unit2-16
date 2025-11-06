/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Sultan
 * Created on: Oct 2025
 * This program sends a message throught radio if sonar too close to something.
*/

// setup
radio.setGroup(14)
basic.showIcon(IconNames.Happy)

// send message to second radio if too close

input.onButtonPressed(Button.A, function () {
    while (true) {

        let distance = sonar.ping(DigitalPin.P0, DigitalPin.P1, PingUnit.Centimeters)

        if (distance < 10) {
            radio.sendString("Too close")
        }

        radio.sendNumber(distance)

        // Added pause to prevent crash
        basic.pause(500)
    }
})