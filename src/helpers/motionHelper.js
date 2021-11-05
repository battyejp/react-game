
export function updatePositions(lanes) {
    lanes.current.forEach((lane)=>{
        lane.enemies.forEach((enemy)=>{
            enemy.x+=lane.speed
        })
    })
}