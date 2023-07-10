function One() {
    return <>

        <nav className="px-4 py-4 text-white bg-emerald-950">
            <ul className="flex">
                <li className="mx-4">Home</li>
                <li className="mx-4">About</li>
                <li className="mx-4">Contact</li>
            </ul>
        </nav>

        <h2 className="text-2xl text-center text-red-500 my-[80px]">We can dynamically add variables in tailwind by specifying with square notations</h2>

        <h1 className="my-8 text-4xl text-center text-blue-500">Hello World</h1>

        <div className="hidden bg-yellow-400 text-black text-sm px-2 sm:block sm:bg-green-700 sm:mx-1 lg:bg-red-500 lg:mx-2 lg:text-white lg:text-lg ">
            lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. lorem1 lorem lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. lorem23
            lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. lorem1 lorem lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. lorem23  lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. lorem1 lorem lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. lorem23
        </div>
        <div className="block bg-yellow-400 text-black text-sm px-2 sm:hidden sm:bg-green-700 sm:mx-1 lg:bg-red-500 lg:mx-2 lg:text-white lg:text-lg ">
            display only in smaller screen sizes else it will be hidden
        </div>

        <p className="mt-8 mx-4">We can apply the pseudo effects too by defining them in classes in tailwind css :</p>
        <button className="btn">Button</button>

        <button className="btn hover:bg-teal-500 hover:text-black">New Button</button>

        <p className="text-10xl">Defining my own font size by modifying the config file</p>
    </>
}

export default One;