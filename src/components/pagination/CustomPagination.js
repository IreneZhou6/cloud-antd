import { Pagination } from 'antd';
import React from 'react';

export default function CustomPagination() {
    <Pagination
        total={85}
        showTotal={(total) => `共${total}条记录`}
        defaultPageSize={20}
        defaultCurrent={1}
    />
}