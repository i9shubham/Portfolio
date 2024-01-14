import Navbar from '../Components/Navbar';
import './home.css';
import shubham from '../images/ishubham.jpg';
import Typewriter from 'typewriter-effect';

const Home = () => {
    return (
        <>
            <Navbar />

            <div id='home'>
                <div className='pc'>
                    {/* <h1>Hi 👋,</h1>
                    <h1>my name is</h1> */}
                    <h1 className='heading'>Shubham Ingole</h1>
                    <h2 className='flex role'>
                        <span>
                            <Typewriter
                                options={{
                                    loop: true,
                                    autoStart: true,
                                    skipAddStyles: true,
                                }}
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString('Software Engineer')
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString('Fullstack Developer')
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString('Problem Solver')
                                        .pauseFor(1000)
                                        .start();
                                }}
                            />
                        </span>
                    </h2>
                </div>
                <div className='mobile'>
                    <h1 className='heading'>Shubham Ingole</h1>
                    <h2 className='flex role'>
                        <span>
                            <Typewriter
                                options={{
                                    loop: true,
                                    autoStart: true,
                                    skipAddStyles: true,
                                }}
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString('Software Engineer')
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString('Fullstack Developer')
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString('Problem Solver')
                                        .pauseFor(1000)
                                        .start();
                                }}
                            />
                        </span>
                    </h2>
                </div>
                <div className='profile-img'>
                    <img src={shubham} alt='Shubham Ingole' />
                </div>
            </div>
        </>
    );
};
export default Home;
