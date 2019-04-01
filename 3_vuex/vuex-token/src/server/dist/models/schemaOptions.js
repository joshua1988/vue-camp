"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  // https://mongoosejs.com/docs/guide.html#timestamps
  // createdAt, updatedAt을 할당해주는 스키마 옵션
  timestamps: {
    createdAt: 'created_at'
  }
};
exports.default = _default;