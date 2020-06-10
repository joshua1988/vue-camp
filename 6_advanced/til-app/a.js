import axios from 'axios';

// 이 함수는 사용자를 하나 생성하는 함수입니다

/**
 * @typedef User
 * @property {string} username 사용자 이름
 * @property {number} password 비밀 번호
 */

/**
 *
 * @param {User} userData 사용자 생성에 필요한 데이터(username, password)
 */
function createUser(userData) {
  return axios.post('users/1', userData);
}

createUser();
