import { Button, Modal } from "antd";
import React, { useState } from "react";
import ResourceContent from "../modalContent/resourceContent";

export default function BasicModal({ btnDisabled, projectId }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Button type="link" disabled={btnDisabled} style={{ padding: 0 }} onClick={showModal}>云资源列表</Button>
            <Modal
                title="云资源详情"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                {isModalOpen && <ResourceContent projectId={projectId} />}
            </Modal>
        </>
    );
};