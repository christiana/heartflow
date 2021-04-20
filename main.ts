basic.showString("Hei!")
for (let index = 0; index <= 3; index++) {
    basic.showNumber(index)
}
basic.forever(function () {
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . # .
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        . . # . .
        . . . . .
        . . . . .
        . # . # .
        # # # # #
        `)
    basic.showLeds(`
        . # # # .
        . . # . .
        . . . . .
        . . . . .
        . # . # .
        `)
    basic.showLeds(`
        # # # # #
        . # # # .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        . . . . .
        `)
})
