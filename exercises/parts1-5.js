// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
// Part 1: Declare (5) Variables With Type
// let spacecraftName: string = 'Determination';
// let speedMPH: number = 17500;
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
// let milesPerKilometer: number = 0.621
// Part 2: Print Days to Mars
// Code an output statement here (use a template literal):
// Part 3: Create a Function ("getDaysToLocation")
// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
// Part 4: Create a Spacecraft Class
var Spacecraft = /** @class */ (function () {
    function Spacecraft(spacecraftName, spacecraftSpeed) {
        this.milesPerKilometer = 0.621;
        this.name = spacecraftName;
        this.speedMph = spacecraftSpeed;
    }
    Spacecraft.prototype.getDaysToLocation = function (kilometersAway) {
        var milesToLocation = kilometersAway * this.milesPerKilometer;
        var hoursToLocation = milesToLocation / this.speedMph;
        return hoursToLocation / 24;
    };
    return Spacecraft;
}());
// Create an instance of the class here:
var spaceShuttle = new Spacecraft('Determination', 17500);
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
console.log("Number of days for ".concat(spaceShuttle.name, " to reach Mars: ").concat(spaceShuttle.getDaysToLocation(kilometersToMars), "."));
console.log("Number of days for ".concat(spaceShuttle.name, " to reach the Moon: ").concat(spaceShuttle.getDaysToLocation(kilometersToTheMoon), "."));
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
// Add the printDaysToLocation function to the Spacecraft class.
// Paste in the code from step 6 here: