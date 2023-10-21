import React, { useState } from 'react'
import RepeatIcon from '@mui/icons-material/Repeat';
import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import BarChartIcon from '@mui/icons-material/BarChart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FavoriteOutlined } from '@mui/icons-material';
import ReplyModal from './ReplyModal';

const TweetCard = () => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [openReplyModel,setOpenReplyModel]=useState(false);
    const handleOpenReplyModel = () => setOpenReplyModel(true);
    const handleCloseReplyModel = () => setOpenReplyModel(false);


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleDeleteTweet = () => {
        console.log("delete tweet");
        handleClose();
    }

    const handleCreateRetweet = () => {
        console.log("handle create retweet");
    }
    const handleLikeTweet = () => {
        console.log("handle like tweet");
    }
    return (
        <React.Fragment>
            {/* <div className='flex items-center font-semibold text-gray-700 py-2'>
                <RepeatOnIcon/>
                <p>You Retweet</p>
            </div> */}
            <div className='flex space-x-5'>
                <Avatar
                    onClick={() => navigate('/profile/${6}')}
                    className='cursor-pointer'
                    alt='username'
                    src='https://ichef.bbci.co.uk/news/640/cpsprodpb/16FA9/production/_92712149_gettyimages-480164327.jpg'
                />
                <div className='w-full'>
                    <div className='flex justify-between items-center'>
                        <div className='flex cursor-pointer items-center space-x-2'>
                            <span className='font-semibold'>Recep Efe Aksoy</span>
                            <span className='text-gray-600'>@efeaks88 . 2m</span>
                            <img className='ml-2 w-5 h-5' src="https://abs.twimg.com/responsive-web/client-web/verification-card-v2@3x.8ebee01a.png"></img>

                        </div>
                        <div>
                            <Button
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <MoreHorizIcon />
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleDeleteTweet}>Delete</MenuItem>
                                <MenuItem onClick={handleDeleteTweet}>Edit</MenuItem>
                            </Menu>
                        </div>

                    </div>
                    <div className='mt-1'>
                        <div onClick={()=>navigate('/tweet/${3}')} className='cursor-pointer'>
                            <p className='mb-2 p-0'>Tarihte biz;</p>
                            <img className='w-[28rem] border border-gray-400 p-5 rounded-md'
                                src="https://www.worldhistory.org/img/r/p/1000x1200/963.jpg.webp?v=1692528906"
                                alt="" />
                        </div>
                        <div className='py-5 flex flex-wrap justify-between items-center'>
                            <div className='space-x-3 flex items-center text-gray-600'>
                                <ChatBubbleOutlineIcon className='cursor-pointer' onClick={handleOpenReplyModel} />
                                <p>43</p>
                            </div>
                            <div className={'${true? "text-pink-600":"text-gray-600"} space-x-3 flex-items-center'}>
                                <RepeatIcon onClick={handleCreateRetweet} className='cursor-pointer' />
                                <p>10</p>
                            </div>
                            <div className={'${true? "text-pink-600":"text-gray-600"} space-x-3 flex-items-center'}>
                                {true? <FavoriteIcon 
                                onClick={handleLikeTweet} 
                                className='cursor-pointer' />:<FavoriteOutlined 
                                onClick={handleLikeTweet} 
                                className='cursor-pointer' />}
                                <p>10</p>
                            </div>
                            <div className='space-x-3 flex items-center text-gray-600'>
                                <BarChartIcon className='cursor-pointer' onClick={handleOpenReplyModel} />
                                <p>430</p>
                            </div>
                            <div className='space-x-3 flex items-center text-gray-600'>
                                <FileUploadIcon className='cursor-pointer' onClick={handleOpenReplyModel} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section>
                <ReplyModal open={openReplyModel} handleClose={handleCloseReplyModel} />
            </section>
        </React.Fragment>
    )
};

export default TweetCard;