import Image from "next/image"

const BenefitsSection = () => {
    return (
        <section className="relative flex flex-col items-center justify-center py-10 px-6 bg-black overflow-hidden">

            <div className="px-4 py-2 border border-gray-700 rounded-md bg-zinc-900">
                <h2 className="text-gray-300 text-sm font-medium">Benefits</h2>
            </div>

            {/* Header section */}
            <div className="flex flex-col items-center justify-center max-w-4xl mt-6 mb-16 relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white text-center leading-tight">
                    The Key Benefits of AI for Your Business Growth
                </h2>
                <p className="text-gray-400 text-lg mt-6 text-center max-w-2xl">
                    Discover how AI automation enhances efficiency, reduces costs, and drives business growth with smarter, faster processes.
                </p>
            </div>

            {/* Cards Section */}
            <div className="flex flex-col items-center justify-center py-6 gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                    <div className="border border-zinc-900 rounded-lg p-6 w-[400px] relative overflow-hidden">
                        <Image
                            className="py-1"
                            src="/icons/thuder.svg"
                            alt="Productivity"
                            width={25}
                            height={25}
                        />
                        <h2 className="text-white text-xl font-medium">Increased Productivity</h2>
                        <p className="w-[300px] text-purple-200 mt-2">Gain actionable insights with AI-driven analytics to improve decision-making and strategy.</p>
                        <div className="bg-purple-500 blur-xl w-[300px] h-2 rounded-full absolute bottom-5 left-9"></div>
                    </div>

                    <div className="border border-zinc-900 rounded-lg p-6 w-[400px] relative overflow-hidden">
                        <Image
                            className="py-1"
                            src="/icons/hand-shake.svg"
                            alt="CustomerExperience"
                            width={25}
                            height={25}
                        />
                        <h2 className="text-white text-xl font-medium">Better Customer Experience</h2>
                        <p className="w-[300px] text-purple-200 mt-2">Personalized AI interactions improve response times, customer engagement, and overall satisfaction.</p>
                        <div className="bg-purple-500 blur-xl w-[300px] h-2 rounded-full absolute bottom-5 left-9"></div>
                    </div>

                    <div className="border border-zinc-900 rounded-lg p-6 w-[400px] relative overflow-hidden">
                        <Image
                            className="py-1"
                            src="/icons/timer.svg"
                            alt="Timer"
                            width={20}
                            height={20}
                        />
                        <h2 className="text-white text-xl font-medium">24/7 Availability</h2>
                        <p className="w-[300px] text-purple-200 mt-2">AI-powered systems operate around the clock, ensuring seamless support and execution without downtime.</p>
                        <div className="bg-purple-500 blur-xl w-[300px] h-2 rounded-full absolute bottom-5 left-9"></div>
                    </div>
                

                <div className="border border-zinc-900 rounded-lg p-6 w-[400px] relative overflow-hidden">
                    <Image
                        className="py-1"
                        src="/icons/circle-dollar.svg"
                        alt="Productivity"
                        width={25}
                        height={25}
                    />
                    <h2 className="text-white text-xl font-medium">Cost Reduction</h2>
                    <p className="w-[300px] text-purple-200 mt-2">AI automation minimizes manual work, cuts operational costs, and optimizes resource allocation for better profitability.</p>
                    <div className="bg-purple-500 blur-xl w-[300px] h-2 rounded-full absolute bottom-5 left-9"></div>
                </div>

                <div className="border border-zinc-900 rounded-lg p-6 w-[400px] relative overflow-hidden">
                    <Image
                        className="py-1"
                        src="/icons/piechart.svg"
                        alt="CustomerExperience"
                        width={25}
                        height={25}
                    />
                    <h2 className="text-white text-xl font-medium">Data-Driven Insights</h2>
                    <p className="w-[300px] text-purple-200 mt-2">Leverage AI to analyze vast data sets, identify trends, and make smarter, faster, and more accurate business decisions.</p>
                    <div className="bg-purple-500 blur-xl w-[300px] h-2 rounded-full absolute bottom-5 left-9"></div>
                </div>

                <div className="border border-zinc-900 rounded-lg p-6 w-[400px] relative overflow-hidden">
                    <Image
                        className="py-1"
                        src="/icons/barchart.svg"
                        alt="Timer"
                        width={25}
                        height={25}
                    />
                    <h2 className="text-white text-xl font-medium">Scalability & Growth</h2>
                    <p className="w-[300px] text-purple-200 mt-2">AI adapts to your business needs, allowing you to scale efficiently without increasing workload or costs.</p>
                    <div className="bg-purple-500 blur-xl w-[300px] h-2 rounded-full absolute bottom-5 left-9"></div>
                </div>
                </div>
            </div>

        </section>
    )
}

export default BenefitsSection
