import Maze from "./maze.js";
// import { PATH_STR, readPathStr } from "./path.js";

let maze;

function resetMaze() {
  maze = new Maze({
    row_count: 10,
    col_count: 10,
    cell_size: 20,
    // startCell: { row: ~~random(0, 5), col: ~~random(0, 5) },
    // finishCell: { row: ~~random(15, 20), col: ~~random(15, 20) },
  });
  // maze.makePath(readPathStr(PATH_STR.C));
  // maze.makePathFromText("ab", 1);
  maze.generateMaze_DFS({
    sleepTime: 1,
  });
}


class MazeWidget {
  constructor() {
    this.startMaze();
    // this.drawCircle()
  }
  // drawCircle = () => {
  //   window.setup = () => {
  //     createCanvas(400, 400)
  //   }
  //  window.draw = () => {
  //     background(220);
  //     ellipse(50,50,80,80)
  //   }
  // }

  startMaze = () => {
    window.setup = () => {
      createCanvas(200, 200);
      resetMaze();
    };

    window.draw = () => {
      background(220);
      maze.draw();
    };

    window.keyPressed = () => {
      if (keyCode == 13) {
        resetMaze();
      }
    };
  }

}

// export default () => {
//   new MazeWidget()
// }


new MazeWidget()