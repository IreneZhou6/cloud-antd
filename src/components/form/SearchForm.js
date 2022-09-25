import { Col, Row, Button, DatePicker, Form, Input } from 'antd';
import React from 'react';
import './searchForm.css';

const { RangePicker } = DatePicker;

const config = {
    rules: [
        {
            type: 'string',
        },
    ],
};
const numberConfig = {
    rules: [
        {
            type: 'number',
        },
    ],
};
const rangeConfig = {
    rules: [
        {
            type: 'array',
        },
    ],
};

const formItemLayout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 6,
    },
};

export default function SearchForm() {
    const onFinish = (fieldsValue) => {
        const rangeValue = fieldsValue['range-picker'];
        const requestCondition = {
            dateTime: [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
        }
        console.log('Success:', requestCondition);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            className="searchForm"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="inline"
            {...formItemLayout}
        >
            <Form.Item
                className='formItem'
                name="range-picker"
                label="日期"
                {...rangeConfig}>
                <RangePicker />
            </Form.Item>
            <Form.Item
                className='formItem'
                name="projectName"
                label="项目名称"
                {...config}>
                <Input type="text" placeholder='请输入' />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    查询
                </Button>
            </Form.Item>
            <Form.Item
            >
                <Button className="resetBtn">
                    重置
                </Button>
            </Form.Item>
        </Form>
    );
};
