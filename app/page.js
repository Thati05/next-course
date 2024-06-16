import React from 'react';
import Image from 'next/image';
import { Roboto } from 'next/font/google';

const roboto = Roboto({ subsets: ['latin'], weight: '500' });

const Hello = () => {


  return (
    <section>
      <div>
        <h1>
          Google fonts
        </h1>
        <p className={roboto.className}>Hey, this is roboto font</p>
      </div>

      <div>
        Hello
        <Image
          width={100}
          height={100}
          src='https://images.unsplash.com/photo-1592818868295-f527dbac420d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='Abba'
        />

      </div>

    </section>


  );
};

export default Hello;
