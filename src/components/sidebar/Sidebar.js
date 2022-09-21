import axios from 'axios';
import React from 'react';

import { Menu } from 'antd';

function getItem(item) {
    // console.log(item);
    return {
        key: item.menuId,
        icon: item.icon,
        children: item.children,
        label: item.menuName
    };
}

const itemRecursion = (item) => {
    // if (item.children && item.children.length) {
    //     return item.children.map(child => itemRecursion(child));
    // } else {
    console.log(getItem(item))
    return getItem(item);
    // }
}

export default function Sidebar({ menulist }) {
    const [userInfo, setUserInfo] = React.useState({});

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

    const menuItem = menulist.map(item => {
        // itemRecursion(item);
        getItem(item);
    })
    console.log(menulist);
    console.log(menuItem);

    const onClick = (e) => {
        console.log('click ', e);
    };

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