
export function updatePositions(lanes, size) {
    lanes.current.forEach((lane)=>{
        lane.enemies.forEach((enemy)=>{
            enemy.x+=lane.speed

            if (enemy.x > size.width)
                enemy.x = 0 - enemy.width
        })
    })
}