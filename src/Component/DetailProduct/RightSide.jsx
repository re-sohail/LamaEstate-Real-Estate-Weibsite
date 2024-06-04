import React from 'react'
import '../../index.css'
import utilities from '../../../public/utility.png'
import pet from '../../../public/pet.png'
import fees from '../../../public/fee.png'
import size from '../../../public/size.png'
import bed from '../../../public/bed.png'
import bath from '../../../public/bath.png'
import bus from '../../../public/bus.png'
import school from '../../../public/school.png'
import restaurant from '../../../public/restaurant.png'
import {singlePostData} from '../../Lib/data.js'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";


function RightSide() {
  return (
    <div className='w-[35%] h-heroHeight bg-[#FCF6F3] px-5'>
      <h1 className='text-lg font-medium'>General</h1>
      <div className='bg-white w-full h-auto py-5 mt-3 px-5 rounded-lg'>
        <div className='flex items-center justify-start gap-5'>
          <div className='bg-yellow-50'>
          <img className='w-7' src={utilities} alt="" />
          </div>
          <div>
            <h1 className='text-[14px] font-semibold'>Utilities</h1>
            <h1 className='text-[12px]'>Renter is Responsible</h1>
          </div>
        </div>
        <div className='flex items-center justify-start gap-5 mt-4'>
          <div className='bg-yellow-50'>
          <img className='w-7' src={pet} alt="" />
          </div>
          <div>
            <h1 className='text-[14px] font-semibold'>Pet Policy</h1>
            <h1 className='text-[12px]'>Pets Allowed</h1>
          </div>
        </div>
        <div className='flex items-center justify-start gap-5 mt-4'>
          <div className='bg-yellow-50'>
          <img className='w-7' src={fees} alt="" />
          </div>
          <div>
            <h1 className='text-[14px] font-semibold'>Property Fees</h1>
            <h1 className='text-[12px]'>Must have 3x the rent in total household income</h1>
          </div>
        </div>
      </div>
      <h1 className='text-lg font-medium pt-3'>Room Size</h1>
      <div className='flex items-center justify-between'>
        <div className='bg-white mt-3 gap-2 px-2 w-[150px] h-10 flex items-center justify-start rounded-sm'>
          <img className='w-5' src={size} alt="" />
          <h1 className='text-[12px] font-medium'>80 sqm({singlePostData.size} sqft)</h1>
        </div>
        <div className='bg-white mt-3 gap-2 px-2 w-[80px] h-10 flex items-center justify-start rounded-sm'>
          <img className='w-5' src={bed} alt="" />
          <h1 className='text-[12px] font-medium'>{singlePostData.bedRooms} Bed</h1>
        </div>
        <div className='bg-white mt-3 gap-2 px-2 w-[80px] h-10 flex items-center justify-start rounded-sm'>
          <img className='w-5' src={bath} alt="" />
          <h1 className='text-[12px] font-medium'>{singlePostData.bathroom} Bath</h1>
        </div>
      </div>

      <h1 className='text-lg font-medium pt-5'>Nearby Places</h1>
      <div className='bg-white w-full h-auto py-5 mt-3 px-5 rounded-lg flex items-start justify-between'>
        <div className='flex items-center justify-start gap-3'>
          <div className='bg-yellow-50'>
          <img className='w-6' src={school} alt="" />
          </div>
          <div>
            <h1 className='text-[14px] font-semibold'>School</h1>
            <h1 className='text-[12px]'>{singlePostData.school}</h1>
          </div>
        </div>
        <div className='flex items-center justify-start gap-3'>
          <div className='bg-yellow-50'>
          <img className='w-6' src={bus} alt="" />
          </div>
          <div>
            <h1 className='text-[14px] font-semibold'>Bus Stop</h1>
            <h1 className='text-[12px]'>{singlePostData.bus}</h1>
          </div>
        </div>
        <div className='flex items-center justify-start gap-3'>
          <div className='bg-yellow-50'>
          <img className='w-6' src={restaurant} alt="" />
          </div>
          <div>
            <h1 className='text-[14px] font-semibold'>Restaurant</h1>
            <h1 className='text-[12px]'>{singlePostData.restaurant}</h1>
          </div>
        </div>
      </div>
      <h1 className='text-lg font-medium pt-3'>Location</h1>
      <div className= 'pt-2 overflow-hidden'>
      <MapContainer center={[52.4797, -1.90269]} zoom={7} scrollWheelZoom={false} className="w-full h-[200px] rounded-lg">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      <Marker position={[52.4797, -1.90269]}>
      <Popup>
      </Popup>
    </Marker>
      </MapContainer>
    </div>
    </div>
  )
}

export default RightSide