import React, { useEffect } from "react";
import axios from "axios";

export default function ResourceContent({ projectId }) {
    useEffect(() => {
        axios("/api/v1/project/resources", {
            headers: {
                rkey: "D10AF457DAA1DEED54E2C36B5F295E7E",
                ukey: "eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2lkX2tleSI6IjEiLCJscyI6Im1hbmFnZW1lbnQifQ.dIWBkabAHXTyqZ2JBVhYzYKT3xMD6YCZzDgknRP9tHDkhmE31nBkYjyhXmeQ2dVTF-P3ILxVUpK7pkOnUpzQnw",
            },
            params: {
                projectId: projectId,
            },
        }).then((response) => console.log(response));
    }, []);

    return (
        <div className="ResourceContent">
            ResourceContent
        </div>
    )
}