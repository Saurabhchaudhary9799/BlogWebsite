const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    blogs: [{ type: mongoose.Schema.Types.ObjectId, ref: "blog" }],
  },
  { timestamps: true }
);

// userSchema.methods.matchPassword = async function (enterpassword) {
//   return await bcrypt.compare(enterpassword, this.password);
// };

// userSchema.pre("save", async function (next) {
//   if (this.isModified("password")) {
//     next();
//   }

//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
// });

const User = mongoose.model("user", userSchema);

module.exports = User;
