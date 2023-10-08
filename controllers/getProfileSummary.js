const { getOutputs } = require("../commons/output");
const profileSummaryOutputs = require('../commons/profileSummaryOutputs') 

exports.getProfileSummary = async (req, res) => {
  try {
    const outputs = getOutputs(3, profileSummaryOutputs);

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
