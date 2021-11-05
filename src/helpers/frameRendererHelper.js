import {getBlueCarSprite, getGrassSprite, getWaterSprite, getRoadSprite, getBushSprite, getFinishSprite, getYellowCarSprite, getGreenCarSprite} from "../helpers/spriteHelper";

export function drawGame(ctx, backgroundHeight, lanes) {
    const img = document.getElementById("sprites")
    const laneHeight = 80
    drawBackground()
    drawLanes()

    function drawLanes() {
        lanes.current.forEach((lane)=>{
            lane.enemies.forEach((enemy)=>{
                let getSpritFn; 
                switch(enemy.type) {
                    case "blueCar":
                        getSpritFn = getBlueCarSprite;
                        break;
                    case "yellowCar":
                        getSpritFn = getYellowCarSprite;
                        break;
                    case "greenCar":
                        getSpritFn = getGreenCarSprite;
                        break;
                    default:
                        break;
                }

                drawCar(lane.position, enemy.x, getSpritFn)
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

    function drawCar(lane, x, getSpritFn) {
        const numberOfLanes = 9
        let blueCar = getSpritFn()
        ctx.drawImage(img, blueCar.x, blueCar.y, blueCar.width, blueCar.height, x, (laneHeight * (numberOfLanes - lane)) + (laneHeight - blueCar.height)/2, blueCar.width, blueCar.height)
    }

    function drawBackgroundTile(gridX, lane, getSpritFn) {
        let grass = getSpritFn()
        ctx.drawImage(img, grass.x, grass.y, grass.width, grass.height, 80 * gridX, backgroundHeight - (grass.height * lane), grass.width, grass.height)
    }
}