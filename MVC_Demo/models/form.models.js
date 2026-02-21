//the DB logic:
//models is all about DB/storage logic;
const users = [];

export const addUsers = (user) => {
    users.push(user);
}

export const getUsers = () => {
    return users;
}