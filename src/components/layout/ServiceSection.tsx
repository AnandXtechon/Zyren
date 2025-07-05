import Image from "next/image"

const ServiceSection = () => {
    return (
        <section className="relative flex flex-col items-center justify-center py-20 px-6 bg-black overflow-hidden">
            {/* Grid background pattern */}
            {/* <div className="absolute inset-0 opacity-40">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: "100px 100px",
                    }}>
                </div>
            </div> */}

            {/* Our Services badge */}

            <div className="px-4 py-2 border border-gray-700 rounded-md bg-zinc-900">
                <h2 className="text-gray-300 text-sm font-medium">Our Services</h2>
            </div>


            {/* Header section */}
            <div className="flex flex-col items-center justify-center max-w-4xl mt-6 mb-16 relative z-10">
                <h1 className="text-4xl md:text-5xl font-bold text-white text-center leading-tight">
                    AI Solutions That Take Your Business to the Next Level
                </h1>
                <p className="text-gray-400 text-lg mt-6 text-center max-w-2xl">
                    We design, develop, and implement automation tools that help you work smarter, not harder
                </p>
            </div>

            {/* Main content area   1*/}
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-7xl w-full relative z-10 my-10">
                {/* Left side - Image placeholder */}
                <div className="flex-1 max-w-lg">
                    <div className="bg-zinc-900/50 border border-gray-800 rounded-xl p-6 backdrop-blur-sm h-[400px] flex items-center justify-center">
                        {/* Add your image here from assets folder */}
                        <Image
                        className="rounded-xl"
                        src="/images/dashboard.jpg"
                        alt="Dashboard"
                        width={500}
                        height={500}
                        />
                    </div>
                </div>

                {/* Right side - Workflow Automation */}
                <div className="flex-1 max-w-lg">
                    <div className="mb-2">
                        <div className="inline-block px-3 py-2 bg-zinc-900 border border-gray-700 rounded-md mb-6">
                            <span className="text-gray-300 text-sm font-medium">Workflow Automation</span>
                        </div>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-normal text-white leading-tight">Automate repetitive tasks</h2>

                    <p className="text-gray-400 text-[17px] my-2 leading-relaxed">
                        We help you streamline internal operations by automating manual workflows like data entry, reporting, and
                        approval chains saving time and cutting down errors.
                    </p>

                    <div className="flex gap-4 mt-4">
                        <div className="px-4 py-2 bg-zinc-900 border border-gray-700 rounded-md">
                            <span className="text-gray-300 text-sm font-medium">Internal Task Bots</span>
                        </div>
                        <div className="px-4 py-2 bg-zinc-900 border border-gray-700 rounded-md">
                            <span className="text-gray-300 text-sm font-medium">100+ Automations</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main content area  2*/}
            <div className="flex flex-col-reverse  md:flex-row items-center justify-center gap-12 max-w-7xl w-full relative z-10 my-10">

                {/* Right side - Workflow Automation */}
                <div className="flex-1 max-w-lg">
                    <div className="mb-2">
                        <div className="inline-block px-3 py-2 bg-zinc-900 border border-gray-700 rounded-md mb-2">
                            <span className="text-gray-300 text-sm font-medium">AI Assitant</span>
                        </div>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-normal text-white leading-tight">Delegate Daily Tasks</h2>

                    <p className="text-gray-400 text-[17px] my-2 leading-relaxed">
                        From managing calendars to drafting emails and summarizing meetings,
                        our AI assistants work around the clock to keep your business running smarter and faster.
                    </p>

                    <div className="flex gap-4 mt-4">
                        <div className="px-4 py-2 bg-zinc-900 border border-gray-700 rounded-md">
                            <span className="text-gray-300 text-sm font-medium">Summaries</span>
                        </div>
                        <div className="px-4 py-2 bg-zinc-900 border border-gray-700 rounded-md">
                            <span className="text-gray-300 text-sm font-medium">Scheduling</span>
                        </div>
                        <div className="px-4 py-2 bg-zinc-900 border border-gray-700 rounded-md">
                            <span className="text-gray-300 text-sm font-medium">Many More</span>
                        </div>
                    </div>
                </div>

                {/* Left side - Image placeholder */}
                <div className="flex-1 max-w-lg">
                    <div className="bg-zinc-900/50 border border-gray-800 rounded-xl p-6 backdrop-blur-sm h-[400px] flex items-center justify-center">
                        {/* Add your image here from assets folder */}
                        <Image
                        className="rounded-xl"
                        src="/images/dashboard.jpg"
                        alt="Dashboard"
                        width={500}
                        height={500}
                        />
                    </div>
                </div>
            </div>


            {/* Main content area  3*/}
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-7xl w-full relative z-10 my-10">+

                {/* Left side - Image placeholder */}
                <div className="flex-1 max-w-lg">
                    <div className="bg-zinc-900/50 border border-gray-800 rounded-xl p-6 backdrop-blur-sm h-[400px] flex items-center justify-center">
                        {/* Add your image here from assets folder */}
                        <Image
                        className="rounded-xl"
                        src="/images/dashboard.jpg"
                        alt="Dashboard"
                        width={500}
                        height={500}
                        />
                    </div>
                </div>

                {/* Right side - Workflow Automation */}
                <div className="flex-1 max-w-lg">
                    <div className="mb-2">
                        <div className="inline-block px-3 py-2 bg-zinc-900 border border-gray-700 rounded-md mb-6">
                            <span className="text-gray-300 text-sm font-medium">Sales & Marketing</span>
                        </div>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-normal text-white leading-tight">Accelerate Sales Growth</h2>

                    <p className="text-gray-400 text-[17px] my-2 leading-relaxed">
                        AI tools for lead generation, personalized outreach, and automated content creation
                        that scales your sales efforts and builds stronger brand presence.
                    </p>

                    <div className="flex gap-4 mt-4">
                        <div className="px-4 py-2 bg-zinc-900 border border-gray-700 rounded-md">
                            <span className="text-gray-300 text-sm font-medium">Leads</span>
                        </div>
                        <div className="px-4 py-2 bg-zinc-900 border border-gray-700 rounded-md">
                            <span className="text-gray-300 text-sm font-medium">Content</span>
                        </div>
                        <div className="px-4 py-2 bg-zinc-900 border border-gray-700 rounded-md">
                            <span className="text-gray-300 text-sm font-medium">Social Post</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main content area  4*/}
            <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-12 max-w-7xl w-full relative z-10 my-10">

                {/* Right side - Workflow Automation */}
                <div className="flex-1 max-w-lg">
                    <div className="mb-2">
                        <div className="inline-block px-3 py-2 bg-zinc-900 border border-gray-700 rounded-md mb-6">
                            <span className="text-gray-300 text-sm font-medium">Custom Projects</span>
                        </div>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-normal text-white leading-tight">Build Smarter Systems</h2>

                    <p className="text-gray-400 text-[17px] my-2 leading-relaxed">
                        Whether you are starting from scratch or enhancing an existing system,
                        we offer strategic consulting and develop custom AI projects aligned with your unique goals.
                    </p>

                    <div className="flex gap-4 mt-4">
                        <div className="px-4 py-2 bg-zinc-900 border border-gray-700 rounded-md">
                            <span className="text-gray-300 text-sm font-medium">Strategy</span>
                        </div>
                        <div className="px-4 py-2 bg-zinc-900 border border-gray-700 rounded-md">
                            <span className="text-gray-300 text-sm font-medium">Custom AI</span>
                        </div>
                        <div className="px-4 py-2 bg-zinc-900 border border-gray-700 rounded-md">
                            <span className="text-gray-300 text-sm font-medium">Consulting</span>
                        </div>
                    </div>
                </div>

                {/* Left side - Image placeholder */}
                <div className="flex-1 max-w-lg">
                    <div className="bg-zinc-900/50 border border-gray-800 rounded-xl p-6 backdrop-blur-sm h-[400px] flex items-center justify-center">
                        {/* Add your image here from assets folder */}
                        <Image
                        className="rounded-xl"
                        src="/images/dashboard.jpg"
                        alt="Dashboard"
                        width={500}
                        height={500}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceSection
