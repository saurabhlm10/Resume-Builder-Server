const { getOutputs } = require("../commons/output");
const workExperienceOutputs = require("../commons/workExperienceOutputs");

exports.getWorkExperience = async (req, res) => {
  try {
    const outputs = getOutputs(3, workExperienceOutputs);

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
