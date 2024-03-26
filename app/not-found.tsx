import Link from "next/link"

export default function Page404() {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-4xl">404 - Page Not Found</h1>
        <Link href="/" className="mt-4 p-2 underline hover:opacity-75 duration-300 text-xl">
          Go back home
        </Link>
      </div>
    )
  }