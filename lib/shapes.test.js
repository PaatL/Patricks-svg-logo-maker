const { Circle } = require("./shapes");

describe("Circle Tests", () => {
  test("will this return the text", () => {
    const newCircle = new Circle("x", "y", "z");
    expect(newCircle.text).toEqual("x");
  });

  test("will this return the shape color", () => {
    const newCircle = new Circle("x", "y", "z");
    expect(newCircle.shapeColor).toEqual("z");
  });

  test("will the render method return the svg", () => {
    const newCircle = new Circle("x", "y", "z");
    expect(newCircle.render()).toEqual(`
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        
          <circle cx="150" cy="100" r="80" fill="z" />
        
          <text x="150" y="125" font-size="60" text-anchor="middle" fill="y">x</text>
        
        </svg>`);
  });
});
