let users = [];

const addUser = ({ id, userName, room }) => {
  userName.trim().toLowerCase();
  const userRoom = room;
  const existUser = users.find(
    (user) => user.name === userName && user.room === userRoom
  );
  if (existUser) {
    return { error: "Username is taken" };
  }
  const user = { id, userName, userRoom };
  users.push(user);

  return { user };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};
const getUser = (id) => {
  return users.find((user) => user.userName == id);
};
const getUsersInRoom = (room) => users.filter((user) => user.room === room);
module.exports = { addUser, removeUser, getUser, getUsersInRoom };
