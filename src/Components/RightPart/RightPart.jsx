import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { Button } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SubscriptionModal from '../SubscriptionModal/SubscriptionModal';

const RightPart = () => {
    const [openSubscriptionModel, setOpenSubscriptionModel] = React.useState(false);
    const handleOpenSubscriptionModel = () => setOpenSubscriptionModel(true);
    const handleCloseSubscriptionModel = () => setOpenSubscriptionModel(false);
    const handleChangeTheme = () => {
        console.log("handle change theme");
    }
    return (
        <div className='py-5 sticky top'>
            <div className='relative flex items-center'>
                <input type="text" className="py-3 rounded-full text-gray-500 w-full pl-12" />
                <div className='absolute top-0 left-0 pl-3 pt-3'>
                    <SearchIcon className='text-gray-500' />

                </div>
                <Brightness4Icon className='ml-3 cursor-pointer' onClick={handleChangeTheme} />
            </div>
            <section className='my-5'>
                <h1 className='text-xl font-bold'>Sen de aşılanmış kedi ol</h1>
                <h1 className='font-bold my-2'>Daha güvenilir bir sahip(evet bizler sahibiz insanlar evcil hayvan) olmak istiyorsan sen de aşı yaptır.</h1>
                <Button 
                variant='contained' 
                sx={{ padding: "10px", paddingX: "20px", borderRadius: "25px", }}
                onClick={handleOpenSubscriptionModel}
                >
                    Aşı ol
                </Button>
            </section>
            <section className='mt-7 space-y-5'>
                <h1 className='font-bold text-xl py-1'>Miyav miyav miyav?</h1>
                <div>
                    <p className='font-bold'>
                        Trending news for cats;
                    </p>
                </div>
                {[1, 1, 1, 1, 1].map((item) => <div className='flex justify-between w-full'>
                    <div>
                        <p className='text-sm'>Kediler için güncel</p>
                        <p className='font-bold'>#Yaş mama fiyatı</p>
                        <p className='text-gray-500'>10.5B posts</p>
                    </div>
                    <MoreHorizIcon />
                </div>)}
            </section>
            <section>
                <SubscriptionModal open={openSubscriptionModel} handleClose={handleCloseSubscriptionModel}/>
            </section>
        </div>
    )
}

export default RightPart