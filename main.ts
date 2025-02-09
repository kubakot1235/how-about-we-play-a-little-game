let bullet = 0
let RoundCountFinish = 0
input.onButtonPressed(Button.A, function () {
    bullet = randint(1, 6)
})
input.onGesture(Gesture.Shake, function () {
    RoundCountFinish = RoundCountFinish + 1
    if (bullet == 1) {
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.clearScreen()
    } else if (bullet == 2) {
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.clearScreen()
    } else if (bullet == 3) {
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.clearScreen()
    } else if (bullet == 4) {
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.clearScreen()
    } else if (bullet == 5) {
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.pause(0.5)
        basic.showLeds(`
            . # . # .
            # # . # #
            # # . # #
            . # . # .
            . . . . .
            `)
        basic.pause(0.5)
        basic.showLeds(`
            . . . . .
            # . . . #
            # . . . #
            . . . . .
            . . . . .
            `)
        basic.pause(0.5)
        basic.clearScreen()
        RoundCountFinish = 6
    } else {
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.clearScreen()
    }
    if (RoundCountFinish == 6) {
        basic.showString("Finish")
        RoundCountFinish = 0
    }
})
