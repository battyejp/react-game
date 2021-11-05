import {getBlueCarSprite, getGrassSprite, getWaterSprite, getRoadSprite, getBushSprite, getFinishSprite} from "../helpers/spriteHelper";

export function drawGame(ctx, backgroundHeight, lanes) {
    const img = document.getElementById("sprites");
    drawBackground()
    drawLanes(lanes)

    function drawLanes(lanes) {
        lanes.current.forEach((lane)=>{
            lane.enemies.forEach((enemy)=>{
                drawCar(lane.id, enemy.x)
            })
        })
    }

    function drawBackground() {
        let width = 80;
        let height = 80;
        for (let i = 0; i < 11; i++) {
            // ctx.drawImage(img, 137, 158, width, height, width * i, backgroundHeight - width, width, height)
            drawGrass(i, 1)
            ctx.drawImage(img, 318, 158, width, height, width * i, backgroundHeight - (width * 2), width, height)
            ctx.drawImage(img, 318, 158, width, height, width * i, backgroundHeight - (width * 3), width, height)
            ctx.drawImage(img, 318, 158, width, height, width * i, backgroundHeight - (width * 4), width, height)
            ctx.drawImage(img, 137, 158, width, height, width * i, backgroundHeight - (width * 5), width, height)
            ctx.drawImage(img, 228, 158, width, height, width * i, backgroundHeight - (width * 6), width, height)
            ctx.drawImage(img, 228, 158, width, height, width * i, backgroundHeight - (width * 7), width, height)
            ctx.drawImage(img, 228, 158, width, height, width * i, backgroundHeight - (width * 8), width, height)

            if (i % 2 === 0)
                ctx.drawImage(img, 409, 158, width, height, width * i, backgroundHeight - (width * 9), width, height)
            else
                ctx.drawImage(img, 499, 158, width, height, width * i, backgroundHeight - (width * 9), width, height)
        }
    }

    function drawCar(lane, x) {
        const laneHeight = 80
        const numberOfLanes = 9
        let blueCar = getBlueCarSprite()
        ctx.drawImage(img, blueCar.x, blueCar.y, blueCar.width, blueCar.height, x, (laneHeight * (numberOfLanes - lane)) + (laneHeight - blueCar.height)/2, blueCar.width, blueCar.height)
    }

    function drawGrass(gridX, lane) {
        const laneHeight = 80
        const numberOfLanes = 9
        let grass = getGrassSprite()
        ctx.drawImage(img, grass.x, grass.y, 80, 80, 80 * gridX, 720 - 80, 80, 80)
        //ctx.drawImage(img, grass.x, grass.y, grass.width, grass.height, gridX, (laneHeight * (numberOfLanes - lane)) + (laneHeight - grass.height)/2, grass.width, grass.height)
    }
}