// libs
import { Router } from 'express';
// modules
import PostModel from '../models/PostModel.js';

// router init
const router = Router();

router.post('/', async (req, res) => {
  try {
    const doc = await PostModel.create({ ...req.body, createdBy: req.user._id });
    res.status(201).json({ data: doc });
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: 'sth wrong', error });
  }
});

router.get('/', async (req, res) => {
  try {
    const docs = await PostModel
      .find({
        createdBy: req.user._id,
      })
      .lean()
      .exec();

    res.status(200).json({
      posts: docs,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'sth wrong', error });
  }
});

export default router;