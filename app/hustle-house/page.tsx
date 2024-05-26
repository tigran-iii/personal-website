// pages/hustle-house.js

import Link from 'next/link';

export default function HustleHouse() {
  return (
    <main>
      <div className="p-6 bg-white rounded-lg">
        <h1 className="mb-4 text-2xl font-bold text-gray-800">Hustle House</h1>
        <p className="mb-4 text-gray-600">
          a small house hustle focused house. quiet, pretty, and cheap. we're friends with the other cool houses of sf.
        </p>
        <p className="mb-4 text-gray-600">
          website is currently cooking 🥘
        </p>
        
        <p className="mb-4 text-gray-600">
          <a className='text-blue-500 hover:underline' href="https://x.com/tigran_iii/status/1794130740583747615">check this for now 🐦</a>
        </p>
        <p className="mb-4 text-gray-600">
          <a className='text-blue-500 hover:underline' href="https://bento.me/tigran-iii">
            contact
          </a>       
        </p>
        <Link href="/" className="text-blue-500 hover:underline">
          &#x2190; 
        </Link>
      </div>
    </main>
  );
}