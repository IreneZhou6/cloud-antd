import { DatePicker, Form } from 'antd';
import React from 'react';

const { RangePicker } = DatePicker;

const rangeConfig = {
    rules: [
        {
            type: 'array',
        },
    ],
};

export default function DateForm() {
    const onFinish = (fieldsValue) => {
        // Should format date value before submit.
        const rangeValue = fieldsValue['range-picker'];
        const dateTime = [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')];
        console.log('Received values of form: ', dateTime);
    };

    return (
        <Form name="time_related_controls" onFinish={onFinish}>
            <Form.Item name="range-picker" label="日期" {...rangeConfig}>
                <RangePicker />
            </Form.Item>
        </Form>
    );
};
