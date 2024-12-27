import i18n from "./language/i18next";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux"

const Nav = () => {
    const dispatch = useDispatch()
    const { t } = useTranslation();
    function changeWebsiteLanguage(value) {
        i18n.changeLanguage(value)
    }
    return (
        <div>
            <select defaultValue={localStorage.getItem("lang")} onChange={(e) => changeWebsiteLanguage(e.target.value)}>
                <option value="uz">UZ</option>
                <option value="ru">RU</option>
                <option value="en">EN</option>
            </select>
            <h1>{t("nav.account")}</h1>

            <button onClick={() => dispatch({ type: "ADD_COUNT" })} style={{ padding: 10 + "px" }}>+</button>

        </div>
    )
}

export default Nav
