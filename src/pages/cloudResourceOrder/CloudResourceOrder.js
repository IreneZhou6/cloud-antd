import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "antd";
import CustomCard from "../../components/card/CustomCard";
// import HookForm from "../../components/form/HookForm";
import SearchForm from "../../components/form/SearchForm";
import CustomTable from "../../components/table/CustomTable";

const columns = [
    {
        title: "应用名称",
        width: 125,
        dataIndex: "applicationName",
        key: "1",
        fixed: "left",
    },
    {
        title: "项目名称",
        width: 150,
        dataIndex: "projectName",
        key: "2",
    },
    {
        title: "项目编码",
        width: 150,
        dataIndex: "projectCode",
        key: "3",
    },
    {
        title: "申请人",
        width: 70,
        dataIndex: "projectLeader",
        key: "4",
    },
    {
        title: "申请人联系方式",
        width: 120,
        dataIndex: "projectTelephone",
        key: "5",
    },
    {
        title: "运行状态",
        width: 85,
        dataIndex: "status",
        key: "6",
    },
    {
        title: "上线日期",
        width: 100,
        dataIndex: "uptime",
        key: "7",
    },
    {
        title: "下线日期",
        width: 100,
        dataIndex: "downtime",
        key: "8",
    },
    {
        title: "等保定级",
        width: 85,
        dataIndex: "level",
        key: "9",
    },
    {
        title: "云资源数",
        width: 85,
        dataIndex: "packageNum",
        key: "10",
    },
    {
        title: "操作",
        key: "operation",
        fixed: "right",
        width: 100,
        render: (record, index) => <Button type="link" disabled={!record.packageNum} style={{ padding: 0 }}>云资源列表</Button>,
    },
];

export default function CloudResourceOrder() {
    const [pageData, setPageData] = useState([]);
    const [condition, setCondition] = useState([]);

    // [
    //     {
    //         key: "1",
    //         applicationName: "John Brown",
    //         projectName: 32,
    //         projectCode: "projectCode12415",
    //         projectLeader: "projectLeader4604",
    //         projectTelephone: "projectTelephone392597",
    //         status: "status21950",
    //         uptime: "uptime398275",
    //         downtime: "",
    //         level: "一级",
    //         packageNum: 5,
    //     },
    // ];

    useEffect(() => {
        axios('/api/v1/project/page', {
            headers: {
                rkey: 'D10AF457DAA1DEED54E2C36B5F295E7E',
                ukey: 'eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2lkX2tleSI6IjEiLCJscyI6Im1hbmFnZW1lbnQifQ.dIWBkabAHXTyqZ2JBVhYzYKT3xMD6YCZzDgknRP9tHDkhmE31nBkYjyhXmeQ2dVTF-P3ILxVUpK7pkOnUpzQnw'
            },
            method: "post",
            data: {
                pageNum: 1,
                pageSize: 10,
                tab: 2,
                ...condition,
            }
        }).then(response => {
            console.log(response);
            response && response.data && response.data.data && setPageData(response.data.data);
        })
    }, [])

    return (
        <div className="cloudResourceOrder">
            <CustomCard customClass='searchForm'>
                <SearchForm />
            </CustomCard>
            <CustomCard>
                <CustomTable columns={columns} pageData={pageData} />
            </CustomCard>
        </div>
    )
}