import React, { Fragment, useState } from 'react';
import './Login.css';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import API from '../api/Api'

const Login = (props: any) => {
    // 0:登录，1:注册
    const [formType, setFormType] = useState(0)
    const onFinish = (values: { username: string, password: string, password1: string, password2: string }) => {
        // TODO:登录验证，后台保存token至cookie
        if (formType) {
            // 注册
            API.register({ username: values.username, password: values.password1 }).then(() => {
                props.history.push({ pathname: '/home' })
            })
        } else {
            // 登录
            API.login({ username: values.username, password: values.password }).then(() => {
                props.history.push({ pathname: '/home' })
            })
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const changeType = () => {
        setFormType(formType ? 0 : 1)
    }

    return (
        <div id="login-form">
            <h2>uCode translate platform</h2>
            <Form
                style={{ width: '100%' }}
                name="basic"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: '请输入账号!' }]}
                >
                    <Input prefix={<UserOutlined />} placeholder="账号" />
                </Form.Item>
                {!formType ?
                    <Form.Item
                        name="password"
                        rules={[{ required: !formType, message: '请输入密码!' }]}
                    >
                        <Input.Password placeholder="密码" prefix={<LockOutlined />} />
                    </Form.Item> :
                    (
                        <Fragment>
                            <Form.Item
                                name="password1"
                                rules={[{ required: !!formType, message: '请输入密码!' }]}
                            >
                                <Input.Password placeholder="密码" prefix={<LockOutlined />} />
                            </Form.Item>
                            <Form.Item
                                name="password2"
                                rules={[{ required: !!formType, message: 'Please input your password!' },
                                ({ getFieldValue }) => ({
                                    validator(rule, value) {
                                        if (!value || getFieldValue('password1') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject('两次密码必须一致');
                                    },
                                }),
                                ]}
                            >
                                <Input.Password placeholder="确认密码" prefix={<LockOutlined />} />
                            </Form.Item>
                        </Fragment>
                    )
                }
                <Form.Item>
                    <Button type="link" htmlType="button" onClick={changeType}>
                        {formType ? '登录' : '注册'}
                    </Button>
                    <Button type="primary" htmlType="submit" block>
                        {formType ? '注册' : '登录'}
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
export default Login;
