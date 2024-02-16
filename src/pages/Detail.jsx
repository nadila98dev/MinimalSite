import React, { useState, useEffect } from 'react';
import axiosInstance from "../API/apiMinimalist";
import { useParams } from 'react-router-dom';
import '../styles/Detail.css'

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

    const handleAddClick = () =>{
      const newItem = {
        id:detail.id,
        img: detail.img,
        name: detail.name,
        price: detail.price
      }
    }

    return (
      <div className="flex flex-cols-2 w-full h-full justify-start my-[70px]">
      <div className='grid md:grid-cols-2 justify-center m-auto'>
        <div className="flex justify-center items-center object-cover grid-cols-4 shrink-0 lg:grid-cols-12 min-w-fit">
          <img src={detail.img} alt="{detail.name}" className='h-[500px]'  />
        </div>
        <div className="flex-wrap text-left justify-start md:items-start w-full py-5">
          <h1 className='text-2xl font-bold my-5'>{detail.name}</h1>
          <p className='font-mallory text-sm my-5'>{detail.description}</p>
          <p className='text-xl font-mallory'>Rp. {detail.price}</p>
          <div className='grid grid-rows-2 mt-5'>
            <p className='text-lg font-bold'>Quantity</p>
            <div className='mt-2 flex justify-start items-center border-gray-100 gap-1'>
              <span className='cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-button hover:text-white'>
              {" "}
              -{" "}
              </span>
              <input className='h-9 w-[40px] border bg-white text-center text-xs flex items-center' type="number" value='1' min='1' readOnly />
              <span className='cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-button hover:text-white'>
              {" "}
              +{" "}
              </span>
            </div>
            <button className="mt-4 w-full border border-gray-400 bg-transparent text-black font-semibold text-[15px] py-3 mb-5 rounded-md hover:brightness-110">Add To Cart</button>
            <button className='w-full bg-black text-white font-semibold text-[15px] py-3 mb-5 rounded-md hover:brightness-110'>Buy Now</button>
          </div>
        </div>
        <div className='container-detail pt-10 mt-20'>
            <h2 className='font-bold text-xl'>What makes it special</h2>
            <ul className='' id='list_desc'>
             <li>1. Description 1</li>
             <li>Description 2</li>
             <li>Description 3</li>
            </ul>
          </div>
      </div>
    </div>
    );
}

export default Detail;