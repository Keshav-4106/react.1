 import profilepic from '../../assets/ksv.png';
 import '../../Project/Card/Card.css';

function Card(){
return(

    <div className="card">
        <img className='card-image' src={profilepic} alt="profile picture" />
        <h2 className='card-title'>Keshav Code</h2>
        <p className='card-text'>I am a Frontend and Backend Developer</p>
    </div>
);

}
export default Card