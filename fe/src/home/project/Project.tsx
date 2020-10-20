import React from 'react';
import { Table, Space, Button } from 'antd';


const columns = [
    {
        title: '项目',
        dataIndex: 'name',
        key: 'name',
        render: (text: any, record: any) => <a>{text}</a>,
    },
    {
        title: '进度',
        dataIndex: 'percent',
        key: 'percent',
    },
    {
        title: '备注',
        dataIndex: 'remark',
        key: 'remark',
    },
    {
        title: '操作',
        key: 'action',
        render: (text: any, record: any) => (
            <Space size="middle">
                <a>翻译</a>
                <a>导出</a>
            </Space>
        ),
    },
];

const data = [
    {
        key: '1',
        name: 'ucode project',
        percent: 32,
        remark: 'gui',
    },
    {
        key: '2',
        name: 'ucode explore',
        percent: 32,
        remark: 'explore',
    },
    {
        key: '3',
        name: 'ucode ukit',
        percent: 32,
        remark: 'ukit',
    },
];
function Project() {
    return (
        <div>
            <Button type="primary">添加</Button>
            <Table columns={columns} dataSource={data} />
        </div>
    )
}

export default Project