const { Schema, Mongoose, default: mongoose } = require("mongoose");
const Blog = require("../models/blogModel");
const User = require("../models/userModel");

const handleCreateBlog = async (req, res) => {
  const { category, title, body, userEmail } = req.body;

  const blogDetails = await Blog.create({
    category,
    title,
    body,
  });

  let objId = new mongoose.Types.ObjectId(blogDetails._id);
  //   console.log(objId);
  await User.updateOne(
    { email: userEmail },
    { $push: { blogs: objId } },
    { upsert: false, new: true }
  );

  if (blogDetails) {
    res.status(201).json({
      id: blogDetails._id,
      category: blogDetails.category,
      title: blogDetails.title,
      body: blogDetails.body,
    });
  } else {
    res.status(400).json({ error: "No submitted" });
  }
};

const handleShowAllBlogs = (req, res) => {
  User.find({}, { blogs: 1, _id: 0 })
    .populate("blogs")
    .then((user) => {
      res.json(user);
    })
    .catch((error) => {
      console.log(error);
    });
};
module.exports = { handleCreateBlog, handleShowAllBlogs };
