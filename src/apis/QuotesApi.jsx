import { axiosInstance } from "../config/AxiosInstance"

export let getQuote=async () => {
        try {
            let res = await axiosInstance.get("/quotes/random")
           return res.data
        }
        catch (err) {
            console.log(err)
        }
}