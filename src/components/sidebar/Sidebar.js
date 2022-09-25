import axios from 'axios';
import React from 'react';

import { Link, Outlet } from 'react-router-dom';
import { Menu } from 'antd';

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

const menuFilter = (menu, fetchedMenu) => {
    if (menu.children && menu.children.length) {
        return menuFilter(menu.children, fetchedMenu);
    }
    return fetchedMenu.filter(item => item.menuId === menu.key)
}

export default function Sidebar({ children, menulist }) {
    const [userInfo, setUserInfo] = React.useState({});
    const [userMenu, setUserMenu] = React.useState([]);

    const menuItem = menulist.map(item => {
        return itemRecursion(item);
    })
    // console.log('menulist', menulist);
    console.log('menuItem', menuItem);


    React.useEffect(() => {
        axios('/api/v1/user/userInfo', {
            headers: {
                rkey: 'D10AF457DAA1DEED54E2C36B5F295E7E',
                ukey: 'eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2lkX2tleSI6IjEiLCJscyI6Im1hbmFnZW1lbnQifQ.dIWBkabAHXTyqZ2JBVhYzYKT3xMD6YCZzDgknRP9tHDkhmE31nBkYjyhXmeQ2dVTF-P3ILxVUpK7pkOnUpzQnw'
            }
        }).then(response => {
            console.log(response.data.data);
            setUserInfo(response.data.data);
            response.data && response.data.data && response.data.data.permissions && setUserMenu(menuItem.filter(item => menuFilter(item, response.data.data.permissions)));
        })
    }, [])

    console.log('userMenu', userMenu);

    const onClick = (e) => {
        console.log('click ', e);
    };

    console.log('render');

    return (
        <>
            {userMenu &&
                <>
                    <Menu
                        onClick={onClick}
                        style={{
                            width: 256,
                            height: '100vh'
                        }}
                        defaultSelectedKeys={['5']}
                        mode="inline"
                        items={userMenu}
                    />
                    {children}
                </>
            }
        </>
    );
};