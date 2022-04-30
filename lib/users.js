import { Low, JSONFile } from "lowdb";

const adapter = new JSONFile("./data/users.json");
const db = new Low(adapter);

async function getUsers() {
  // Read data from JSON file, this will set db.data content
  await db.read();
  const { users } = db.data;
  return users;
}

async function setUsers(group, ind) {
  const users = await getUsers();

  Object.keys(ind).forEach((key) => ind[key] === undefined && delete ind[key]);

  for (let i = 0; i < users.length; i++) {
    if (users[i]._id === ind._id) {
      users[i] = {
        ...users[i],
        ...ind,
      };
    }
  }

  db.data = { users };
  await db.write();
}

export default getUsers;
export { setUsers };
