const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("mongoose connected"))
  .catch((e) => console.log(e.message));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const user = mongoose.model("user", userSchema);

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      console.log(req.body.email, req.body.email);
      const createdUser = await user.create({
        name: req.body.name,
        email: req.body.email,
      });
      res.json(createdUser);
      break;
  }
}
