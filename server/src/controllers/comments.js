// Import the comments model
import { getComments, createComment } from '../models/comment.js'

async function getCommentList(req, res) {
  const { imdb_id } = req.query
  // console.log('Comments controller', imdb_id) // always printing shit to check

  // call the getCommentList fn from the comments model
  const comments = await getComments({ imdb_id })

  // send them to the front, instead of dummy comments
  res.status(200).json({ comments: comments })
}

async function postComment(req, res) {
  const { imdb_id, comment, created_at } = req.body
  req.uid = 1 // testing while authentication is bypassed

  // console.log(req.body)
  // console.log(imdb_id, comment)

  const savedComment = await createComment({
    user_id: req.uid, // testing
    imdb_id: imdb_id,
    comment: comment
  })
  // const comments = await getComments({ imdb_id })

  // send new created comment to the front, to update UI
  res.status(200).json({ comment: savedComment })
}

export { getCommentList, postComment }
