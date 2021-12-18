import axios from "axios"

//const  BASR_URL = "http://localhost:1338"
const  BASR_URL = "https://time-work-strapi.herokuapp.com"
class services {
    static async getTodayData(id,date){
        try {
            const res = await axios.get(`${BASR_URL}/working-times?user.id=${id}&Date=${date}`)
            console.log(`${BASR_URL}/working-times?user.id=${id}&Date=${date}`);
            return await res.data
        } catch(error){
            console.log(error);
        }
    }

    static async getDataById(id){
        try {
            const res = await axios.get(`${BASR_URL}/working-times?user.id=${id}`)
            return await res.data
            
        } catch (error) {
            console.log(error);
        }
    }

    static async addNewData(newData){
        try {
            const res = await axios.post(`${BASR_URL}/working-times`,newData)
            return await res.data
            
        } catch (error) {
            console.log(error);
        }
    }

    static async updateTodayData(id,newData){
        try {
            const res = await axios.put(`${BASR_URL}/working-times/${id}`,newData)
            return await res.data
            
        } catch (error) {
            console.log(error);
        }
    }
}

export default services