import { Library, Play } from "lucide-react";

export function HeroSection() {
    return (
        <section className="flex flex-col p-4 gap-6 mb-10">
            <h1 className="inline font-bold text-2xl tracking-tighter">
                Best Place to Learn Programming
                <div className="ml-1 inline-block font-semibold text-[18px] border-2 border-black dark:border-white rounded-xl px-3 -rotate-1 tracking-tighter">
                    For Beginners
                </div>
            </h1>
            <p className="tracking-tight">
                <b>Unlock Your Coding</b> Potential Dive into programming with
                the best resources designed for beginners. Whether you want
                interactive lessons, video tutorials, or comprehensive courses,
                find the perfect fit to start your coding journey today.
            </p>

            <div className="flex gap-4">
                <button className="flex items-center border bg-orange-600 px-5 rounded-xl shadow-sm text-white">
                    <Play size={14} className="mr-2" />
                    <span className="font-semibold text-sm">Find Series</span>
                </button>
                <button className="flex items-center border p-2 rounded-xl shadow-sm">
                    <Library className="mr-2" />
                    <span className="font-semibold text-sm">Read Articles</span>
                </button>
            </div>
        </section>
    );
}
