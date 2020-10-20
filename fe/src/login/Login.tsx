import React from 'react';
import './Login.css';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const Login = (props: any) => {
    const onFinish = (values: any) => {
        // TODO:登录验证，后台保存token至cookie
        props.history.push({ pathname: '/home'})
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div id="login-form">
            <h2>UBT i18n System</h2>
            <Form
                style={{ width: '100%' }}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input prefix={<UserOutlined />} placeholder="账号" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password placeholder="密码" prefix={<LockOutlined />} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" block>
                        登录
          </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
export default Login;
