import Head from 'next/head'
import Image from 'next/image'
import { GetServerSideProps } from "next";
import styles from '../styles/Home.module.css'
import Header from "../components/Header";
import {getSession} from "next-auth/react";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";

export default function Home({ session }: any) {
  if (!session) return (
    <Login />
  )

  return (
    <div>
      <Head>
        <title>Facebook</title>
        <meta name="description" content="Facebook 2.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      <main className={"flex"}>
        {/* Sidebar */}
        <Sidebar/>
        {/* Feed */}
        <Feed />
        {/* Widgets */}
      </main>

      <footer>
      </footer>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Get the user
  const session = await getSession(context)

  return {
    props: {
      session
    }
  }
}