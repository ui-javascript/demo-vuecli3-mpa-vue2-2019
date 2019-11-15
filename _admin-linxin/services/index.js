import request from '../utils/request';

export const fetchData = query => {
    return request({
        // @TODO 需要提供mock数据, 暂时在创建public/mock.josn
        url: '/mock.json',
        method: 'get',
        params: query
    });
};
