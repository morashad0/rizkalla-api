const mongoose = require("mongoose");

const departmentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image:{
      type:String
    }
  },
  { timestamps: true }
);

const departmentModel = mongoose.model("departments", departmentSchema);
module.exports = departmentModel;
