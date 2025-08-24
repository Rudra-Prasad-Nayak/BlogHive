import { Router } from 'express';
import {
  addComment,
  getCommentsForPost,
  listPendingComments,
  moderateComment,
  deleteComment
} from '../controllers/commentController.js';
import { protect, restrictTo } from '../middlewares/authMiddleware.js';

const router = Router();

// Public: get approved comments for a post
router.get('/post/:postId', getCommentsForPost);

// Authenticated: add a comment
router.post('/', protect, addComment);

// Admin/Editor: list & moderate
router.get('/pending', protect, restrictTo('editor', 'admin'), listPendingComments);
router.put('/:id/moderate', protect, restrictTo('editor', 'admin'), moderateComment);
router.delete('/:id', protect, restrictTo('editor', 'admin'), deleteComment);

export default router;
