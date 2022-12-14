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


export default function SearchForm({ setCondition }) {
    const onFinish = (fieldsValue) => {
        // const projectName = fieldsValue['projectName'];
        const rangeValue = fieldsValue["dateTime"];
        const requestCondition = {
            ...fieldsValue,
            dateTime:
                rangeValue && rangeValue.length
                    ? [
                        rangeValue[0].format("YYYY-MM-DD"),
                        rangeValue[1].format("YYYY-MM-DD"),
                    ]
                    : [],
        };
        setCondition(prev => { return { ...prev, ...requestCondition }; });
        console.log("Success:", requestCondition);
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    const handleReset = () => {
        setCondition((prev) => {
            return {
                ...prev,
                status: "",
                dateTime: [],
                applicationName: "",
                projectCode: "",
                projectLeader: "",
                projectName: "",
                projectTelephone: ""
            };
        });
        console.log("reset");
    };

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
                    label="????????????"
                    {...config}
                >
                    <Input type="text" placeholder="?????????" />
                </Form.Item>
                <Form.Item
                    // className='searchItem'
                    name="projectCode"
                    label="????????????"
                    {...config}
                >
                    <Input type="text" placeholder="?????????" />
                </Form.Item>
                <Form.Item
                    // className='searchItem'
                    name="projectLeader"
                    label="?????????"
                    {...config}
                >
                    <Input type="text" placeholder="?????????" />
                </Form.Item>
                <Form.Item
                    // className='searchItem'
                    name="projectTelephone"
                    label="????????????"
                >
                    <Input type="text" placeholder="?????????" />
                </Form.Item>
            </div>
            <div className="searchFormRow">
                <Form.Item
                    // className='searchItem'
                    name="applicationName"
                    label="????????????"
                    {...config}
                >
                    <Input type="text" placeholder="?????????" />
                </Form.Item>
                <Form.Item
                    // className='searchItem'
                    name="status"
                    label="????????????"
                >
                    <Select
                        style={{
                            width: 120,
                        }}
                    >
                        <Option value="1">?????????</Option>
                        <Option value="2">??????</Option>
                        <Option value="3">?????????</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    // className='searchItem'
                    name="dateTime"
                    label="????????????"
                    {...rangeConfig}
                >
                    <RangePicker />
                </Form.Item>
                <div className="btn-group">
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            ??????
                        </Button>
                    </Form.Item>
                    <Form.Item>
                        <input className="resetBtn" type="reset" onClick={handleReset} />
                    </Form.Item>
                </div>
            </div>
        </Form>
    );
};