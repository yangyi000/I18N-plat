import React from 'react';
import './home.css';
import { Layout, Menu, Avatar } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  FolderOpenOutlined,
  UploadOutlined,
  HomeOutlined,
  TeamOutlined,
  UserAddOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import API from '../api/Api'

interface UserInfo { type?: Number, username?: string }

const { Header, Sider, Content, Footer } = Layout;
class Home extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      collapsed: false,
      userInfo: {}
    }
  }
  componentDidMount() {
    // TODO:获取用户信息，做菜单权限管理
    this.getUserInfo().then((res) => {
      this.setState({ userInfo: res })
    });
    API.test()
  }
  setCollapsed() {
    this.setState({ collapsed: !this.state.collapsed })
  }

  getUserInfo = (): Promise<UserInfo> => {
    return Promise.resolve({ username: 'admin', type: 0 })
  }

  render() {
    return <Layout id="main-layout">
      <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to='/home/dashboard'>Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<FolderOpenOutlined />}>
            <Link to='/home/project'>projects</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<TeamOutlined />}>
            <Link to='/home/groups'>groups</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<UserAddOutlined />}>
            <Link to='/home/users'>users</Link>
          </Menu.Item>
          {this.state.userInfo.type === 0 && <Menu.Item key="5" icon={<UploadOutlined />}>
            <Link to='/home/settings'>Settings</Link>
          </Menu.Item>}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: this.setCollapsed.bind(this),
          })}
          <div id='user-menu'>
            <Avatar size={40} icon={<UserOutlined />} />
            {this.state.userInfo.username}
          </div>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {this.props.children}
        </Content>
        <Footer className="footer">copy right@2020 ubtrobot</Footer>
      </Layout>
    </Layout>
  }
}

export default Home;
