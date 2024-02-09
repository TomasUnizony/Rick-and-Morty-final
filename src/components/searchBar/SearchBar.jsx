import style from "./SearchBar.module.css";

const SearchBar = () => {
    return (
        <div className={style.container}>
            <select name="genderDropdown" id="1">
                <option value="" disabled hidden>Gender</option>
                <option value="all">All</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="genderless">Genderless</option>
                <option value="unknown">Unknown</option>
            </select>
            <select name="statusDropdown" id="2">
                <option value="" disabled hidden>Status</option>
                <option value="all">All</option>
                <option value="alive">Alive</option>
                <option value="dead">Dead</option>
                <option value="unknown">Unknown</option>
            </select>
            <p>Species</p>
            <div>
                <input type="text" />
            </div>
        </div>
    )
}

export default SearchBar;