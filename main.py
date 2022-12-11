for X in range(5):
    for Y in range(5):
        led.plot(X, Y)
        basic.pause(100)
ReverseX = 4
X2 = 0
while X2 <= -4:
    for Y2 in range(5):
        led.unplot(ReverseX - X2, Y2)
        basic.pause(300)
    X2 += 1