import image from './img/WhatsApp Image 2020-12-27 at 20.50.49.jpeg'


const Card = () => {
    return (
        <div className="card-text">
            <span className="card-container">
                <h1>Merhaba..</h1>
                <p>Ben Bekir Akok.Sabahattin Zaim Üniversitesi Uluslararası Ticaret ve Finans mezunuyum aynı zamanda aktif olarak Eskişehir Anadolu Üniversitesinde Yönetim Bilişim Sistemleri bölümünde lisans eğitimime devam ediyorum.2019 yılında mezun olup satış/pazarlama alanında kariyerime devam ederken yazılımla ve ona olan ilgimle tanıştım. Ardından büyük bir hevesle kod yazmaya ve öğrenmeye başladım ve artık her günümü Frontend Devoloper olmak için çalışarak geçiyorum. Kod yazmak artık benim için yemek yemek veya uyumak kadar günlük hayatımın bir gerekliliği ve eğlencesi haline geldi.</p> 
            </span>
            <span className="img-border">
                <img src={image}></img> 
            </span>
        </div>
    )
}


export default Card