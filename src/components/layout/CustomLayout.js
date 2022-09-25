import './customLayout.css';

import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';

const { Header, Sider, Content } = Layout;

function getItem(item) {
    // console.log(item);
    return {
        // ...item,
        key: item.menuId,
        icon: item.icon,
        children: item.children,
        label: <Link to={item.path}>{item.menuName}</Link>
    };
}

const itemRecursion = (item) => {
    item = { ...item };
    // 下面改变了一个复杂数据类型children，会改变原数组，因此结构给item重新赋值
    if (item.children && item.children.length) {
        item.children = item.children.map(child => { return itemRecursion(child) });
        return getItem(item);
    }
    return getItem(item);
}

const dataFilter = (menu, userData) => {
    const dataArray = userData.filter(data => {
        if (data.children && data.children.length) {
            return data.menuId === menu.menuId || dataFilter(menu, data.children).length;
        }
        return data.menuId === menu.menuId;
    });
    console.log("dataArray", dataArray);
    return dataArray;
}
const menuFilter = (list, userData) => {
    // debugger
    const array = list.filter(menu => {
        if (menu.children && menu.children.length) {
            // menu = { ...menu };
            menu.children = menuFilter(menu.children, userData);
            return dataFilter(menu, userData).length;
        }
        return dataFilter(menu, userData).length;
    });
    console.log("array", array);
    return array;
}

export default function CustomLayout({ children, menuList }) {
    console.log('menuList', menuList);

    const [collapsed, setCollapsed] = useState(false);
    // const [userInfo, setUserInfo] = React.useState({});
    const [userMenu, setUserMenu] = React.useState([]);

    React.useEffect(() => {
        axios('/api/v1/user/userInfo', {
            headers: {
                rkey: 'D10AF457DAA1DEED54E2C36B5F295E7E',
                ukey: 'eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2lkX2tleSI6IjEiLCJscyI6Im1hbmFnZW1lbnQifQ.dIWBkabAHXTyqZ2JBVhYzYKT3xMD6YCZzDgknRP9tHDkhmE31nBkYjyhXmeQ2dVTF-P3ILxVUpK7pkOnUpzQnw'
            }
        }).then(response => {
            console.log(response.data.data);
            // setUserInfo(response.data.data);
            response.data && response.data.data && response.data.data.permissions && setUserMenu(menuFilter(menuList, response.data.data.permissions));
        })
    }, [])

    console.log('userMenu', userMenu);

    const menuItem = userMenu.map(item => {
        return itemRecursion(item);
    })
    // console.log('menulist', menulist);
    console.log('menuItem', menuItem);

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo">政务云服务辅助系统</div>
                <Menu
                    // theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={menuItem}
                />
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{
                        padding: 0,
                    }}
                >
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        minHeight: 280,
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};