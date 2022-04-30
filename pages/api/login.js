import getUsers from "../../lib/users";

export default async (req, res) => {
  const { username, password } = JSON.parse(req.body);

  const users = await getUsers();
  console.log(users);
  const user = users.find(
    (u) => u.email === username && u.password === password
  ) || { error: "Not found" };

  res.status(200).json(user);
};
