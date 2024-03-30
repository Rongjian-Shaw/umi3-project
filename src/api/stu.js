import { request } from "umi";

export const stuGet = (params) => {
    return request('/classes/stu', {
        method: 'GET',
    })
}