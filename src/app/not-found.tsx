import Link from "next/link";

export default function Page() {

  return <div><div className="h-screen flex flex-col justify-center items-center">
    <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
    <p className="text-lg">The page you are looking for does not exist.</p>
    <Link href="/" className="text-yellow-500 font-bold underline hover:text-yellow-600 transition-colors duration-300">go hme :3</Link>
  </div></div>;
}
