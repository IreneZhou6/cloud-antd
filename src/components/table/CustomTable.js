import { Table } from "antd";
import React from "react";

export default function CustomTable({ columns, pageData, setCondition }) {
    const data = pageData.list && pageData.list.map((item, index) => {
        // console.log({ ...item, key: index });
        return { ...item, key: index }
    })

    const onShowSizeChange = (current, pageSize) => {
        setCondition(prev => {
            return { ...prev, pageNum: current, pageSize: pageSize }
        })
        // console.log(current, pageSize);
    };

    const onChange = (page, pageSize) => {
        setCondition(prev => {
            return { ...prev, pageNum: page, pageSize: pageSize }
        })
    }

    return (
        <>
            {pageData && pageData.list &&
                <Table
                    columns={columns}
                    dataSource={data}
                    scroll={{
                        x: 1300,
                    }}
                    pagination={{
                        total: pageData.total,
                        showTotal: (total) => `共${total}条记录`,
                        defaultPageSize: 10,
                        defaultCurrent: 1,
                        showSizeChanger: true,
                        onChange: onChange,
                        onShowSizeChange: onShowSizeChange
                    }}
                />}
        </>
    );
}