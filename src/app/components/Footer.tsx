const Footer = () => {
    return (
        <footer className="w-full border-t border-gray-200 bg-white/70 mt-12">
            <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-2 text-center md:flex-row md:justify-between md:text-left">
                <p className="text-sm text-gray-600">
                    বাজার দর - প্রয়োজনীয় পণ্যের দাম এক নজরে।
                </p>
                <p className="text-sm text-gray-500">
                    সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
                </p>
            </div>
        </footer>
    );
};

export default Footer;