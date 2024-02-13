import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllCharacters, getAllEpisodes } from "../../redux/actions";
import Characters from "../../components/Characters/Characters";
import style from "./Home.module.css";

const Home = () => {
    const dispatch = useDispatch();
    const characters = useSelector(state => state.characters);
    const episodes = useSelector(state => state.episodes);
    
    useEffect(() => {
        dispatch(getAllCharacters());
        dispatch(getAllEpisodes());
    }, [dispatch])
    
    
    return (
        <div className={style.home}>
            <h3>Characters</h3>
            <div>
                <Characters data={characters}/>
            </div>
        </div>
    )
}

export default Home;