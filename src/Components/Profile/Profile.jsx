import React, { useState } from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';
import { Avatar, Box, Button, Tab, Tabs } from '@mui/material';
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import TweetCard from '../HomeSection/TweetCard';
import ProfileModal from './ProfileModal';

const Profile = () => {
    const [tabValue, setTabValue] = useState('1');
    const navigate = useNavigate();
    const [openProfileModel,setOpenProfileModel]=useState(false);
    const handleOpenProfileModel = () => setOpenProfileModel(true);
    const handleClose = () => setOpenProfileModel(false);

    
    const handleBack = () => {
        navigate(-1);
    }

    const handleFollowUser = () => {
        console.log('Follow user');
    }
    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
        if (newValue ===4) {
            console.log('likes tweets');
        }else if(newValue==1){
            console.log('user tweets');
        }
    };

    //img className='w-[100%] h-[15rem] object-cover'
    return (
        <div>
            <section className={'bg-white z-50 flex items-center sticky top-0 bg-opacity-95'}>
                <KeyboardBackspaceIcon className='cursor-pointer' onClick={handleBack} />
                <h1 className='py-5 text-xl font-bold opacity-90 ml-5'>Recep Efe Aksoy</h1>
            </section>

            <section>
                <img className='w-[100%] h-[20rem]' src="https://cdn.pixabay.com/photo/2023/04/19/19/46/gosling-7938451_1280.jpg" alt="Civciv Resmi" />
            </section>
            <section className='pl-6'>
                <div className='flex justify-between items-start mt-5 h-[5rem]'>
                    <Avatar
                        className='transform -translate-y-24'
                        alt='Recep Efe Aksoy' src='https://ichef.bbci.co.uk/news/640/cpsprodpb/16FA9/production/_92712149_gettyimages-480164327.jpg'
                        sx={{ width: "10rem", height: "10rem", border: "4px solid white" }}
                    />

                    {true ? <Button
                        onClick={handleOpenProfileModel}
                        variant='contained' sx={{ borderRadius: "20px" }}>Edit Profile
                    </Button> : <Button
                        onClick={handleFollowUser}
                        variant='contained' sx={{ borderRadius: "20px" }}>{true ? 'Follow' : 'UnFollow'}
                    </Button>}

                </div>
                <div>
                    <div className='flex items-center'>
                        <h1 className='font-bold text-lg'>Recep Efe Aksoy</h1>
                        {true && (
                            <img className='ml-2 w-5 h-5' src="https://abs.twimg.com/responsive-web/client-web/verification-card-v2@3x.8ebee01a.png"></img>
                        )}
                    </div>
                    <h1 className='text-gray-500'>@efeaks88</h1>
                </div>
                <div className='mt-2 space-y-3'>
                    <p>Java developer</p>
                    <div className='py-1 flex space-x-5'>
                        <div className='flex items-center text-gray-500'>
                            <CakeOutlinedIcon />
                            <p className='ml-2'>1998 Doğumlu</p>
                        </div>
                        <div className='flex items-center text-gray-500'>
                            <LocationOnIcon />
                            <p className='ml-2'>Turkey</p>
                        </div>
                        <div className='flex items-center text-gray-500'>
                            <CalendarMonthIcon />
                            <p className='ml-2'>Temmuz 2018 tarihinde katıldı</p>
                        </div>
                    </div>
                    <div className='flex items-center space-x-5'>
                        <div className='flex items-center space-x-1 font-semibold'>
                            <span>100</span>
                            <span className='text-gray-500'>Followers</span>
                        </div>
                        <div className='flex items-center space-x-1 font-semibold'>
                            <span>90</span>
                            <span className='text-gray-500'>Following</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-5'>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={tabValue}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleTabChange} aria-label="lab API tabs example">
                                <Tab label="Tweets" value="1" />
                                <Tab label="Replies" value="2" />
                                <Tab label="Media" value="3" />
                                <Tab label="Likes" value="4" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            {[1,1,1,1,1].map((item) => <TweetCard/>)
                            }
                        </TabPanel>
                        <TabPanel value="2">Users Replies</TabPanel>
                        <TabPanel value="3">Media</TabPanel>
                        <TabPanel value="4">Likes</TabPanel>
                    </TabContext>
                </Box>
            </section>
            <section>
                <ProfileModal handleClose={handleClose} open={openProfileModel}/>
            </section>
        </div>
    )
}

export default Profile