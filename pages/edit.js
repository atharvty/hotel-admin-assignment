import Navbar from '../components/Navbar'
import { Button, Select } from '@mantine/core'
import { useState } from 'react'
import showErrorNotification from '../lib/notifications/error';
import { useRouter } from 'next/router'
import axios from 'axios'

export default function edit() {
  const [price, setPrice] = useState(null)
  const [email, setEmail] = useState('');
  const [roomType, setRoomtype] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [requestProcessing, setRequestProcessing] = useState(false);
  const [roomNumber, setRoomNumber] = useState("");
  const [oldRoom, setOldRoom] = useState(null);
  const Router = useRouter();



  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }
  const handleRoomTypeChange = (event) => {
    setRoomtype(event.target.value)
  }
  const handleRoomNumberChange = (event) => {
    setRoomNumber(event.target.value)
  }

  const handleStartTimeChange = (event) => {
    setStartTime(event.target.value)
  }

  const handleEndTimeChange = (event) => {
    setEndTime(event.target.value)
  }
  const handleOldRoomNumber = (event) => {
    setOldRoom(event.target.value)
  }


  const editbook = async (e) => {
    e.preventDefault();
    try {
        let data={roomType,roomNumber,oldRoom,email,startTime,endTime};
        console.log(roomType);
        if(roomNumber==oldRoom){
            showErrorNotification('You cannot choose the same room again','Please enter different room number');
        }else{
            var st = Date.parse(startTime)
            var et = Date.parse(endTime)
            var d = new Date();
            if (d.getTime() > st || d.getTime() > et ||st==et) {
              showErrorNotification('Please input the start time and end time correctly', 'The start time or the end time cannot be before the current date and time')
            }else{
                if(st>et){
                    showErrorNotification('Please input the start time and end time correctly', 'The end time should be a date greater than the start time')
                }else{
                    await axios.post('/api/editroom',data);
                    Router.push('/detail');

                }
            }
        }


    } catch (err) {
      console.log(err);
      showErrorNotification('Editing error',err.response.data.description);

    }
  }

  return (
    <div >
      <Navbar />
      <div className="flex flex-col items-center  justify-center min-h-screen bg-gradient-to-r from-gray-800 to-blue-900">
        <div className="w-full max-w-md  mt-4 mb-4 p-8 bg-black   rounded-md shadow-lg">
        <div className="mx-auto max-w-2xl text-center mb-5">
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
         EDIT BOOKING
      </h2>
      <p className="mt-2 text-lg leading-8 text-gray-500">
        Provide us with your room number 
      </p>
    </div>
          <form onSubmit={editbook}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-white font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full px-4 py-2 rounded-md bg-gray-100 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white focus:border-transparent"
                placeholder='Email'
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="mb-4">
              <label  className="block text-white font-semibold mb-2">
                Old Room Number
              </label>
              <input
                type="number"
                name="room"
                id="room"
                className="w-full px-4 py-2 rounded-md bg-gray-100 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white focus:border-transparent"
                required
                value={oldRoom}
                onChange={handleOldRoomNumber}
              />
            </div>
            <div className='mb-4'>
              <label className="block text-white font-semibold mb-2">
                Select Room type
              </label>
              <select class=" w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" onChange={handleRoomTypeChange} >
                <option value='A'>Type A 100INR/hour </option>
                <option value='B'>Type B 80INR/hour</option>
                <option value='C'>Type C 50INR/hour</option>
              </select>
            </div>
            {roomType == 'A' && <div className='mb-4'>
              <label className="block text-white font-semibold mb-2">
                Select Room type
              </label>
              <select class=" w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" onChange={handleRoomNumberChange} >
                <option value='101'>Room No. 101</option>
                <option value='102'>Room No. 102</option>
              </select>
            </div>}
            {roomType == 'B' && <div className='mb-4'>
              <label className="block text-white font-semibold mb-2">
                Select Room type
              </label>
              <select class=" w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" onChange={handleRoomNumberChange} >
                <option value='201'>Room No. 201</option>
                <option value='202'>Room No. 202</option>
                <option value='203'>Room No. 203</option>
              </select>
            </div>}
            {roomType == 'C' && <div className='mb-4'>
              <label className="block text-white font-semibold mb-2">
                Select Room type
              </label>
              <select class=" w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" onChange={handleRoomNumberChange}>
                <option value='301'>Room No. 301</option>
                <option value='302'>Room No. 302</option>
                <option value='303'>Room No. 303</option>
                <option value='304'>Room No. 304</option>
                <option value='305'>Room No. 305</option>
              </select>
            </div>}

            <div className="mb-4">
              <label className="block text-white font-semibold mb-2">
                Start Time
              </label>
              <input
                type="datetime-local"
                name="date"
                id="date"
                className="w-full px-4 py-2 rounded-md bg-gray-100 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white focus:border-transparent"
                value={startTime}
                onChange={handleStartTimeChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-white font-semibold mb-2">
                End Time
              </label>
              <input
                type="datetime-local"
                className="w-full px-4 py-2 rounded-md bg-gray-100 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white focus:border-transparent"
                value={endTime}
                onChange={handleEndTimeChange}
              />
            </div>
            <Button
              type="submit"
              className="w-full px-4 py-2 rounded-md text-white bg-lime-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-blue-600"
            >
              Confirm Editing
            </Button>

          </form>
        </div>
      </div>
    </div>
  )
}
