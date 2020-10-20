
const router = require('express').Router();
//import Comment module 
const { Comment } = require('../../models');
//import auth.js
const withAuth = require('../../utils/auth');

//create new post comment 
router.post('/', withAuth, (req, res) => {

    Comment.create({ ...req.body, user_Id: req.session.user_Id })
      .then(commentData => {res.json(commentData);})
      .catch(err => {
        res.status(500).json(err);
      });
  });

  module.exports = router;