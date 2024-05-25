import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className="p-6 bg-white rounded-lg">
        <p className="mb-4 text-lg font-semibold text-gray-800">
          I often get asked, what the fuck are you doing with your life?
        </p>
        <p className="mb-4 text-gray-600">
          This website is meant as a general answer to that question.
        </p>
        <p className="mb-4 text-gray-600">
          More to come soon.
        </p>
        <h2 className="mb-4 text-xl font-bold">Projects 👇</h2>
        <Link href="/projects/zentweet" className="text-blue-500 hover:underline">
          ZenTweet
        </Link>
      </div>
    </main>
  );
}
