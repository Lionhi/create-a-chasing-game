input.onButtonPressed(Button.A, function () {
    Player.move(-1)
})
function call_game (speed: number) {
    Chaser.turn(Direction.Right, randint(0, 90))
    Chaser.move(1)
    Chaser.ifOnEdgeBounce()
    if (Chaser.isTouchingEdge()) {
        game.setScore(game.score() + 1)
    }
    if (Chaser.isTouching(Player)) {
        game.gameOver()
    }
    basic.pause(speed)
}
input.onButtonPressed(Button.B, function () {
    Player.move(1)
})
let Player: game.LedSprite = null
let Chaser: game.LedSprite = null
game.startCountdown(300000)
Chaser = game.createSprite(0, 5)
Player = game.createSprite(2, 0)
Player.turn(Direction.Right, 90)
Player.set(LedSpriteProperty.Brightness, 80)
Chaser.set(LedSpriteProperty.Brightness, 10000)
basic.forever(function () {
    if (edubitPotentioBit.comparePot(PotCompareType.MoreThan, 800)) {
        call_game(250)
    } else if (edubitPotentioBit.comparePot(PotCompareType.MoreThan, 400)) {
        call_game(500)
    } else {
        call_game(750)
    }
})
