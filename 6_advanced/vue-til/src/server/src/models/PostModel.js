import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50,
  },
  contents: String,
  createdBy: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Users',
    required: true
  },
}, { timestamps: true });

postSchema.index({ Users: 1, title: 1 }, { unique: true });
const PostModel = mongoose.model('Posts', postSchema);

export default PostModel;
