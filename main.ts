sprites.onOverlap(SpriteKind.Player, 30, function (sprite, otherSprite) {
    otherSprite.setImage(assets.image`crashKamen`)
    otherSprite.setKind(31)
    music.bigCrash.play()
    info.changeLifeBy(-1)
    scene.cameraShake(0, 0)
})
// Animace Prekazek
sprites.onOverlap(SpriteKind.Player, 10, function (sprite, otherSprite) {
    otherSprite.setImage(assets.image`crashkuzel`)
    otherSprite.setKind(11)
    music.bigCrash.play()
    info.changeLifeBy(-1)
    scene.cameraShake(0, 0)
})
sprites.onOverlap(SpriteKind.Player, 20, function (sprite, otherSprite) {
    otherSprite.setImage(assets.image`crashOpicka`)
    otherSprite.setKind(21)
    music.bigCrash.play()
    info.changeLifeBy(-2)
    scene.cameraShake(0, 0)
})
sprites.onOverlap(SpriteKind.Player, 40, function (sprite, otherSprite) {
    game.over(true)
})
let kamen: Sprite = null
let opicka: Sprite = null
let kuzel: Sprite = null
let rnd = 0
// Vytvoreni Auta
let car = sprites.create(assets.image`car`, SpriteKind.Player)
car.z = 1
controller.moveSprite(car)
car.setPosition(128, 0)
let poziceY = 4015
// Vytvoreni Cile
let finish = sprites.create(assets.image`finish`, 40)
finish.setPosition(128, 50)
// Vytvoreni Zivotu
info.setLife(3)
info.life()
// Vytvoreni Mapy
tiles.setTilemap(tilemap`level1`)
scene.cameraFollowSprite(car)
scene.centerCameraAt(0, -100)
// Ovladaní auta
game.onUpdate(function () {
    car.y = poziceY
    poziceY = poziceY - 2
    scene.centerCameraAt(car.x, car.y - 26)
})
// Spawn Prekazek
game.onUpdateInterval(1000, function () {
    rnd = randint(1, 3)
    if (rnd == 1) {
        kuzel = sprites.create(assets.image`kuzel0`, 10)
        kuzel.setPosition(randint(5.5, 10.5) * 16, car.y - 150)
    }
    if (rnd == 2) {
        opicka = sprites.create(assets.image`opicka`, 20)
        opicka.setPosition(randint(5.5, 10.5) * 16, car.y - 150)
    }
    if (rnd == 3) {
        kamen = sprites.create(assets.image`kamen`, 30)
        kamen.setPosition(randint(5.5, 10.5) * 16, car.y - 150)
    }
})
