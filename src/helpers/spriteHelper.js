function getCar1() {
    return { x: 0, y: 480, width: 145, height: 75 };
  }
  function otherFunction(arg) {
    console.error(arg);
  }
  
  module.exports = {
    getCar1: getCar1,
    otherFunction: otherFunction,
  };