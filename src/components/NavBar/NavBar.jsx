import SearchBar from "../searchBar/SearchBar";
import style from "./NavBar.module.css";

const NavBar = () => {
    return (
        <div className={style.container}>
            <div>
                <h1>Rick and Morty</h1>
            </div>
            <div className={style.searchBar}>
                <SearchBar />
            </div>
        </div>
    )
}

export default NavBar;