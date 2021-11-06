import {getBlueCarSprite, getGrassSprite, getWaterSprite, getRoadSprite, getBushSprite, getFinishSprite, getYellowCarSprite, getGreenCarSprite} from "../helpers/spriteHelper";

export function drawGame(ctx, backgroundHeight, lanes) {
    const img = document.getElementById("sprites")
    const laneHeight = 80
    drawBackground()
    drawLanes()

    function drawLanes() {
        lanes.current.forEach((lane)=>{
            lane.enemies.forEach((enemy)=>{
                let carSprite;
                switch(enemy.type) {
                    case "blueCar":
                        carSprite = getBlueCarSprite()
                        break;
                    case "yellowCar":
                        carSprite = getYellowCarSprite()
                        break;
                    case "greenCar":
                        carSprite = getGreenCarSprite()
                        break;
                    default:
                        break;
                }
                enemy.width = carSprite.width
                drawCar(lane.position, enemy.x, carSprite)
            })
        })
    }

    function drawBackground() {
        for (let i = 0; i < 11; i++) {
            drawBackgroundTile(i, 1, getGrassSprite)
            drawBackgroundTile(i, 2, getRoadSprite)
            drawBackgroundTile(i, 3, getRoadSprite)
            drawBackgroundTile(i, 4, getRoadSprite)
            drawBackgroundTile(i, 5, getGrassSprite)
            drawBackgroundTile(i, 6, getWaterSprite)
            drawBackgroundTile(i, 7, getWaterSprite)
            drawBackgroundTile(i, 8, getWaterSprite)

            if (i % 2 === 0)
                drawBackgroundTile(i, 9, getBushSprite)
            else
                drawBackgroundTile(i, 9, getFinishSprite)
        }
    }

    function drawCar(lane, x, carSprite) {
        const numberOfLanes = 9
        ctx.drawImage(img, carSprite.x, carSprite.y, carSprite.width, carSprite.height, x, (laneHeight * (numberOfLanes - lane)) + (laneHeight - carSprite.height)/2, carSprite.width, carSprite.height)
    }

    function drawBackgroundTile(gridX, lane, getSpritFn) {
        let grass = getSpritFn()
        ctx.drawImage(img, grass.x, grass.y, grass.width, grass.height, 80 * gridX, backgroundHeight - (grass.height * lane), grass.width, grass.height)
    }
}