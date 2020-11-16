const router = require("express").Router();
const User = require("../models/user");

router.post("/login", async (req, res) => {
  const user = await User.findOne({
    uid: req.body.uid,
  });

  if (!user) {
    User.create({
      name: req.body.displayName,
      email: req.body.userEmail,
      uid: req.body.uid,
      photoURL: req.body.pic,
    })
      .then((user) => {
        res.send(user);
      })
      .catch((err) => res.send(err.message));
  } else {
    res.send(user);
  }
});

module.exports = router;
