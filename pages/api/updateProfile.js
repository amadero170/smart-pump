import { setUsers } from "../../lib/users";
import getUsers from "../../lib/users";

export default async (req, res) => {
  const {
    age,
    _id,
    eyeColor,
    company,
    phone,
    address,
    picture,
    firstName,
    lastName,
  } = JSON.parse(req.body);

  // await getUser

  const users = await getUsers();

  // get object of user to be updated
  const user = users.find((u) => u._id === _id) || { error: "Not found" };

  const userUpdated = {
    _id: _id,
    age: age,
    eyeColor: eyeColor,
    company: company,
    phone: phone,
    address: address,
    picture: picture,
    name: { first: firstName, last: lastName },
  };

  await setUsers(users, userUpdated);
  const ID = { ID: _id };
  res.status(200).json(ID);
};
