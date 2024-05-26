// pages/hustle-house.js

import Link from 'next/link';

export default function Zentweet() {
  return (
    <main>
      <div className="p-6 bg-white rounded-lg">
        <h1 className="mb-4 text-2xl font-bold text-gray-800">ZenTweet</h1>
        <p className="mb-4 text-gray-600">
            open-source extension forcing you to use twitter only to post.
        </p>
        <p className="mb-4 text-gray-600">
            waiting for chrome store approval.
        </p>
        <p className="mb-4 text-gray-600">
            <a className='text-blue-500 hover:underline' href="https://github.com/Tig-ranK/zentweet">source code</a>
        </p>
        <Link href="/" className="text-blue-500 hover:underline">
          &#x2190; 
        </Link>
      </div>
    </main>
  );
}