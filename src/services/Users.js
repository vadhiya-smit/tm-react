import axios from "axios"

//const  BASR_URL = "http://localhost:1338"
const  BASR_URL = "https://time-work-strapi.herokuapp.com"

class services {
    static async getUserData(id){
        try {
            const res = await axios.get(`${BASR_URL}/users/${id}`)
            return await res.data
        } catch(error){
            console.log(error);
        }
    }

}

export default services