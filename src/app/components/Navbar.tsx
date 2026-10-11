"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast,Bounce } from "react-toastify";
import { ArrowRightFromSquare,ChevronDown } from "@gravity-ui/icons";
import { Avatar, Dropdown, Label } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  const handleSignOut = async () => {
    await authClient.signOut();
    toast.success("সফলভাবে সাইন আউট হয়েছে!",{
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

  return (
    <nav className="w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-3 py-2 sm:px-4 sm:py-3 flex items-center justify-between gap-2">
        <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-3">
          <div className="bg-green-600 w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-xl flex items-center justify-center shadow">
            <Image
              src="/logo-icon.png"
              alt="bazar-dor logo"
              width={26}
              height={26}
              className="brightness-0 invert w-5 h-5 sm:w-[26px] sm:h-[26px]"
            />
          </div>
          <div className="min-w-0">
            <h1 className="text-lg sm:text-2xl font-bold leading-tight">
              বাজার দর
            </h1>
            <p className="truncate text-[11px] sm:text-sm text-gray-500">
              {date}
            </p>
          </div>
        </Link>

        <div className="flex shrink-0 items-center gap-1 sm:gap-4">
          {isPending ? (
            <div className="h-10 w-10" />
          ) : user ? (
            <Dropdown>
              <Dropdown.Trigger className="flex items-center gap-2 py-1 pl-1 pr-3">
                <Avatar size="sm">
                  {user?.image && (
                    <Avatar.Image alt={user.name} src={user?.image} />
                  )}
                  <Avatar.Fallback delayMs={600}>
                    {user.name?.charAt(0).toUpperCase()}
                  </Avatar.Fallback>
                </Avatar>
                <span className="hidden text-sm font-semibold text-gray-900 sm:block">
                  {user.name}
                </span>
                <ChevronDown className="size-4.5 text-gray-500 hover:bg-gray-100 border-none" />
              </Dropdown.Trigger>
              <Dropdown.Popover>
                <div className="px-3 pt-3 pb-1">
                  <div className="flex items-center gap-2">
                  
                    <div className="flex min-w-0 flex-col gap-0">
                      <p className="truncate text-sm leading-5 font-medium">
                        {user.name}
                      </p>
                      <p className="truncate text-xs leading-none text-muted">
                        {user.email}
                      </p>
                    </div>
                  </div>
                </div>
                <Dropdown.Menu>
                  <Dropdown.Item id="profile" textValue="আমার প্রোফাইল">
                    <Link href="/profile">
                      <div className="flex w-full items-center justify-between gap-2">
                        <Label>আমার প্রোফাইল</Label>
                      </div>
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item
                    id="logout"
                    textValue="সাইন আউট"
                    variant="danger"
                    onAction={() => handleSignOut()}
                  >
                    <div className="flex w-full items-center justify-between gap-2">
                      <Label>সাইন আউট</Label>
                      <ArrowRightFromSquare className="size-3.5 text-danger" />
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Popover>
            </Dropdown>
          ) : (
            <>
              <Link
                href="/sign-in"
                className="whitespace-nowrap text-sm sm:text-base font-bold hover:bg-gray-200 hover:border-gray-400 px-3 py-2 sm:px-5 sm:py-3 rounded-xl"
              >
                সাইন ইন
              </Link>
              <Link
                href="/sign-up"
                className="whitespace-nowrap text-sm sm:text-base bg-green-600 hover:bg-green-800 text-white border rounded-xl px-3 py-2 sm:px-5 sm:py-3 font-bold"
              >
                সাইন আপ
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
