const getOutputs = (numberOfOutputs, outputs) => {
  const returnOutputs = [];

  function indexCalculator() {
    return Math.floor(Math.random() * outputs.length);
  }

  let index = indexCalculator();

  for (let i = 0; i < numberOfOutputs; i++) {
    while (returnOutputs.includes(outputs[index])) {
      index = indexCalculator();
    }

    returnOutputs.push(outputs[index]);
  }

  return returnOutputs;
};

module.exports = {
  getOutputs,
};
