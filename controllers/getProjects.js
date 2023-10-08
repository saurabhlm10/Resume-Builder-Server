const { getOutputs } = require("../commons/output");
const projectsOutputs = require("../commons/projectsOutputs");

exports.getProjects = async (req, res) => {
  try {
    // const outputs = getOutputs(3, projectsOutputs);
    const outputs = [projectsOutputs[0]]

    res.status(200).json({
      outputs,
    });
  } catch (error) {
    console.log(error);

    if (error instanceof Error) {
      res.send(error.message);
    }
  }
};
