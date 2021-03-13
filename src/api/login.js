import api from './api'
import axios from '@/utils/request'

export function login(param) {
    return axios({
        url: api.Login,
        method: 'post',
        data: param
    })
}