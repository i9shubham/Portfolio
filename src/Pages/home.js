import Navbar from "../Components/Navbar"
import "./home.css"
import shubham from '../images/profile-pic2.png'

const Home = () => {
    return(
        <>
            <Navbar />
            <div id="home">
                <div className="pc">
                    <h1>Hi 👋,</h1>
                    <h1>my name is</h1>
                    <h1 className="heading">Shubham Ingole</h1>
                    <h1>I am a Fullstack Developer</h1>
                </div>
                <div className="mobile">
                    <h1>Hi 👋, myself</h1>
                    <h1 className="heading">Shubham Ingole</h1>
                    <h1>I am a Fullstack Developer</h1>
                </div>
                <div className="profile-img">
                    <img src={shubham} alt="" />
                </div>
            </div>
        </>
    )
}
export default Home