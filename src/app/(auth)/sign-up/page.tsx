import Link from "next/link";
import Image from "next/image";
import { Button, Form, Input, Label, TextField } from "@heroui/react";

export default function SignUp() {
  return (
    <div className="mx-auto w-full max-w-md px-4 py-6 sm:py-10">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          অ্যাকাউন্ট তৈরি করুন
        </h1>
        <p className="mt-2 text-sm text-gray-600">
          বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
        </p>
      </div>

      <div className="mt-5 rounded-3xl border border-gray-200 bg-white/80 p-4 sm:mt-6 sm:p-6">
        <Form className="flex flex-col gap-4">
          <TextField name="name" type="text" isRequired>
            <Label className="text-sm font-semibold text-gray-900">নাম</Label>
            <Input placeholder="আপনার নাম..." className="w-full rounded-lg bg-white" />
          </TextField>

          <TextField name="email" type="email" isRequired>
            <Label className="text-sm font-semibold text-gray-900">ইমেইল</Label>
            <Input placeholder="...@gmail.com" className="w-full rounded-lg bg-white" />
          </TextField>

          <TextField name="password" type="password" isRequired>
            <Label className="text-sm font-semibold text-gray-900">পাসওয়ার্ড</Label>
            <Input placeholder="কমপক্ষে ৮ অক্ষর" className="w-full rounded-lg bg-white" />
          </TextField>

          <TextField name="confirm" type="password" isRequired>
            <Label className="text-sm font-semibold text-gray-900">পাসওয়ার্ড নিশ্চিত করুন</Label>
            <Input placeholder="আবার লিখুন" className="w-full rounded-lg bg-white" />
          </TextField>

          <Button
            type="submit"
            className="w-full rounded-lg bg-green-600 font-bold text-white shadow-md hover:bg-green-700"
          >
            অ্যাকাউন্ট তৈরি করুন
          </Button>
        </Form>

        <div className="my-5 flex items-center gap-3">
          <span className="h-px flex-1 bg-gray-200" />
          <span className="text-xs text-gray-500">অথবা</span>
          <span className="h-px flex-1 bg-gray-200" />
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Button
            type="button"
            className="flex h-auto min-h-10 w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-center text-xs font-semibold text-gray-900 sm:text-sm"
          >
            <Image src="/google-icon-logo.svg" alt="" width={16} height={16} />
            Google দিয়ে চালিয়ে যান
          </Button>
          <Button
            type="button"
            className="flex h-auto min-h-10 w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-center text-xs font-semibold text-gray-900 sm:text-sm"
          >
            <Image src="/github-brands.svg" alt="" width={16} height={16} />
            GitHub দিয়ে চালিয়ে যান
          </Button>
        </div>

        <p className="mt-5 text-center text-sm text-gray-600">
          অ্যাকাউন্ট আছে?{" "}
          <Link href="/sign-in" className="font-medium text-green-700 hover:underline">
            সাইন ইন করুন
          </Link>
        </p>
      </div>

      <p className="mt-6 text-center text-sm text-gray-500">
        <Link href="/" className="hover:text-green-700">
          ← হোম পেজে ফিরে যান
        </Link>
      </p>
    </div>
  );
}