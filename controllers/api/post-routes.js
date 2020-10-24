const router = require('express').Router();
//import models
const { Post, User, Comment, } = require('../../models/');
const withAuth = require('../../utils/auth');


router.post('/', withAuth, (req, res) => {
    // const body = req.body;
    Post.create({
        title: req.body.title,
        post_url: req.body.post_url,
        user_id: req.session.user_id
        // ...body, user_id: req.session.user_id
    })
    .then(dbPostData => {
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  router.put('/:id', withAuth, (req, res) => {

    Post.update(req.body, { where: {id: req.params.id}})
        .then(updatePostData => {
            if (updatePostData > 0) {
              res.status(200).end();
            } else {
              res.status(404).end();
            }
          })
          .catch(err => {
            res.status(500).json(err);
          });
      });
    
  router.delete('/:id', withAuth, (req, res) => {
    
    Post.destroy({where: {id: req.params.id}})
      .then(deletePostData => {
        if (deletePostData > 0) {
          res.status(200).end();
        } else {
        res.status(404).end();
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  module.exports = router;