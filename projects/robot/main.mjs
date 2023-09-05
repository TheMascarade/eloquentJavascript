import * as robot from "./modules/robot.mjs"

function compareRobots() {
  const LIMIT = 100;
  let superiorRobotAc = 0, randomRobotAc = 0, routeRobotAc = 0, goalOrientedRobotAc = 0;

  for (let i = 0; i < LIMIT; i++) {
    let state = robot.VillageState.random();
    superiorRobotAc += robot.runRobot(state, robot.superiorRobot, []);
    randomRobotAc += robot.runRobot(state, robot.randomRobot);
    routeRobotAc += robot.runRobot(state, robot.routeRobot, []);
    goalOrientedRobotAc += robot.runRobot(state, robot.goalOrientedRobot, []);
  }
  console.log("Average for random robot :", randomRobotAc / LIMIT);
  console.log("Average for route robot :", routeRobotAc / LIMIT);
  console.log("Average for superior robot :", superiorRobotAc / LIMIT);
  console.log("Average for goal robot :", goalOrientedRobotAc / LIMIT);
}

robot.runRobot(robot.VillageState.random(), robot.superiorRobot, [])
