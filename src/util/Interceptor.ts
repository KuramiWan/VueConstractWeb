import axios from "axios";
import {notify} from "notiwind";
import {useRouter} from "vue-router";

const request = axios.create({
        baseURL: 'http://127.0.0.1:4523/m1/1712853-0-default/api',
        // baseURL: 'http://jsjyz.ga:80/api',
        // baseURL: 'http://45.152.67.136:80/api',
        timeout: 3000
    })
    request.interceptors.response.use(
        function (response){

            if (response.data.code == 10000){
                notify({
                    title:"成功",
                    type:"success",
                    text:response.data.data.message,
                    group:"success"
                })
            }else {
                notify({
                    title:"失败",
                    type:"error",
                    text:response.data.message,
                    group:"failed"
                })

            }

            return response;
        },function (error){
            notify({
                title:"失败",
                type:"error",
                text:error,
                group:"failed"
            })
            return Promise.reject(error)
        }
    )
    export {request};

