import { FC } from 'react';
import Link from 'next/link';

const Home: FC = () => {
  return (
    <div className='w-full md:w-1/4 p-4'>
      <h1>Pepe Project - Home</h1>
      <p>Welcome to the homepage</p>
      <Link href="/Polizas">Go to About Page</Link>
      <br />
      <Link href="/blog/123">Go to Blog Post 123</Link>
    </div>
  );
};

export default Home;