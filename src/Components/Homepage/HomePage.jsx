import React from 'react'
import user from "../../assets/user.png"
import logo from "../../assets/logo.png"
import setting from "../../assets/setting.png"
import bell from "../../assets/Bell.png"
import TextBtn from './textBtn'
import Boxbtns from './boxbtns'
import { useNavigate } from 'react-router-dom';
import './HomePage.css'


const HomePage = () => {
    const navigate = useNavigate();
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (!loggedInUser) {
        // You can either redirect to the login page or show a message
        navigate("/login");
        return null; // Or you can show a loading spinner/message if you prefer
    }
    return (
        <div className='w-screen'>
            <div className='absolute top-9 left-0 w-full flex items-center space-x-4'> 
                <img src={user} alt='user photo' className='ml-20 mt-2'></img>
                <div className=' pl-6 flex items-center flex-col '>
                    <span className="text-2xl font-medium tracking-wider uppercase text-black" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>{loggedInUser?.name}</span>
                    <span className="text-zinc-800 font-mono tracking-wider uppercase text-l" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>{loggedInUser?.post}</span>
                </div>
                <img src={logo} alt='user photo' className='ml-40 mt-2'></img>
                <img 
                    src={setting} alt='seting photo' className='ml-80 mt-2'  
                    style={{ width: '100px', height: 'auto', cursor: 'pointer' }}  
                    onClick={() => navigate(`/settingsPage`)}
                />
            </div>
            <hr className="mt-30 w-250 ml-40 border-t-3 border-black" />
            <div className='flex ml-30 '>
                <div className='flex flex-col'>
                    <h2 
                        className="text-3xl mt-6 font-semibold tracking-widest uppercase text-black" 
                        style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                        PRINT LISTS
                    </h2>
                    <TextBtn onClick='equipments'>Equipments</TextBtn>
                    <TextBtn onClick='bookings'>Bookings</TextBtn>
                    <TextBtn onClick='courts'>Courts</TextBtn>
                    <TextBtn onClick='sports'>Sports</TextBtn>
                    <TextBtn onClick='receipts'>eqp receipts</TextBtn>
                </div>
                <div className="h-110 border-l-3 border-black ml-5"></div>
                <div>
                    <div className='flex'>
                        <Boxbtns onClick='edit'>edit<br/>court</Boxbtns>
                        <Boxbtns onClick='teambookings'>Team<br/>booking</Boxbtns>
                        <Boxbtns onClick='edit'>edit<br/>booking</Boxbtns>
                    </div>
                    <div className='flex mt-3'>
                        <Boxbtns onClick='edit'>feedbacks</Boxbtns>
                        <Boxbtns onClick='edit'>complaints</Boxbtns>
                        <Boxbtns onClick='edit'>sport<br/>edit</Boxbtns>
                    </div>
                    <Boxbtns onClick='edit'>equipments</Boxbtns>
                    <button 
                    onClick={() => {
                    // navigate('/')
                    }}
                        type="button"
                        className="flex items-center gap-3 bg-black ml-140 w-60 h-14 uppercase cursor-pointer" 
                        style={{ 
                            outlineStyle:"none",
                            borderRadius: '15px', 
                            display: 'flex', 
                            padding:'1',
                            boxShadow   : "0 4px 8px rgba(0, 0, 0, 0.3)"
                        }}
                        >
                        <img 
                            src={bell} 
                            alt="icon" 
                            style={{width: '40px', height: '40px' }}
                        />
                        <span className='tracking-[0.2rem] text-blue-200'>
                            Push<br />Notifications
                        </span>
                    </button>
                </div>
            </div>
        </div>  
    )
}

export default HomePage;
