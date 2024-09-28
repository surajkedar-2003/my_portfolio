
const Navbar = () => {
  return (
    <nav className="w-full p-5 fixed top-0 z-10 bg-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Suraj Kedar</h1>
        <ul className="flex gap-6 space-x-6 text-xl cursor-pointer">
            <li><a href="#home" className="hover:text-cyan-400">Home</a></li>  
            <li><a href="#about" className="hover:text-cyan-400">About</a></li>
            <li><a href="#skills" className="hover:text-cyan-400">Skills</a></li>
            <li><a href="#project" className="hover:text-cyan-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
