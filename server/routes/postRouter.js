import { Router } from 'express';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  createPost, getPosts, getPostBySlug, updatePost, deletePost
} from '../controllers/postController.js';
import { protect, restrictTo } from '../middlewares/authMiddleware.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Multer (disk storage) for cover images
const storage = multer.diskStorage({
  destination: path.join(__dirname, '..', 'uploads'),
  filename: (_req, file, cb) => {
    const name = `${Date.now()}-${file.originalname.replace(/\s+/g, '-')}`;
    cb(null, name);
  }
});
const upload = multer({ storage });

const router = Router();

router.get('/', getPosts);
router.get('/:slug', getPostBySlug);

router.post(
  '/',
  protect,
  restrictTo('author', 'editor', 'admin'),
  upload.single('cover'),
  createPost
);

router.put(
  '/:id',
  protect,
  restrictTo('author', 'editor', 'admin'),
  upload.single('cover'),
  updatePost
);

router.delete(
  '/:id',
  protect,
  restrictTo('editor', 'admin'),
  deletePost
);

export default router;
