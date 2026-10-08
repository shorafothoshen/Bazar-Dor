import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    const date = new Date().toLocaleDateString("bn-BD", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    return (
        <>
        <nav className="sticky top-0 z-50 w-full bg-white/90 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
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
                </div>

                <div className="flex items-center gap-4">
                    <Link href="/signin" className="font-bold hover:bg-gray-200 hover:border-gray-400 hover: px-5 py-3 rounded-xl">
                        সাইন ইন
                    </Link>
                    <Link href='' className="bg-green-600 hover:bg-green-800 text-white border rounded-xl px-5 py-3 font-bold" >সাইন আপ</Link>
                </div>
            </div>
        </nav>

        <div className="sticky top-0 z-50 w-full bg-white/90 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 py-3 flex">
                
            </div>
        </div>
        </>

    );
};

export default Navbar;