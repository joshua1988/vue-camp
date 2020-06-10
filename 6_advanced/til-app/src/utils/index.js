function getToken() {
  const token = localStorage.getItem('til-token');
  return token;
}

export { getToken };
