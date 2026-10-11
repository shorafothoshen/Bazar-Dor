import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto w-full max-w-md px-4 py-10 sm:py-16">
      <div className="rounded-3xl border border-gray-200 bg-white/80 p-6 text-center sm:p-8">
        <p className="text-6xl font-extrabold text-green-600 sm:text-7xl">
          ৪০৪
        </p>
        <h1 className="mt-4 text-xl font-bold text-gray-900 sm:text-2xl">
          পেজটি খুঁজে পাওয়া যায়নি
        </h1>
        <p className="mt-2 text-sm text-gray-600">
          আপনি যে পেজটি খুঁজছেন সেটি হয়তো সরানো হয়েছে বা ঠিকানাটি ভুল।
        </p>
        <Link
          href="/"
          className="mt-6 inline-block w-full rounded-lg bg-green-600 px-6 py-3 font-bold text-white shadow-md transition-colors hover:bg-green-700 sm:w-auto"
        >
          হোম পেজে ফিরে যান
        </Link>
      </div>
    </div>
  );
}