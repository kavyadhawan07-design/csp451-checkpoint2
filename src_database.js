// Fake database module
const users = [
{id: 1, name: 'Alice', email: 'alice@mail.com'},
{id: 2, name: 'Bob', email: 'bob@mail.com'}
];
export function getUserById(id) {
 return users.find(user => user.id === id);
}
