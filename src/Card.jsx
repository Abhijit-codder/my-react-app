import profile from './assets/profile.jpeg'

function Card()
{
    return(
        <div className="card">
            <h1>Card Components</h1>
            <img className="card-image" src={profile} alt="profile picture" height="100"></img>
            <h2 className="title" >Abhijit</h2>
            <p className="desc" >I am Student of BCA-AI&ML</p>
        </div>
    )

}

export default Card

