import './Navbar.css'

const Navbar = ()=>{
    return(
        <>
            <div className="navbar">
                <div className="logo">
                    Shubham Ingole
                </div>
                <div className="links">
                    <a href="#a">About</a>
                    <a href="#a">Resume</a>
                    <a href="#a">Projects</a>
                    <a href="#a">Contact</a>
                </div>
            </div>
        </>
    )
}

export default Navbar;