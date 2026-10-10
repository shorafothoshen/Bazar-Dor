import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HeroSection = () => {
    const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });
    return (
         <header className="px-4 py-8">
      <div className="rounded-3xl border border-gray-200 bg-white/70 px-8 py-12 md:px-16 grid md:grid-cols-2 items-center gap-8">
        <div>
          <p className="inline-block rounded-full bg-green-100 text-green-700 text-sm font-medium px-4 py-1.5">
            {date}
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            আজকের বাজারের দাম এক নজরে
          </h1>

          <p className="mt-4 text-gray-600 leading-relaxed max-w-xl">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম - বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>

          <Link
            href="/products"
            className="mt-6 inline-block rounded-lg bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 shadow-md transition-colors"
          >
            সব পণ্য দেখুন
          </Link>
        </div>

        <div className="flex justify-center md:justify-end">
         <Image src='/bazar-hero.png' alt="bazar-hero image" width={500} height={500} className="w-64 md:w-80 h-auto"/>
        </div>
      </div>
    </header>
    );
};

export default HeroSection;