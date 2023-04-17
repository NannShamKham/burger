import axios from "axios";

const instance=axios.create({
    baseURL:'https://react-burger-c3320-default-rtdb.firebaseio.com/'
})

export default instance;