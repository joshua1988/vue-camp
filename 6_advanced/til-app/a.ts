import axios from 'axios';

interface User {
  username: string;
  password: number;
}

type UserResponse = {
  user: string;
};

function createUser(userData: User): Promise<UserResponse> {
  return axios.post('users/1', userData);
}

createUser({
  username: 'abc@abc.com',
  password: 100
})
  .then(response => {
    response.
  })
  .catch();
