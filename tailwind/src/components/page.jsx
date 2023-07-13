import Typed from 'react-typed';

function Page() {
    return <>
        <section className="bg-black text-white w-full flex flex-col justify-center h-screen">
            <div className="flex flex-col justify-center items-center w-4/5 max-w-[600px] text-center m-auto">
                <p className="text-teal-500 uppercase mb-0">Growing with data analytics</p>
                <p className="text-4xl sm:text-6xl md:text-7xl font-bold my-3 sm:my-5">Grow with data.</p>
                <div>
                    <p className="md:text-4xl sm:text-3xl text-xl font-bold mb-2 sm:mb-3">Fast, flexible financing for
                        <span className='text-slate-500 ms-2'>
                            <Typed
                                strings={['BTB', 'BTC', 'SASS']}
                                typeSpeed={100}
                                backSpeed={100}
                                loop
                            />
                        </span>
                    </p>
                </div>
                <p className="text-slate-500 font-semibold mb-6 text-xl">Monitor your data analytics to increase revenue for BTB, BTC and SASS platforms.</p>
                <button className="text-black shadow-sm shadow-teal-200 bg-teal-500 hover:bg-teal-600 py-2 px-4 rounded w-40">Get Started</button>
            </div>
        </section>

        <section className='bg-white grid md:grid-cols-2 py-16 px-8 w-full max-w-[1300px] mx-auto'>
            <div className='flex flex-col justify-center items-center mb-8 md:mb-0'>
                <img src="https://img.freepik.com/free-vector/desktop-computer-vconcept-illustration_114360-12153.jpg" width="350px" />
            </div>
            <div className='flex flex-col justify-center md:justify-start text-black'>
                <p className="text-teal-500 uppercase mb-0 font-semibold">Data analytics dashboard</p>
                <p className='font-bold text-2xl md:text-3xl my-2'>Manage Data Analytics Centrally</p>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                <button type="button" className="bg-black shadow-sm text-teal-500 py-2 px-4 my-5 rounded w-40 mx-auto md:mx-0">Get Started</button>
            </div>
        </section>
        {/* 3 column because text is in 2/3 part and form is in 1/3 part */}
        <section className='bg-black py-16 px-8 mb-24'>
            {/* to give the text 2/3 area colspan it */}
            <div className='max-w-[1240px] w-full grid md:grid-cols-3 mx-auto'>
                <div className='text-white mb-8 md:mb-0 md:col-span-2 '>
                    <p className='font-bold text-3xl md:text-4xl my-3'>Want tips and tricks to customize your flow ?</p>
                    <p className='text-sm my-2'>Sign up to our newsletter and stay up to date.</p>
                </div>
                <div className='flex flex-col justify-start'>
                    <form className='flex flex-col md:flex-row justify-between items-center w-full md:mb-5'>
                        <input type="text" placeholder="Enter your email" className="w-full md:w-2/3 bg-slate-200 text-slate-500 me-3 md:my-0 focus:outline-none focus:bg-slate-300 px-3 py-2 rounded" />
                        <button type="button" className="bg-teal-500 text-black py-2 px-4 rounded w-40 mx-auto my-5 md:mx-0 lg:w-1/3 md:my-0">Notify me</button>
                    </form>
                    <p className='text-white text-sm'>We care about the protection of your data. Read our <span className='text-teal-500 underline underline-offset-4 cursor-pointer'>Privacy Policy</span></p>
                </div>
            </div>
        </section>

        <section className='bg-white py-10 w-full'>
            <div className='mx-auto grid md:grid-cols-3 max-w-[1240px] gap-4'>
                <div className="mb-12 md:mb-0 text-black mx-auto bg-white shadow-xl rounded text-center flex flex-col justify-center items-center w-full max-w-[340px] p-8 px-12 hover:scale-105 duration-300">
                    <img src="" alt="logo" />
                    <p className='font-bold text-3xl mt-6'>Single User</p>
                    <p className='font-bold text-4xl mt-6 mb-3'>$124</p>
                    <p className='font-semibold text-lg border-b-2 py-2 w-full border-slate-200'>500GB Storage</p>
                    <p className='font-semibold text-lg border-b-2 py-2 w-full border-slate-200'>1 Granted User</p>
                    <p className='font-semibold text-lg border-b-2 py-2 w-full border-slate-200'>Send up to 2GB</p>
                    <button className="text-black shadow-sm shadow-teal-200 bg-teal-500 hover:bg-teal-600 py-2 px-4 my-5 rounded w-40">Start Trial</button>
                </div>

                <div className=" mb-12 md:mb-0 text-black m-auto bg-white shadow-xl rounded text-center flex flex-col justify-center items-center w-full max-w-[340px] p-8 px-12 hover:scale-105 duration-300">
                    <img src="" alt="logo" />
                    <p className='font-bold text-3xl mt-6'>Double User</p>
                    <p className='font-bold text-4xl mt-6 mb-3'>$124</p>
                    <p className='font-semibold text-lg border-b-2 py-2 w-full border-slate-200'>500GB Storage</p>
                    <p className='font-semibold text-lg border-b-2 py-2 w-full border-slate-200'>1 Granted User</p>
                    <p className='font-semibold text-lg border-b-2 py-2 w-full border-slate-200'>Send up to 2GB</p>
                    <button className="text-black shadow-sm shadow-teal-200 bg-teal-500 hover:bg-teal-600 py-2 px-4 my-5 rounded w-40">Start Trial</button>
                </div>

                <div className="mb-12 md:mb-0 m-auto text-black bg-white shadow-xl rounded text-center flex flex-col justify-center items-center w-full max-w-[340px] p-8 px-12 hover:scale-105 duration-300">
                    <img src="" alt="logo" />
                    <p className='font-bold text-3xl mt-6'>Single User</p>
                    <p className='font-bold text-4xl mt-6 mb-3'>$154</p>
                    <p className='font-semibold text-lg border-b-2 py-2 w-full border-slate-200'>500GB Storage</p>
                    <p className='font-semibold text-lg border-b-2 py-2 w-full border-slate-200'>1 Granted User</p>
                    <p className='font-semibold text-lg border-b-2 py-2 w-full border-slate-200'>Send up to 2GB</p>
                    <button className="text-black shadow-sm shadow-teal-200 bg-teal-500 hover:bg-teal-600 py-2 px-4 my-5 rounded w-40">Start Trial</button>
                </div>
            </div>
        </section>

    </>
}

export default Page;