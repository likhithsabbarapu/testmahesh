function Navbar({ toggleDarkMode }) {
    return (
        <nav className="flex justify-between items-center p-5 bg-gray-800 text-white fixed w-full top-0 z-50 shadow-lg">
            <h1 className="text-2xl font-bold">Yashwanth Reddy</h1>
            <ul className="flex gap-5">
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#certifications">Certifications</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <button onClick={toggleDarkMode} className="ml-4 bg-gray-600 px-2 py-1 rounded">Toggle Theme</button>
        </nav>
    )
}

export default Navbar;
