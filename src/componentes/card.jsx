
const Card = ({img,nome,info}) => {
  return (
    <section className="c-depoimentos">
        <div className="d1">
            <div className="photo-name">
                <span className="img" style={{backgroundImage: `url(${img})`}}>

                </span>
                <div className="name-carrosel">
                    <h3>{nome}</h3>
                    <p>cliente real</p>
                </div>
            </div>
        </div>

        <hr className="line-card" />

        <p className="carrosel-descricao">
            {info}
        </p>
    
    </section>
  );
};

export default Card;
