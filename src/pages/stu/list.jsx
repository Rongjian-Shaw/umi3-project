import React, { useState, useEffect } from 'react';
import { Space, Table, Tag, Button } from 'antd';
import { stuGet } from '@/api/stu';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Score',
        dataIndex: 'score',
        key: 'score',
    },
    {
        title: 'City',
        dataIndex: 'city',
        key: 'city',
    },
    {
        title: 'Birthday',
        key: 'time',
        dataIndex: 'time'
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <Button type='primary'>Edit</Button>
                <Button type="primary" danger>Delete</Button>
            </Space>
        ),
    },
];
// const data = [
//     {
//         key: '1',
//         name: 'John Brown',
//         score: 32,
//         city: 'New York No. 1 Lake Park',
//         birthday: '2022-02-02',
//     }
// ];

export default () => {
    const [data, setData] = useState([]);
    useEffect(
        () => {
            stuGet().then(res => {
                // console.log(res.data)
                setData(res.data)
            }
            )
        },
        []
    )
    return (
        <Table columns={columns} dataSource={data} rowKey="id" />
    )
};