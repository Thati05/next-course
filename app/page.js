import React from 'react';
import Image from 'next/image';

const Hello = () => {
  return (
    <div>
      Hello
      <Image
        width={100}
        height={100}
        src='https://images.unsplash.com/photo-1592818868295-f527dbac420d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt='Abba'
      />
    </div>
  );
};

export default Hello;
