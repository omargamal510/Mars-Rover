

let roverPosition = {
    x: 4,
    y: 2,
    direction: 'EAST'
}


// F B L R


console.log(roverPosition);

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
            break;
    }
}


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






























