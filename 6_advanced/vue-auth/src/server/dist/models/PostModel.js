"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const postSchema = new _mongoose.default.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50
  },
  contents: String,
  createdBy: {
    type: _mongoose.default.SchemaTypes.ObjectId,
    ref: 'Users',
    required: true
  }
}, {
  timestamps: true
});
postSchema.index({
  Users: 1,
  title: 1
}, {
  unique: true
});

const PostModel = _mongoose.default.model('Posts', postSchema);

var _default = PostModel;
exports.default = _default;