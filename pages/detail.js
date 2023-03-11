import { Navbar } from '@mantine/core'
import React from 'react'
import { useRouter } from 'next/router'
import NavBar from '../components/Navbar'
import axios from 'axios'
const detail = () => {
    const router=useRouter();
    const {email,roomType,roomNumber,startTime,endTime,price}=router.query;
    const book=async()=>{
        try{
            let data = { email: email, roomType: roomType, roomNumber: roomNumber, startTime: startTime, endTime: endTime, price: price };
            await axios.post('/api/rooms',data)
            router.push('/');
            alert("Congragulations Booking done!! You will be redirected to the main page");
        }catch(err){
            console.log(err);
        }
    }
  return (
    <div>
        <NavBar/>
           <div>
      <div class="grid h-screen place-items-center ">
          <h1 className="text-black font-bold font-sans text-4xl sm:text-2xl md:text-3xl ">Confirm your Booking here - Step 2/2 </h1>
        <div class="w-full max-w-sm bg-black border border-gray-500  shadow ">
          <a href="#">
            <img
              class="p-8 rounded-t-lg"
              src="https://www.instantworldbooking.com/directory/India/img/hotelgayatriresidency_agra_img.20171110.wa0006.jpg"
              alt="product image"
            />
          </a>
          <div class="px-5 pb-5">
            <a href="#">
              <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Room selected {roomNumber}
              </h5>
            </a>

            <div class="flex items-center justify-between">
              <span class="text-3xl font-bold text-gray-900 dark:text-white">
                    Amount to pay INR {price}
              </span>
              <a
                onClick={book}
                class="text-white bg-lime-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:focus:ring-blue-800 cursor-pointer"
              >
                Confirm Booking
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default detail