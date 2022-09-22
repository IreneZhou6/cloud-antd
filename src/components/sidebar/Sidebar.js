import axios from 'axios';
import React from 'react';

import { Link } from 'react-router-dom';
import { Menu } from 'antd';

function getItem(item) {
    // console.log(item);
    return {
        // ...item,
        key: item.path,
        icon: item.icon,
        children: item.children,
        label: item.menuName
    };
}

const itemRecursion = (item) => {
    item = { ...item };
    if (item.children && item.children.length) {
        item.children = item.children.map(child => { return itemRecursion(child) });
        return getItem(item);
    }
    return getItem(item);
}

export default function Sidebar({ menulist }) {
    const [userInfo, setUserInfo] = React.useState({});

    const menuItem = menulist.map(item => {
        return itemRecursion(item);
    })
    // console.log('menulist', menulist);
    // console.log('menuItem', menuItem);

    const filteredItem = menuItem.filter(item => {
        // item.find(ele => {ele.key === userInfo.permission})
    });

    React.useEffect(() => {
        axios('/api/v1/user/userInfo', {
            headers: {
                rkey: 'D10AF457DAA1DEED54E2C36B5F295E7E',
                ukey: 'eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2lkX2tleSI6IjEiLCJscyI6Im1hbmFnZW1lbnQifQ.dIWBkabAHXTyqZ2JBVhYzYKT3xMD6YCZzDgknRP9tHDkhmE31nBkYjyhXmeQ2dVTF-P3ILxVUpK7pkOnUpzQnw'
            }
        }).then(response => {
            console.log(response.data.data);
            // setMenuItem(response.data.data.permissions.map(permission => {
            //     itemRecursion(permission)
            // }));
            setUserInfo(response.data.data);
        })
    }, [])

    const onClick = (e) => {
        console.log('click ', e);
    };

    console.log('render');

    return (
        <>
            {menuItem &&
                <Menu
                    onClick={onClick}
                    style={{
                        width: 256,
                    }}
                    defaultSelectedKeys={['5']}
                    mode="inline"
                    items={menuItem}
                />
            }
        </>
    );
};