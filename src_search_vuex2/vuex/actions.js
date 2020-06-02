import { REQUESTING, REQUEST_SUCCESS, REQUEST_FAILD } from './mutationsType'
import axios from "axios";
export const actions = {
    async searchFor(context, content) {
        context.commit(REQUESTING)
        try {
            let response = await axios({
                method: "GET",
                url: "http://localhost:8000/api/user",
                params: {
                    q: content
                }
            });
            // console.log(response.data.items);
            console.log(response.data);
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
            context.commit(REQUEST_SUCCESS, users)
        } catch (error) {
            context.commit(REQUEST_FAILD, error.message)
        }
    }
}