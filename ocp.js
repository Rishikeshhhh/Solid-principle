class Shape {
    area() {
      throw new Error("This method should be overridden.");
    }
    volume(){
      throw new Error("This method should be overridden");
    }
  }
  
  class Square extends Shape {
    constructor(side) {
      super();
      this.side = side;
    }
  
    area() {
      return this.side * this.side;
    }
  }
  class Sphere extends Shape{
    constructor(radius){
      super();
      this.radius =  radius;
    }

    volume(){
      return 4/3 * 3.14 * Math.pow (this.radius ,3);
    }
  }
  
  
  const square = new Square(5);

   console.log("Area of the square:", square.area());

   const sphere = new Sphere(6);

   console.log("Volume of Sphere :" , sphere.volume());