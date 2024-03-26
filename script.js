/**
 * Represents the position and direction of the rover.
 * @type {{x: number, y: number, direction: string}}
 */

let roverPosition = {
    x: 4,
    y: 2,
    direction: 'EAST'
}


// F B L R


console.log(roverPosition); // Logging the initial moves 

/**
 * Moves the rover one unit forward in the direction it's currently facing.
 */

function moveForward() {
    switch (roverPosition.direction) {
        case 'NORTH':
            roverPosition.y++;
            break;
        case 'SOUTH':
            roverPosition.y--;
            break;
        case 'EAST':
            roverPosition.x++;
            break;
        case 'WEST':
            roverPosition.x--;
            break;
        default:
            // alert('Invalid Direction')
            // No default action is documented since it's an alert for invalid direction which is not typical for server-side or node environments

            break;
    }
}

/**
 * Moves the rover one unit backward opposite to the direction it's currently facing.
 */

function moveBackward() {
    switch (roverPosition.direction) {
        case 'NORTH':
            roverPosition.y--;
            break;
        case 'SOUTH':
            roverPosition.y++;
            break;
        case 'EAST':
            roverPosition.x--;
            break;
        case 'WEST':
            roverPosition.x++;
            break;
        default:
            // alert('Invalid Direction')
            break;
    }
}


/**
 * Rotates the rover 90 degrees to the left without changing its position.
 */

function rotateLeft() {
    switch (roverPosition.direction) {
        case 'NORTH':
            roverPosition.direction = 'WEST';
            break;
        case 'SOUTH':
            roverPosition.direction = 'EAST';
            break;
        case 'EAST':
            roverPosition.direction = 'NORTH';
            break;
        case 'WEST':
            roverPosition.direction = 'SOUTH';
            break;
        default:
            // alert('Invalid Direction')
            break;
    }
}


/**
 * Rotates the rover 90 degrees to the right without changing its position.
 */

function rotateRight() {
    switch (roverPosition.direction) {
        case 'NORTH':
            roverPosition.direction = 'EAST';
            break;
        case 'SOUTH':
            roverPosition.direction = 'WEST';
            break;
        case 'EAST':
            roverPosition.direction = 'SOUTH';
            break;
        case 'WEST':
            roverPosition.direction = 'NORTH';
            break;
        default:
            break;
    }
}


/**
 * Executes a sequence of commands for the rover movement and rotation.
 * @param {string} commands - A string consisting of 'F', 'B', 'L', 'R' representing Forward, Backward, Left, and Right respectively.
 */

function executeCommands(commands) {
    for (let i = 0; i < commands.length; i++) {
        const command = commands[i];
        switch (command) {
            case 'F':
                moveForward();
                break;
            case 'B':
                moveBackward();
                break;
            case 'L':
                rotateLeft();
                break;
            case 'R':
                rotateRight();
                break;
            default:
                break;
        }
    }
}

// [[1,4], [3,5], [7,4]]



/**
 * Validates the user-input commands and processes them if valid. Alerts if invalid commands are present or if the rover encounters an obstacle.
 */


let userInput = window.prompt('Enter the coordinates for the robot')
let commands = userInput;

function validateMoves() {
    const obstacles = [[1, 4], [3, 5], [7, 4]]
    for (let i = 0; i < commands.length; i++) {
        const validCommands = ['R', 'L', 'B', 'F']

        if (!validCommands.includes(commands[i])) {
            alert('Invalid Keys please provide the right ones')
            return;
        }
    }

    executeCommands(commands);

    for (let i = 0; i < obstacles.length; i++) {
        if (roverPosition.x === obstacles[i][0] && roverPosition.y === obstacles[i][1]) {
            alert(`Stopped due to collision : (${roverPosition.x} ${roverPosition.y}) ${roverPosition.direction} `);
            return;
        }
    }



    console.log()
    alert(`The rover position now is : (${roverPosition.x} , ${roverPosition.y}) ${roverPosition.direction}`);
}
validateMoves();






























