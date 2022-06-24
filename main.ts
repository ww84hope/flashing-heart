let sprite: game.LedSprite = null
input.onButtonPressed(Button.A, function () {
    if (sprite.get(LedSpriteProperty.X) == 2 || sprite.get(LedSpriteProperty.Y) == 2) {
        game.addScore(1)
    }
})
input.onButtonPressed(Button.B, function () {
    game.gameOver()
})
basic.forever(function () {
    sprite = game.createSprite(randint(0, 4), randint(0, 4))
    basic.pause(200)
    sprite.delete()
    basic.pause(200)
})
