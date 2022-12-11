let X = 0
let Y = 0
basic.forever(function () {
    for (let X = 0; X <= 4; X++) {
        for (let Y = 0; Y <= 4; Y++) {
            led.plot(X, Y)
            basic.pause(25)
        }
    }
    X = 4
    Y = 4
    for (let ReverseX = 0; ReverseX <= 4; ReverseX++) {
        for (let ReverseY = 0; ReverseY <= 4; ReverseY++) {
            led.unplot(X - ReverseX, Y - ReverseY)
            basic.pause(25)
        }
    }
})
