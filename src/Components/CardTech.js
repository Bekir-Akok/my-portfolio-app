

const CardTech = (props) => {
    return (
        <div className="card-tech-main">
            <h1>{props.name}</h1>
            <img src={props.source}></img>
            <div className="card-tech-overlay">
                <p>Projelerimi görmek için bağlantıya tıkla <i className="fas fa-mouse-pointer"></i></p>
                <a target="_blank" href="https://github.com/Bekir-Akok"><button type="button">Tıkla <i className="fas fa-link"></i></button></a>
            </div>
        </div>
    )
}



export default CardTech