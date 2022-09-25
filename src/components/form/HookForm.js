import "./hookForm.css";

import { useForm, Controller } from "react-hook-form";
import { Button, Input, DatePicker } from "antd";

const { RangePicker } = DatePicker;


export default function HookForm({ setMyFilter }) {

    const options = [
        {
            label: "运行中",
            value: "1",
        },
        {
            label: "下线",
            value: "2",
        },
        {
            label: "未上线",
            value: "3",
        }
    ];

    const { reset, control, handleSubmit } = useForm({
        defaultValues: {
            applicationName: "",
            projectName: "",
            projectCode: "",
            projectLeader: "",
            projectTelephone: "",
            status: ""
        }
    });

    // const onSubmit = data => setMyFilter((prev) => {
    //     return { ...prev, ...data }
    // });

    const onSubmit = (data) => {
        console.log("data", data);
    }
    const handleReset = () => {
        reset();
        setMyFilter((prev) => {
            return {
                ...prev,
                applicationName: "",
                projectName: "",
                projectCode: "",
                projectLeader: "",
                projectTelephone: "",
                status: ""
            }
        })
    }
    console.log('search form');

    return (
        <form className="searchForm">
            <Controller
                name="applicationName"
                control={control}
                render={({ field }) =>
                    <div className="searchItem">
                        <label htmlFor="applicationName">应用名称：</label>
                        <Input className="formRect" id="applicationName" {...field} />
                    </div>
                } />
            <Controller
                name="projectName"
                control={control}
                render={({ field }) =>
                    <div className="searchItem">
                        <label htmlFor="projectName">项目名称：</label>
                        <Input className="formRect" id="projectName" {...field} />
                    </div>
                } />
            <Controller
                name="projectCode"
                control={control}
                render={({ field }) =>
                    <div className="searchItem">
                        <label htmlFor="projectCode">项目编码：</label>
                        <Input className="formRect" id="projectCode" {...field} />
                    </div>
                } />
            <Controller
                name="projectLeader"
                control={control}
                render={({ field }) =>
                    <div className="searchItem">
                        <label htmlFor="projectLeader">申请人：</label>
                        <Input className="formRect" id="projectLeader" {...field} />
                    </div>
                } />
            <Controller
                name="projectTelephone"
                control={control}
                render={({ field }) =>
                    <div className="searchItem">
                        <label htmlFor="projectTelephone">联系方式：</label>
                        <Input className="formRect" id="projectTelephone" {...field} />
                    </div>
                } />
            {/* <CustomSelect
                    name="status"
                    control={control}
                    label="运行状态"
                    options={options}
                /> */}
            <Controller
                name="dateTime"
                control={control}
                render={({ field }) =>
                    <div className="searchItem">
                        <label htmlFor="dateTime">上线日期：</label>
                        <RangePicker className="formRect" id="dateTime" {...field} />
                    </div>
                } />
            <Button onClick={handleSubmit(onSubmit)} type="primary">查询</Button>
            <Button onClick={handleReset}>重置</Button>
        </form>
    )
}