import request from '@/utils/request';

export const getUsers = ()=>request({
    url:'/api/users',
    methods: 'get'
})