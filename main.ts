//Vytvoreni Auta
let car = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ....ffffffffffffffffffffffff....
    ...f55522222ffffffff22222555f...
    ..f22222222222222222222222222f..
    ..ff222222222222222222222222ff..
    .ff22222222222222222222222222ff.
    .f2222222222222222222222222222f.
    ff222222f22222222222222f222222f.
    f2222222f22222222222222f222222ff
    f2222222f22222222222222f2222222f
    f2222222f22222222222222f2222222f
    ff222222f22222222222222f222222ff
    .f222222f22222222222222f222222f.
    .f222222f22222222222222f222222f.
    .f222222f22222222222222f222222f.
    .f222222f22222222222222f222222f.
    .f222222f22222222222222f222222f.
    ff222222f22222222222222f222222ff
    f2222222f22222222222222f2222222f
    f2222222f22222222222222f2222222f
    f226666666666666666666666666622f
    .f6666666666666666666666666666f.
    .f6666666666666666666666666666f.
    .f6666666666666666666666666666f.
    .f66ffffffffffffffffffffffff66f.
    2f6f222222222222222222222222f6f2
    .f6f222222222222222222222222f6f.
    .f6f222222222222222222222222f6f.
    .f6f222222222222222222222222f6f.
    .f6f222222222222222222222222f6f.
    .f6f222222222222222222222222f6f.
    .f2222222222222222222222222222f.
    .f2222222222222222222222222222f.
    .f2222222222222222222222222222f.
    .f222f22222222222222222222f222f.
    f2222f22222222222222222222f2222f
    f2222f22222222222222222222f2222f
    f2222f22222222222222222222f2222f
    f2222f22222222222222222222f2222f
    f2222f22222222222222222222f2222f
    f2222f22222222222222222222f2222f
    f2222f22222222222222222222f2222f
    f2222f22222222222222222222f2222f
    f2222f22222222222222222222f2222f
    f2222f22222222222222222222f2222f
    f2222f22222222222222222222f2222f
    f22222f222222222222222222f22222f
    f222222ffffffffffffffffff222222f
    .f2222222222222222222222222222f.
    ..f22222222222222222222222222f..
    ...f222222222222222222222222f...
    ....ffffffffffffffffffffffff....
`, SpriteKind.Player)
car.z = 1
controller.moveSprite(car)
car.setPosition(128,0)
let poziceY = 4015

//Vytvoreni Cile
let finish = sprites.create(assets.image`finish`, 40)
finish.setPosition(128, 50)

//Vytvoreni Zivotu
info.setLife(3)
info.life()

//Vytvoreni Mapy
tiles.setTilemap(tilemap`level1`)
scene.cameraFollowSprite(car)
scene.centerCameraAt(0, -100)

//Ovladaní auta
game.onUpdate(function() {
    car.y = poziceY
    poziceY = poziceY-2
    scene.centerCameraAt(car.x, car.y-26)
})

//Spawn Prekazek
game.onUpdateInterval(1000, function() {

    let rnd = randint(1, 3)
       
    if(rnd == 1){
        let kuzel =sprites.create(assets.image`kuzel0`, 10)
        kuzel.setPosition(randint(5.5, 10.5)*16, car.y - 150)
    }  

    if(rnd == 2){
        let opicka =sprites.create(assets.image`opicka`, 20)
        opicka.setPosition(randint(5.5, 10.5)*16, car.y - 150)
    } 

    if(rnd == 3){
        let kamen =sprites.create(assets.image`kamen`, 30)
        kamen.setPosition(randint(5.5, 10.5)*16, car.y - 150)       
    } 
})


//Animace Prekazek
 sprites.onOverlap(SpriteKind.Player, 10, function(sprite: Sprite, otherSprite: Sprite) {
        otherSprite.setImage(assets.image`crashkuzel`)
        otherSprite.setKind(11)
        music.bigCrash.play()
        info.changeLifeBy(-1)
        scene.cameraShake()
        
    })

 sprites.onOverlap(SpriteKind.Player, 20, function(sprite: Sprite, otherSprite: Sprite) {
        otherSprite.setImage(assets.image`crashOpicka`)
        otherSprite.setKind(21)
        music.bigCrash.play()
        info.changeLifeBy(-2)
        scene.cameraShake()
    })


 sprites.onOverlap(SpriteKind.Player, 30, function(sprite: Sprite, otherSprite: Sprite) {
        otherSprite.setImage(assets.image`crashKamen`)
        otherSprite.setKind(31)
        music.bigCrash.play()
        info.changeLifeBy(-1)
        scene.cameraShake()
    })

 sprites.onOverlap(SpriteKind.Player, 40, function(sprite: Sprite, otherSprite: Sprite) {
        game.over(true)
    })



    



