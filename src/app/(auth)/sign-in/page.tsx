"use client";
import { FormEvent, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast, Bounce } from "react-toastify";
import { Button, Form, Input, Label, TextField } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

export default function SignIn() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as Record<string,string>;

    setLoading(true);
    const { error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
    });
    setLoading(false);

    if (error) {
      toast.error("সাইন ইন করা যায়নি। আবার চেষ্টা করুন।", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }

    toast.success("সফলভাবে সাইন ইন হয়েছে!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    router.push("/");
    router.refresh();
  };

  const handleGoogleSignIn = async () => {
    const { error } = await authClient.signIn.social({
      provider: "google",
    });
    if (error) {
      toast.error("Google দিয়ে সাইন ইন করা যায়নি।", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  const handleGithubSignIn = async () => {
    const { error } = await authClient.signIn.social({
      provider: "github",
    });
    if (error) {
      toast.error("GitHub দিয়ে সাইন ইন করা যায়নি।", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <div className="mx-auto w-full max-w-md px-4 py-6 sm:py-10">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          সাইন ইন
        </h1>
        <p className="mt-2 text-sm text-gray-600">
          বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
        </p>
      </div>

      <div className="mt-5 rounded-3xl border border-gray-200 bg-white/80 p-4 sm:mt-6 sm:p-6">
        <Form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <TextField name="email" type="email" isRequired>
            <Label className="text-sm font-semibold text-gray-900">ইমেইল</Label>
            <Input
              placeholder="...@gmail.com"
              className="w-full rounded-lg bg-white"
            />
          </TextField>

          <TextField name="password" type="password" isRequired>
            <Label className="text-sm font-semibold text-gray-900">
              পাসওয়ার্ড
            </Label>
            <Input
              placeholder="আপনার পাসওয়ার্ড"
              className="w-full rounded-lg bg-white"
            />
          </TextField>

          <Button
            type="submit"
            isDisabled={loading}
            className="w-full rounded-lg bg-green-600 font-bold text-white shadow-md hover:bg-green-700"
          >
            {loading ? "অপেক্ষা করুন..." : "সাইন ইন করুন"}
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
            onPress={handleGoogleSignIn}
            className="flex h-auto min-h-10 w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-center text-xs font-semibold text-gray-900 sm:text-sm"
          >
            <Image src="/google-icon-logo.svg" alt="" width={16} height={16} />
            Google দিয়ে চালিয়ে যান
          </Button>
          <Button
            type="button"
            onPress={handleGithubSignIn}
            className="flex h-auto min-h-10 w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-center text-xs font-semibold text-gray-900 sm:text-sm"
          >
            <Image src="/github-brands.svg" alt="" width={16} height={16} />
            GitHub দিয়ে চালিয়ে যান
          </Button>
        </div>

        <p className="mt-5 text-center text-sm text-gray-600">
          অ্যাকাউন্ট নেই?{" "}
          <Link
            href="/sign-up"
            className="font-medium text-green-700 hover:underline"
          >
            সাইন আপ করুন
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
