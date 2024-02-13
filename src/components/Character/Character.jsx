import style from "./Character.module.css";

const Character = (props) => {
    return (
    <div className={style.container}>
        {props.image && <img src={props.image} alt={props.name} className={style.img} />}
        <div className={style.texts}>
            {props.name && <p>{props.name}</p>}
            {props.name && <p>{props.gender}</p>}
            {props.name && <p>{props.status}</p>}
            {props.name && <p>{props.species}</p>}
            {props.airDate && <p>{props.airDate}</p>}
        </div>
    </div>
    )
}

export default Character;