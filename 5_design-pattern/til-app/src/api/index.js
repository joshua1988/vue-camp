import axios from "axios";

// TODO: 9시 10분까지 휴식

const instance = axios.create({
  // 개발용
  baseURL: process.env.VUE_APP_DEV_URL // http://localhost:3000/
  // 배포용
  // baseURL: "http://localhost:9090/dev"
  // // QA용
  // baseURL: "http://localhost:8080/"
});

function registerUser(userData) {
  return instance.post("signup", userData);
}

export { registerUser };
