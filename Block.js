class Block {
    constructor(alive = false, coords) {
        this.alive = alive;
        this.coords = coords;
        this.neighbors = false;
        this.amountONeighbors;
        this.willLive; 
    }

    checkAlive() {
        if(this.alive) {
            this.alive = false;
        }
        else {
            this.alive = true;
        }
    }

    livingCheckNeighbors() {
        //Any live cell with fewer than two live neighbours dies(underpopulation)
        //Any live cell with two or three live neighbours lives on to the next generation
        //Any live cell with more than three live neighbours dies(overpopulation)
    }

    deadCheckNeighbors() {

        //Any dead cell with exactly three live neighbours becomes a live cell(reproduction)
    }



}



module.exports = Block;

