import axios from "axios";

const http = axios.create ({
    baseURL: "https://cluebase.lukelav.in"
});

export default {
    getRandom() {
        return http.get(`/clues/random`);
    }
}