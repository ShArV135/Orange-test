import {useCookies} from "react-cookie";

export function useFavorite() {
    const key = 'favorite';
    const [cookies, setCookie] = useCookies([key]);

    let favorites = cookies[key] || [];

    function addFavorite(id: string) {
        favorites.push(id);

        setCookie(key, favorites);
    }

    function hasFavorite(id: string) {
        return favorites.indexOf(id) !== -1;
    }

    function removeFavorite(id: string) {
        let index = favorites.indexOf(id);

        if (index !== -1) {
            favorites.splice(index, 1);
            setCookie(key, favorites);
        }
    }

    return [favorites, hasFavorite, addFavorite, removeFavorite];
}
