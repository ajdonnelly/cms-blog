const router = require("express").Router();
const withAuth = require("../../utils/auth");
const { Comment } = require("../../models/");


router.post("/", withAuth, (req, res) => {
    
  Comment.create({ ...req.body, user_id: req.session.user_id })
    .then(dbCommentData => {
      res.json(dbCommentData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
