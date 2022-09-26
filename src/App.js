import './App.css';
import 'antd/dist/antd.css';

import { Routes, Route } from "react-router-dom";
import { BarChartOutlined, CloudOutlined, CloudServerOutlined, CloudSyncOutlined } from '@ant-design/icons';

// import Sidebar from './components/sidebar/Sidebar';
import Statistics from './pages/statistics/Statistics';
import ApplicationOrder from './pages/applicationOrder/ApplicationOrder';
import ProjectOrder from './pages/projectOrder/ProjectOrder';
import CloudService from './pages/cloudResource/cloudService/CloudService';
import ComputingService from './pages/cloudResource/computingService/ComputingService';
import OptionalPackage from './pages/cloudResource/optionalPackage/OptionalPackage';
import CloudServiceOrder from './pages/cloudServiceOrder/CloudServiceOrder';
import CloudResourceOrder from './pages/cloudResourceOrder/CloudResourceOrder';
import CustomLayout from './components/layout/CustomLayout';
import AreaDepartment from './pages/system/area-department/AreaDepartment';
import User from './pages/system/userCenter/user/User';

const menuRouter = [
  {
    menuId: 1,
    menuName: "数据统计",
    path: "/",
    icon: <BarChartOutlined />,
    element: <Statistics />,
    // children: []
  }, {
    menuId: 888,
    menuName: "假数据",
    path: "/home",
    element: <Statistics />,
    // children: []
    // }, {
    //   menuId: 3,
    //   menuName: "应用列表",
    //   path: "/order/applicationOrder",
    //   element: <ApplicationOrder />,
    // children: []
    // }, {
    //   menuId: 4,
    //   menuName: "项目列表",
    //   path: "/order/projectOrder",
    //   element: <ProjectOrder />,
    //   // children: []
  }, {
    menuId: 5,
    menuName: "云资源列表",
    path: "/order/cloudResourceOrder",
    icon: <CloudOutlined />,
    element: <CloudResourceOrder />,
    // children: []
  }, {
    menuId: 6,
    menuName: "云服务目录管理",
    path: null,
    icon: <CloudSyncOutlined />,
    element: null,
    children: [{
      menuId: 7,
      menuName: "云基础资源服务",
      path: "/cloudResource/cloudService",
      icon: null,
      element: <CloudService />,
      // children: []
      // }, {
      //   menuId: 8,
      //   menuName: "大数据计算服务",
      //   path: "/cloudResource/computingService",
      //   element: <ComputingService />,
      //   // children: []
    }, {
      menuId: 999,
      menuName: "假数据",
      path: "/cloudResource/fakeData",
      element: <ComputingService />,
      //   // children: []
      // }, {
      // menuId: 10,
      // menuName: "安全服务选配包",
      // path: "/cloudResource/optionalPackage",
      // element: <OptionalPackage />,
      //   children: []
      // }]
      // }, {
      //   menuId: 53,
      //   menuName: "云服务订单",
      //   path: "/order/cloudServiceOrder",
      //   icon: <CloudServerOutlined />,
      //   element: <CloudServiceOrder />,
      // children: []
      // }, {
      //   menuId: 54,
      //   menuName: "模板管理",
      //   path: "/accountingManagement/Template",
      //   children: []
      // }, {
      //   menuId: 14,
      //   menuName: "账单管理",
      //   path: "/Bill",
      //   children: []
      // }, {
      //   menuId: 18,
      //   menuName: "系统管理",
      //   path: "/system",
      // children: [{
      //   //     menuId: 19,
      //   //     menuName: "地区/部门管理",
      //   //     path: "/system/area-department",
      //   //     element: <AreaDepartment />,
      //   //     children: []
      //   //   }, {
      //   //     menuId: 20,
      //   //     menuName: "云区管理",
      //   //     path: "/system/cloudArea",
      //   //     children: []
      //   // }, {
      //   menuId: 23,
      //   menuName: "用户中心",
      //   path: "/system/usercenter",
      //   children: [{
      //     menuId: 24,
      //     menuName: "用户管理",
      //     path: "/system/usercenter/user",
      //     element: <User />,
      //     //       children: []
      //     // }, {
      //     //       menuId: 25,
      //     //       menuName: "角色管理",
      //     //       path: "/system/usercenter/role",
      //     //       children: []
      //     //     }, {
      //     //       menuId: 27,
      //     //       menuName: "权限管理",
      //     //       path: "/system/usercenter/permission",
      //     //       children: []
      //   }]
    }]
  }]

const routerRecursion = (menu) => {
  if (menu.children && menu.children.length) {
    return menu.children.map(child => {
      return routerRecursion(child)
    })
  }
  return <Route path={menu.path} element={menu.element} key={menu.menuId} />
}

function App() {
  return (
    <div className="App" >
      <CustomLayout menuList={menuRouter} >
        <Routes>
          {menuRouter.map(menuR => routerRecursion(menuR))}
        </Routes>
      </CustomLayout>
    </div >
  );
}

export default App;
