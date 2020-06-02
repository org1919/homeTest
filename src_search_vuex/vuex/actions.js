import axios from "axios";
import { REQUESTING, REQUEST_FAILD, REQUEST_SUCCESS } from './mutationType'
export const actions = {
    async search({ commit }, content) {

        commit(REQUESTING)
        try {
            let response = await axios({
                method: "GET",
                url: "https://api.github.com/search/users",
                params: {
                    q: content
                }
            });

            console.log(response.data.items);
            // console.log(response.data);
            let users = []
            response.data.items.forEach(item => {
                let user_name = item.login;
                let user_img = item.avatar_url;
                let user_url = item.url;
                let obj = {
                    user_name,
                    user_img,
                    user_url
                };
                users.push(obj);
            });
            commit(REQUEST_SUCCESS, users)
        } catch (error) {
            commit(REQUEST_FAILD, error.message)
        }

    }
}