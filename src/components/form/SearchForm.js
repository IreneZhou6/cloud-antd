import { Button, DatePicker, Form, Input, Select } from 'antd';
import React from 'react';
import './searchForm.css';

const { RangePicker } = DatePicker;
const { Option } = Select;

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


export default function SearchForm() {
    const onFinish = (fieldsValue) => {
        // const projectName = fieldsValue['projectName'];
        const rangeValue = fieldsValue['dateTime'];
        const requestCondition = {
            ...fieldsValue,
            dateTime: rangeValue && rangeValue.length ? [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')] : [],
        }
        console.log('Success:', requestCondition);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const handleReset = () => {
        console.log("reset");
    }

    return (
        <Form
            className="searchForm"
            initialValues={{
                status: "",
                dateTime: [],
                applicationName: "",
                projectCode: "",
                projectLeader: "",
                projectName: "",
                projectTelephone: "",
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <div className="searchFormRow">
                <Form.Item
                    // className='searchItem'
                    name="projectName"
                    label="项目名称"
                    {...config}
                >
                    <Input type="text" placeholder="请输入" />
                </Form.Item>
                <Form.Item
                    // className='searchItem'
                    name="projectCode"
                    label="项目编码"
                    {...config}
                >
                    <Input type="text" placeholder="请输入" />
                </Form.Item>
                <Form.Item
                    // className='searchItem'
                    name="projectLeader"
                    label="申请人"
                    {...config}
                >
                    <Input type="text" placeholder="请输入" />
                </Form.Item>
                <Form.Item
                    // className='searchItem'
                    name="projectTelephone"
                    label="联系方式"
                >
                    <Input type="text" placeholder="请输入" />
                </Form.Item>
            </div>
            <div className="searchFormRow">
                <Form.Item
                    // className='searchItem'
                    name="applicationName"
                    label="应用名称"
                    {...config}
                >
                    <Input type="text" placeholder="请输入" />
                </Form.Item>
                <Form.Item
                    // className='searchItem'
                    name="status"
                    label="运行状态"
                >
                    <Select
                        style={{
                            width: 120,
                        }}
                    >
                        <Option value="1">运行中</Option>
                        <Option value="2">下线</Option>
                        <Option value="3">未上线</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    // className='searchItem'
                    name="dateTime"
                    label="上线日期"
                    {...rangeConfig}
                >
                    <RangePicker />
                </Form.Item>
                <div className='btn-group'>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            查询
                        </Button>
                    </Form.Item>
                    <Form.Item>
                        <Button className="resetBtn" onClick={handleReset}>
                            重置
                        </Button>
                    </Form.Item>
                </div>
            </div>
        </Form>
    );
};