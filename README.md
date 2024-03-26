# Mars Rover Project ⭐

Welcome to the Mars Rover Project! This project is a simulation of a Mars Rover that navigates a hypothetical Martian terrain. Developed using procedural programming in JavaScript, this project adheres to the principles of separation of concerns, an essential aspect of the SOLID principles, ensuring that each part of the codebase handles a distinct aspect of the rover's functionality. This approach enhances maintainability, scalability, and understandability of the code.

## Features

* Rover Movement: The Mars Rover can move forward and backward relative to its current direction (North, South, East, West).
* Rover Rotation: The Rover can rotate left (90 degrees counterclockwise) or right (90 degrees clockwise) from its current direction.
* Command Execution: The Rover can execute a series of commands ('F' for forward, 'B' for backward, 'L' for left, and 'R' for right) to navigate the Martian surface.
* Obstacle Detection: The Rover will stop if it encounters an obstacle in its path, ensuring it doesn't jeopardize its mission.
* User Interaction: Users can input command sequences to control the Rover's movement across the Mars surface simulation.

## How It Works

The Mars Rover simulation is built on a grid-based representation of the Martian surface. The Rover's position is represented by a set of coordinates (x, y), and its direction is one of the four cardinal points (N, E, S, W).

The project is structured around several key functions:

* moveForward() and moveBackward(): These functions move the Rover one grid unit in the direction it is currently facing or the opposite direction, respectively.
* rotateLeft() and rotateRight(): These functions change the Rover's direction 90 degrees counterclockwise or clockwise, respectively.
* executeCommands(): This function takes a string of commands and executes them sequentially, altering the Rover's position and direction according to each command.
* validateMoves(): Before executing commands, this function checks their validity and ensures the Rover does not move onto an obstacle.

## Setup and Usage
* Clone the repository to your local machine.
* Open the project in your preferred code editor.
* Load the index.html file in a web browser to start the simulation.
* Use the prompt to enter command sequences for the Rover (e.g., 'FFRBLB')


## Principles and Practices
This project follows procedural programming paradigms and is designed with the separation of concerns in mind:

* Modularity: Each function performs a single responsibility related to the Rover's operation, making the code easier to understand and debug.
* Readability: The code is written with clarity in mind, favoring straightforward logic and naming conventions that make the functionality self-evident.
* Reusability: Functions are designed to be reusable, allowing for potential extensions of the Rover's capabilities without significant modifications to existing code.

## Future Enhancements
* Adding test environment using jest to add more cleaner code 
* Implement a graphical user interface (GUI) to visualize the Rover's movement on Mars.
* Expand the simulation to include more complex terrains and additional obstacles.
* Introduce more advanced commands and behaviors, such as conditional logic and patterned movement.


#### Enjoy navigating the Mars Rover through the challenging terrains of the Red Planet! 👌







