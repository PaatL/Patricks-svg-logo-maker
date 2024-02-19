//require inquirer, path
const inquirer = require("inquirer");
const { writeFile } = require("fs/promises");
const { Circle, Triangle, Square } = require("./lib/shapes");

inquirer
  .prompt([
    //ask for input of 3 letters of text
    {
      type: "input",
      name: "text",
      message: "Please enter text (maximum 3 characters)",
    },
    //ask for text color
    {
      type: "input",
      name: "textColor",
      message: "Please enter your color choice for the text",
    },
    //ask for shape
    {
      type: "list",
      choices: ["Circle", "Triangle", "Square"],
      name: "shape",
      message: "Please select which shape to render",
    },
    //ask for shape color
    {
      type: "input",
      name: "shapeColor",
      message: "Please enter your color choice for the shape",
    },
  ])
  .then((answers) => {
    //collect responses
    console.log(answers);
    let renderShape;
    if (answers.shape === "Circle") {
      renderShape = new Circle(
        answers.text,
        answers.textColor,
        answers.shapeColor
      );
    } else if (answers.shape === "Triangle") {
      renderShape = new Triangle(
        answers.text,
        answers.textColor,
        answers.shapeColor
      );
    } else {
      renderShape = new Square(
        answers.text,
        answers.textColor,
        answers.shapeColor
      );
    }
    writeFile("logo.svg", renderShape.render(), (err) =>
      err ? console.log(err) : console.log("created svg")
    );
    //render shape
    //make svg file
  });
