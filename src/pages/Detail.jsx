import React, { useState, useEffect } from 'react';
import axiosInstance from "../API/apiMinimalist";
import { useParams } from 'react-router-dom';

const Detail = () => {
    const [detail, setDetail] = useState({});
    const { id } = useParams();

    const callApi = async () => {
        try {
            axiosInstance.detail(id).then((res) => {
                const data = res;
                setDetail(data)
            })
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
      callApi();
    }, []);

    return (
      <div className="flex flex-cols-2 w-full h-full bg-primarybg justify-start my-[70px]">
        <img src={detail.img} alt="" />
        <h1>{detail.name}</h1>

      </div>
    );
}

export default Detail;