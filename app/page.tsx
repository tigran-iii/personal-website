import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className="p-6 bg-white rounded-lg">
        <p className="mb-4 text-xl font-semibold text-gray-800">
          I often get asked, "<i>what the fuck</i> are you doing with your life?"
        </p>
        <p className="mb-4 text-gray-600">
          This website is meant as a general answer to that question.
        </p>
        <ul>   
          <li className='mb-2'>
            <Link href="/zentweet" className="text-blue-500 hover:underline">
              ZenTweet
            </Link>
          </li>
          <li className='mb-2'>
            <Link href="/hustle-house" className="text-blue-500 hover:underline">
              Hustle House
            </Link>
          </li>
        </ul>   
      </div>
    </main>
  );
}
