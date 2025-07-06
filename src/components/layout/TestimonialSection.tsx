import Image from "next/image"


const TestimonialSection = () => {
    return (
        <section className="relative flex flex-col items-center justify-center py-10 px-6 bg-black overflow-hidden">

            <div className="px-4 py-2 border border-gray-700 rounded-md bg-zinc-900">
                <h2 className="text-gray-300 text-sm font-medium">Testimonials</h2>
            </div>

            {/* Header section */}
            <div className="flex flex-col items-center justify-center max-w-4xl mt-6 mb-16 relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white text-center leading-tight">
                    Why Businesses Love <br /> Our AI Solutions
                </h2>
                <p className="text-gray-400 text-lg mt-6 text-center max-w-2xl">
                    Real businesses, real results with AI automation.
                </p>
            </div>


            <div className="flex flex-col items-center justify-center py-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="border border-zinc-900 bg-zinc-950 rounded-lg p-6 w-[500px] relative overflow-hidden">
                        <div className="flex space-x-1 mb-2">
                            {[...Array(5)].map((_, index) => (
                                <Image
                                    key={index}
                                    src="/icons/star.svg"
                                    alt="Star"
                                    width={20}
                                    height={20}
                                    className="py-1"
                                />
                            ))}
                        </div>
                        <p className="text-purple-200 mt-2 mb-2">{`"AI automation transformed our operations by eliminating repetitive tasks and improving efficiency. Scaling our workflow has never been easier!"`}</p>
                        <div className="bg-purple-500 blur-2xl w-[300px] h-3 rounded-full absolute bottom-10 right-0"></div>
                       
                        <div className="flex item-start">
                        <Image
                        className="rounded-full mt-3"
                        src="/images/david.webp"
                        alt="David"
                        width={45}
                        height={45}
                        />
                        <div className="flex flex-col items-start justify-center mx-2 mt-2">
                        <h3 className="text-white text-lg font-medium">David Peterson</h3>
                        <span className="text-xs text-zinc-500 font-medium">CEO at TechFlow Solutions</span>
                        </div>
                        </div>
                    </div>

                    {/* Testimonial 2 */}

                    <div className="border border-zinc-900 bg-zinc-950 rounded-lg p-6 w-[500px] relative overflow-hidden">
                        <div className="flex space-x-1 mb-2">
                            {[...Array(5)].map((_, index) => (
                                <Image
                                    key={index}
                                    src="/icons/star.svg"
                                    alt="Star"
                                    width={20}
                                    height={20}
                                    className="py-1"
                                />
                            ))}
                        </div>
                        <p className="text-purple-200 mt-2 mb-2">{`"With AI, we cut manual work and improved accuracy. Our team now focuses on high-impact tasks while automation handles the rest!"`}</p>
                        <div className="bg-purple-500 blur-2xl w-[300px] h-3 rounded-full absolute bottom-10 right-0"></div>
                       
                        <div className="flex item-start">
                        <Image
                        className="rounded-full mt-3"
                        src="/images/james.webp"
                        alt="James"
                        width={45}
                        height={45}
                        />
                        <div className="flex flex-col items-start justify-center mx-2 mt-2">
                        <h3 className="text-white text-lg font-medium">James Carter</h3>
                        <span className="text-xs text-zinc-500 font-medium">Operations Manager at NexaCorp</span>
                        </div>
                        </div>
                    </div>

                    {/* Testimonial 3 */}

                    <div className="border border-zinc-900 bg-zinc-950 rounded-lg p-6 w-[500px] relative overflow-hidden">
                        <div className="flex space-x-1 mb-2">
                            {[...Array(5)].map((_, index) => (
                                <Image
                                    key={index}
                                    src="/icons/star.svg"
                                    alt="Star"
                                    width={20}
                                    height={20}
                                    className="py-1"
                                />
                            ))}
                        </div>
                        <p className="text-purple-200 mt-2 mb-2">{`"AI-driven insights doubled our sales efficiency. We now engage leads at the right time with smarter, data-backed decisions!"`}</p>
                        <div className="bg-purple-500 blur-2xl w-[300px] h-3 rounded-full absolute bottom-10 right-0"></div>
                       
                        <div className="flex item-start">
                        <Image
                        className="rounded-full mt-3"
                        src="/images/michael.webp"
                        alt="Michael"
                        width={45}
                        height={45}
                        />
                        <div className="flex flex-col items-start justify-center mx-2 mt-2">
                        <h3 className="text-white text-lg font-medium">Charles Martinez</h3>
                        <span className="text-xs text-zinc-500 font-medium">Head of Sales at GrowthPeak</span>
                        </div>
                        </div>
                    </div>

                    {/* Testimonial 4 */}

                    <div className="border border-zinc-900 bg-zinc-950 rounded-lg p-6 w-[500px] relative overflow-hidden">
                        <div className="flex space-x-1 mb-2">
                            {[...Array(5)].map((_, index) => (
                                <Image
                                    key={index}
                                    src="/icons/star.svg"
                                    alt="Star"
                                    width={20}
                                    height={20}
                                    className="py-1"
                                />
                            ))}
                        </div>
                        <p className="text-purple-200 mt-2 mb-2">{`"Customer support is now seamless. Our response time improved drastically, and satisfaction levels are at an all-time high, thanks to xtract"`}</p>
                        <div className="bg-purple-500 blur-2xl w-[300px] h-3 rounded-full absolute bottom-10 right-0"></div>
                       
                        <div className="flex item-start">
                        <Image
                        className="rounded-full mt-3"
                        src="/images/sophia.avif"
                        alt="Emily"
                        width={45}
                        height={45}
                        />
                        <div className="flex flex-col items-start justify-center mx-2 mt-2">
                        <h3 className="text-white text-lg font-medium">Sophia Wong</h3>
                        <span className="text-xs text-zinc-500 font-medium">Customer Success Lead at SupportHive</span>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TestimonialSection
