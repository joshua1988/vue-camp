"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _schemaOptions = _interopRequireDefault(require("./schemaOptions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Schema는 모델의 스키마
// 데이터 테이블의 칼럼 및 필드 정의
const userSchema = new _mongoose.default.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    maxlength: 50
  },
  password: {
    type: String,
    required: true
  },
  nickname: String,
  insertedDate: {
    type: Date,
    default: Date.now
  }
}, _schemaOptions.default); // 정의한 Schema로 인스턴스를 생성하고
// model에 연결해주면 MongoDB의 Document라고 하는 실제 데이터 테이블과 연결되어 조작할 수 있다.

const UserModel = _mongoose.default.model('Users', userSchema);

var _default = UserModel;
exports.default = _default;