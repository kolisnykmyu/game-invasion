module.exports = class Player {
    constructor() {
        this.position = {
            x: 200,
            y: 200,
        };
        this.velocity = {
            x: 0,
            y: 0,
        };

        //this.image =
        this.width = 100;
        this.height = 100;
    }

    render() {
        return 'I DRAW IT';
        // paintContext.fillStyle = 'red';
        // paintContext.fillRect(
        //     this.position.x,
        //     this.position.y,
        //     this.width,
        //     this.height
        //);
    }
};
