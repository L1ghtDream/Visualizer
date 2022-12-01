export class Canvas {
  element: HTMLCanvasElement;

  constructor(name: string) {
    let element = document.createElement("canvas");
    let parent = document.getElementsByTagName("body")[0];

    element.id = name;
    element.width = window.innerWidth;
    element.height = window.innerHeight;

    parent.appendChild(element)

    this.element = element;
  }

  get2DContext(): CanvasRenderingContext2D {
    return this.element.getContext("2d");
  }

  getWidth(): number {
    return this.element.width;
  }

  getHeight(): number {
    return this.element.height;
  }

  renderBox(x: number, y: number, width: number, height: number, color: string) {
    let context: CanvasRenderingContext2D = this.get2DContext();

    context.beginPath();
    context.fillStyle = color;
    context.fillRect(x, y, width, height);
    context.closePath();
  }

  clear() {
    this.get2DContext().clearRect(0, 0, this.getWidth(), this.getHeight());
  }


}

//canvas.get2DContext().beginPath();
//canvas.get2DContext().rect(50, 50, 50, 50);
//canvas.get2DContext().fillStyle = "#FF0000";
//canvas.get2DContext().fill();
//canvas.get2DContext().fillText("1231231" , 50, 50, 500);
//canvas.get2DContext().closePath();



