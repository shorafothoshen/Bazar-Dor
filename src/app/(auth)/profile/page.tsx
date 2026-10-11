"use client";
import { FiLogOut } from "react-icons/fi";
import { Button, Form, Input, Label, TextField } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { toast, Bounce } from "react-toastify";
import Image from "next/image";

const Profile = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as Record<
      string,
      string
    >;

    setLoading(true);
    const { error } = await authClient.updateUser({
      name: data.name,
    });
    setLoading(false);

    if (error) {
      toast.error("নাম আপডেট করা যায়নি। আবার চেষ্টা করুন।", {
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
    toast.success("নাম সফলভাবে আপডেট হয়েছে!", {
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
    router.refresh();
  };
  const handleSignOut = async () => {
    await authClient.signOut();
    toast.success("সফলভাবে সাইন আউট হয়েছে!", {
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

  if (isPending) {
    return (
      <div className="mx-auto w-full max-w-2xl animate-pulse px-4 py-6 sm:py-10">
        <div className="h-8 w-44 rounded bg-gray-200" />
        <div className="mt-2 h-4 w-64 rounded bg-gray-200" />
        <div className="mt-6 h-28 rounded-3xl bg-gray-200" />
        <div className="mt-4 h-52 rounded-3xl bg-gray-200" />
      </div>
    );
  }

  if (!user)
    return (
      <p className="py-20 text-center text-gray-600">
        তথ্য খুঁজে পাওয়া যায়নি
      </p>
    );

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-6 sm:py-10">
      <div className="text-center sm:text-left">
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          আমার প্রোফাইল
        </h1>
        <p className="mt-1 text-sm text-gray-600">
          আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
        </p>
      </div>
      <div className="mt-5 flex flex-col gap-4 rounded-3xl border border-gray-200 bg-white/80 p-4 sm:mt-6 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div className="flex min-w-0 items-center gap-4">
          {user.image ? (
            <Image
              src={user.image}
              alt={user.name}
              width={96}
              height={96}
              className="h-14 w-14 shrink-0 rounded-2xl object-cover sm:h-16 sm:w-16"
            />
          ) : (
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-green-600 text-xl font-bold text-white sm:h-16 sm:w-16">
              {user?.name?.charAt(0).toUpperCase()}
            </div>
          )}

          <div className="min-w-0">
            <p className="truncate text-lg font-semibold text-gray-900">
              {user.name}
            </p>
            <p className="truncate text-sm text-gray-600">{user.email}</p>
          </div>
        </div>

        <Button
          onPress={handleSignOut}
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-lg border border-red-500 bg-white px-4 text-sm font-semibold text-red-600 hover:bg-red-50 sm:w-auto"
        >
          <FiLogOut className="size-4" />
          সাইন আউট
        </Button>
      </div>

      <div className="mt-4 rounded-3xl border border-gray-200 bg-white/80 p-4 sm:p-6">
        <h2 className="text-base font-bold text-gray-900 sm:text-lg">তথ্য</h2>

        <Form
          key={user.id}
          onSubmit={handleSubmit}
          className="mt-4 flex flex-col px-6 gap-4 sm:mt-6"
        >
          <TextField
            name="name"
            type="text"
            defaultValue={user.name}
            isRequired
          >
            <Label className="text-sm font-semibold text-gray-900">নাম</Label>
            <Input
              placeholder="আপনার নাম..."
              className="w-full rounded-lg bg-white"
            />
          </TextField>

          <Button
            type="submit"
            isDisabled={loading}
            className="w-full rounded-lg bg-green-600 font-bold text-white shadow-md hover:bg-green-700"
          >
            {loading ? "অপেক্ষা করুন..." : "আপডেট"}
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Profile;
