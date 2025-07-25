/*
    API requirement:
    1. get all games with products, category
    2. get all products with game
        - get all categories
    3. create orders
    4. signup, signin, logout
    5. get all users
    6. get all orders
    7. checkout product
    8. get user info
        create update category
    9. create game
    10. create product
    11. edit game
    12. edit product
    13. delete game
    14. delete product
    15. get all users
    16. update notification
    17. edit user info
*/

import { Game } from "./type";

const url = 'http://localhost:3000'

export const getAllGames = async () => {
    try {
        const response = await fetch(`${url}/api/games`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application'
            }
        });

        const data = await response.json();

        if (response.status === 200) {
            return data as Game[];
        } else {
            return null;
        }
    } catch (err) {
        console.log('error fetching games', err);
        return null;
    }
}