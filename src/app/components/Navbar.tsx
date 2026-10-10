"use client";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <nav className="w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="bg-green-600 w-12 h-12 rounded-xl flex items-center justify-center shadow">
            <Image
              src="/logo-icon.png"
              alt="bazar-dor logo"
              width={26}
              height={26}
              className="brightness-0 invert"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold leading-tight">বাজার দর</h1>
            <p className="text-sm text-gray-500">{date}</p>
          </div>
        </Link>

        <div className="flex items-center gap-4">
          <Link
            href="/sign-in"
            className="font-bold hover:bg-gray-200 hover:border-gray-400 px-5 py-3 rounded-xl"
          >
            সাইন ইন
          </Link>
          <Link
            href="/sign-up"
            className="bg-green-600 hover:bg-green-800 text-white border rounded-xl px-5 py-3 font-bold"
          >
            সাইন আপ
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
