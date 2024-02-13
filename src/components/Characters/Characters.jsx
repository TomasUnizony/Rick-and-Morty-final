import Character from "../Character/Character";
import style from "./Characters.module.css";

const Characters = ({ data }) => {
    return (
        <div >
            <div className={style.container}>
                {data.map((d) => (
                    <Character
                    key={d.id}
                    name={d.name}
                    status={d.status}
                    species={d.species}
                    gender={d.species}
                    image={d.image}
                    airDate={d.air_date}
                    />
                    ))}
            </div>
        </div>
    )
}

export default Characters;