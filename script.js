// class MarsRover {
//     constructor(x, y, direction) {
//         this.x = x;
//         this.y = y;
//         this.direction = direction;
//     }

//     moveForward() {
//         if (this.direction === "NORTH") {
//             this.y++;
//         } else if (this.direction === "SOUTH") {
//             this.y--;
//         } else if (this.direction === "EAST") {
//             this.x++;
//         } else if (this.direction === "WEST") {
//             this.x--;
//         }
//     }

//     moveBackward() {
//         if (this.direction === "NORTH") {
//             this.y--;
//         } else if (this.direction === "SOUTH") {
//             this.y++;
//         } else if (this.direction === "EAST") {
//             this.x--;
//         } else if (this.direction === "WEST") {
//             this.x++;
//         }
//     }

//     rotateLeft() {
//         if (this.direction === "NORTH") {
//             this.direction = "WEST";
//         } else if (this.direction === "SOUTH") {
//             this.direction = "EAST";
//         } else if (this.direction === "EAST") {
//             this.direction = "NORTH";
//         } else if (this.direction === "WEST") {
//             this.direction = "SOUTH";
//         }
//     }

//     rotateRight() {
//         if (this.direction === "NORTH") {
//             this.direction = "EAST";
//         } else if (this.direction === "SOUTH") {
//             this.direction = "WEST";
//         } else if (this.direction === "EAST") {
//             this.direction = "SOUTH";
//         } else if (this.direction === "WEST") {
//             this.direction = "NORTH";
//         }
//     }

//     executeCommands(commandString) {
//         for (const command of commandString) {
//             switch (command) {
//                 case "F":
//                     this.moveForward();
//                     break;
//                 case "B":
//                     this.moveBackward();
//                     break;
//                 case "L":
//                     this.rotateLeft();
//                     break;
//                 case "R":
//                     this.rotateRight();
//                     break;
//                 default:
//                     console.error("Invalid command:", command);
//             }
//         }
//         console.log(`Current position: (${this.x}, ${this.y}) ${this.direction}`);
//     }
// }

// // Example usage:
// const rover = new MarsRover(4, 2, "EAST");

// let result = window.prompt()

// rover.executeCommands(result);







// class User {
//     constructor(id, username, salary) {
//         this.i = id;
//         this.u = username;
//         this.s = salary;
//     }
// }


// let userOne = new User(100, 'omar', 5000);
// console.log(userOne.i);







// =======================================================

/*
Add a book to the catalog.
Remove a book from the catalog.
Find a book by title, author, or ISBN.
Display all books in the catalog.

*/


// class Book {
//     constructor(name, price, author) {
//         this.n = name;
//         this.p = price;
//         this.a = author;
//     }
// }


// let book1 = new Book('Grooking Algorthims', 5000, 'Daniels Viking')

// console.log(book1.n)



// =====================================================================================================================================================================
// Procedural Programming


// const rover = new MarsRover(4, 2, "EAST");

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






























