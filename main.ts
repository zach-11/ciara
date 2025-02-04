basic.forever(function () {
    music.play(music.stringPlayable("C D G C D C5 C G ", 186), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
    basic.showLeds(`
        . . . . #
        . . . # .
        . . # . .
        . # . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . # .
        . . # . #
        . # . . .
        # . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # . . .
        # . # . .
        . . . # .
        . . . . #
        . . . . .
        `)
    basic.showLeds(`
        # . . . .
        . # . . .
        . . # . .
        . . . # .
        . . . . #
        `)
    basic.showLeds(`
        . . . . .
        # . . . .
        . # . . .
        . . # . #
        . . . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
})
