/*This is the main page (home page ) */
'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

const Home = () => {
  const router = useRouter();

  /*We can create a function  */
  const nevigate = (page) => {
    router.push(page)/// specify the page (page is a parameter) the we want to nevigate to
  }

  return (
    <section>
      <h1>useRouter</h1>
      <button onClick={() => nevigate("/about")}>
        Go to the about page
      </button>
    </section>
    /*This will lead to the about page  */
  );
};

export default Home;
