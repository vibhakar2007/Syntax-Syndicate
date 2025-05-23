import React from "react";
import Image from "next/image";

export default function Services() {
    return (
    <div className="container flex flex-col gap-2 md:flex-row items-center min-h-[calc(100vh-6rem)]">
        <section className="flex-1">
            <div>
                <div><Image src="/assets/www.jpg" width={206} height={206} alt="Hosting & SEO" className="mx-auto" /></div>
                <div className="flex items-center justify-center mx-auto lg:w-[383px] lg:h-[184px]"><h1 className="text-4xl font-bold text-center">Heading & SEO</h1></div>
                <div className="mx-auto w-[365px] h-[84px] p-2">
                    <p className="text-center text-white/54 text-medium lg:text-xl md:text-base text-xl">We ensure your website is live, optimized for search engines, and ready to reach your audience effectively.</p>
                </div>
            </div>
        </section>
        <section className="flex-1">
            <div>
                <div><Image src="/assets/desktop.png" width={206} height={206} alt="Website Development" className="mx-auto" /></div>
                <div className="flex items-center justify-center mx-auto lg:w-[383px] lg:h-[184px]"><h1 className="text-4xl font-bold text-center">Website Development</h1></div>
                <div className="mx-auto w-[365px] h-[84px] p-2">
                    <p className="text-center text-white/54 text-medium lg:text-xl md:text-base text-xl">We design and build custom websites that are fast, responsive, and built to leave a lasting impact.</p>
                </div>
            </div>
        </section>
        <section className="flex-1">
            <div>
                <div><Image src="/assets/support.png" width={206} height={206} alt="Website Maintainance" className="mx-auto" /></div>
                <div className="flex items-center justify-center mx-auto lg:w-[383px] lg:h-[184px]"><h1 className="text-4xl font-bold text-center">Website Maintainance</h1></div>
                <div className="mx-auto w-[365px] h-[84px] p-2">
                    <p className="text-center text-white/54 text-medium lg:text-xl md:text-base text-xl">We keep your site secure, updated, and running smoothly so you can focus on growing your business.</p>
                </div>
            </div>
        </section>
    </div>)
}