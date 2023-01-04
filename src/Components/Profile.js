import shubham  from './images/profile.jpg'
import './Profile.css'


const Profile = ()=>{
    return(
        <>
            <div className="profile">
                <div>
                    <img alt="" src={shubham} />
                </div>
                <div className='intro'>
                    <h1>
                        Hi, I am <span className='name'>Shubham</span>
                    </h1>
                    <p>
                    Hey there, Myself Shubham Ingole.<br /> I am a 3rd year student pursuing Bachelors of Engineering in computer engineering.<br /> I am proficient in MERN stack and C++. 
                    </p>
                </div>
            </div>
        </>
    );
}
export default Profile;