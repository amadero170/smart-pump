import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import { useEffect } from "react";

export default function Balance({ user }) {
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Smart Pump</title>
      </Head>
      <header>
        <h1>Balance</h1>
      </header>
      {/* Aca mejor meter un componente que se lleva estas props tipo "BalanceLayout" no? */}
      <main className="center">
        <div>{user && user.balance}</div>
        <div className="button">
          <Link href="/">Home</Link>
        </div>
      </main>
    </div>
  );
}
