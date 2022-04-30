import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home({ user }) {
  const router = useRouter();

  useEffect(() => {
    !user && router.push("/login");
  }, []);

  return (
    <div>
      <Head>
        <title>Smart Pump</title>
      </Head>
      <header>
        <div className="image-container">
          <img className="logo" alt="Smart Pump logo" src="/logo.png" />
        </div>
      </header>
      <main>
        {!user ? (
          <div></div>
        ) : (
          <>
            <div className="center">{`Hello ${user.name.first}!`}</div>
            <div className="center">Profile details:</div>
            <ul>
              <li>
                Picture:
                <div className="image-container">
                  <img
                    src={user.picture}
                    alt={`Profile Picture of ${user.name.first} ${user.name.last} not found`}
                  />
                </div>
              </li>
              <li>Age: {user.age}</li>
              <li>Eye Color: {user.eyeColor}</li>
              <li>Company: {user.company}</li>
              <li>Phone: {user.phone}</li>
              <li>Email: {user.email}</li>
              <li>Adress: {user.address}</li>
            </ul>

            <div className="button center">
              <Link
                href="/balance"
                style={{ color: "white", textDecoration: "none" }}
              >
                Check Balance
              </Link>
            </div>
            <div className="button center">
              <Link
                href="/editProfile"
                style={{ color: "white", textDecoration: "none" }}
              >
                Update Profile information
              </Link>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
