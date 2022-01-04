import axios from "axios"

//const  BASR_URL = "http://localhost:1338"
//const  BASR_URL = "https://time-work-strapi.herokuapp.com"
const  BASR_URL = process.env.REACT_APP_baseurl

class todoServices {
 
    static async addTodoList(todoList) {
        const res = await axios.post(`${BASR_URL}/todo-lists`, todoList)
        return await res.data
    }
    static async updateTodoList(id,todoList) { 
        const res = await axios.put(`${BASR_URL}/todo-lists/${id}`,todoList)
        return await res.data
    }
   
}

export default todoServices