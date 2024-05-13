import proofilePic from './assets/img-1.jpg'

function Card() {
    return(
        <div className="card">
            <img className='card-image' src={proofilePic} alt="profile picture" />
            <h2 className='card-title'>Abel code</h2>
            <p className='card-text'>I make a beautiful websites by using besic three,bootstrap and react apps😍</p>
        </div>
    )
}

export default Card