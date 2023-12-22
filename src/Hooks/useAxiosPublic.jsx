import axios from "axios";

const axiosPublic=axios.create({
    baseURL:''
})
const useAxiosPublick = () => {
    return axiosPublic;
};

export default useAxiosPublick;