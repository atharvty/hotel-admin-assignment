import React from 'react'
import NavBar from '../components/Navbar'
import axios from 'axios'
import { useState } from 'react'
const history = () => {
    const [data, setdata] = useState([])

    async function load() {

        try {
            const response = await axios.get('/api/history')
            setdata(response.data);
        } catch (err) {
            console.log(err);
        }
    }
    load();

    return (
        <div>
            <NavBar />

            <h1 class="text-2xl text-center font-bold mt-4">Current Bookings</h1>
            <div className="flex flex-wrap justify-center">
                {data.map((card) => (
                    <div key={card.id} className="m-4 max-w-sm bg-lime-300 rounded overflow-hidden shadow-lg">
                        <div className="px-6 py-4">
                            <a href="#">
                                <img
                                    class="p-8 rounded-t-lg"
                                    src="https://www.instantworldbooking.com/directory/India/img/hotelgayatriresidency_agra_img.20171110.wa0006.jpg"
                                    alt="product image"
                                />
                            </a>
                            <div className=" text-l mb-2">Registered Email : {card.email}</div>
                            <div className=" text-xl mb-2">{card.startTime} TO {card.endTime}</div>
                            <div className='flex flex-row justify-between mt-10'>
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">
                                    Room Chosen {card.roomNumber}
                                </h5>
                                <p className="text-gray-900 text-base mb-5">₹{card.price}</p>

                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default history