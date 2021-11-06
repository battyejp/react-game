import {getBlueCarSprite, getGrassSprite, getWaterSprite, getRoadSprite, 
    getBushSprite, getFinishSprite, getYellowCarSprite, getGreenCarSprite,
    getSmallLogSprite, getMediumLogSprite, getLargeLogSprite, getLillyPadSprite} from "../helpers/spriteHelper";

export function drawGame(ctx, backgroundHeight, lanes) {
    const img = document.getElementById("sprites")
    const laneHeight = 80
    drawBackground()
    drawLanes()

    function drawLanes() {
        lanes.current.forEach((lane)=>{
            lane.enemies.forEach((enemy)=>{
                let sprite;
                switch(enemy.type) {
                    case "blueCar":
                        sprite = getBlueCarSprite()
                        break;
                    case "yellowCar":
                        sprite = getYellowCarSprite()
                        break;
                    case "greenCar":
                        sprite = getGreenCarSprite()
                        break;
                    case "smallLog":
                        sprite = getSmallLogSprite()
                        break;
                    case "mediumLog":
                        sprite = getMediumLogSprite()
                        break;
                    case "largeLog":
                        sprite = getLargeLogSprite()
                        break;
                    case "lillyPad":
                        sprite = getLillyPadSprite()
                        break;
                    default:
                        break;
                }
                enemy.width = sprite.width
                drawLaneSprite(lane.position, enemy.x, sprite)
            })
        })
    }

    function drawBackground() {
        for (let i = 0; i < 11; i++) {
            drawBackgroundTile(i, 1, getGrassSprite())
            drawBackgroundTile(i, 2, getRoadSprite())
            drawBackgroundTile(i, 3, getRoadSprite())
            drawBackgroundTile(i, 4, getRoadSprite())
            drawBackgroundTile(i, 5, getGrassSprite())
            drawBackgroundTile(i, 6, getWaterSprite())
            drawBackgroundTile(i, 7, getWaterSprite())
            drawBackgroundTile(i, 8, getWaterSprite())

            if (i % 2 === 0)
                drawBackgroundTile(i, 9, getBushSprite())
            else
                drawBackgroundTile(i, 9, getFinishSprite())
        }
    }

    function drawLaneSprite(lane, x, sprite) {
        const numberOfLanes = 9
        ctx.drawImage(img, sprite.x, sprite.y, sprite.width, sprite.height, x, (laneHeight * (numberOfLanes - lane)) + (laneHeight - sprite.height)/2, sprite.width, sprite.height)
    }

    function drawBackgroundTile(gridX, lane, sprite) {
        ctx.drawImage(img, sprite.x, sprite.y, sprite.width, sprite.height, 80 * gridX, backgroundHeight - (sprite.height * lane), sprite.width, sprite.height)
    }
}