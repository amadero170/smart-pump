import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function editProfile({ user }) {
  const [age, setAge] = useState();
  const [eyeColor, setEyeColor] = useState();
  const [company, setCompany] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [picture, setPicture] = useState();
  const [firstName, setFirstName] = useState(user.name.first);
  const [lastName, setLastName] = useState(user.name.last);
  const _id = user._id;
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    updateProfile();
  }

  async function updateProfile() {
    const res = await fetch("/api/updateProfile", {
      method: "POST",
      body: JSON.stringify({
        _id,
        age,
        eyeColor,
        company,
        phone,
        address,
        picture,
        firstName,
        lastName,
      }),
    });

    const response = await res.json("user details updated");
    console.log(response);
  }

  return (
    <div>
      <Head>
        <title>Smart Pump</title>
      </Head>
      <header>
        <h1>Edit Profile</h1>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <div>
            Age:
            <input
              onChange={(event) => setAge(event.target.value)}
              type="text"
              placeholder={user.age}
            />
          </div>
          <div>
            Eye Color:
            <input
              onChange={(event) => setEyeColor(event.target.value)}
              type="text"
              placeholder={user.eyeColor}
            />
          </div>
          <div>
            Company:
            <input
              onChange={(event) => setCompany(event.target.value)}
              type="text"
              placeholder={user.company}
            />
          </div>
          <div>
            Phone:
            <input
              onChange={(event) => setPhone(event.target.value)}
              type="text"
              placeholder={user.phone}
            />
          </div>
          <div>
            Address:
            <input
              onChange={(event) => setAddress(event.target.value)}
              type="text"
              placeholder={user.address}
            />
          </div>
          <div>
            Picture:
            <input
              onChange={(event) => setPicture(event.target.value)}
              type="text"
              placeholder="Paste new picture url"
            />
          </div>
          <div>
            First Name:
            <input
              onChange={(event) => setFirstName(event.target.value)}
              type="text"
              placeholder={user.name.first}
            />
          </div>
          <div>
            Last Name:
            <input
              onChange={(event) => setLastName(event.target.value)}
              type="text"
              placeholder={user.name.last}
            />
          </div>

          <input className="button" type="submit" value="Send" />
        </form>
        {/* {response && <div>{response}</div>} */}
        <div className="button">
          <Link href="/">Home</Link>
        </div>
      </main>
    </div>
  );
}
