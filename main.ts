/* Copyright (c) 2025 MTHS All rights reserved
 *
 * Created by: Sultan
 * Created on: Oct 2025
 * This program sends a message throught radio if sonar too close to something.
*/

/* Copyright (c) 2025 MTHS All rights reserved
*
* Created by: Sultan
* Created on: Oct 2025
* This program sends a message throught radio if sonar too close to something.
*/

// variable
let distanceToObjest: number = 0

// setup
radio.setGroup(15)
basic.clearScreen()
basic.showIcon(IconNames.Happy)

while (true) {
    // gets the distance
    distanceToObjest = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )
    basic.showIcon(IconNames.Happy)

    if (distanceToObjest < 10) {
        radio.sendString("Too Close")
        basic.showIcon(IconNames.No)
    } else {
        basic.showIcon(IconNames.Yes)
    }
}

radio.onReceivedString(function (receivedString) {
    basic.clearScreen()
    basic.showString(receivedString)
    basic.showIcon(IconNames.Happy)
})
