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
    const catNews = [
        {
          title: "Kediler için güncel",
          hashtag: "#Yaş mama fiyatı",
          postCount: "10.5B posts",
        },
        {
          title: "Kediler için güncel",
          hashtag: "#Nereyi ısırmalıyız",
          postCount: "9.5B posts",
        },
        {
          title: "Kediler için güncel",
          hashtag: "#Bakın evi nasıl dağıttım",
          postCount: "9B posts",
        },
        {
          title: "Kediler için güncel",
          hashtag: "#Mart ayine ne kadar kaldi",
          postCount: "10.5B posts",
        },
      ];
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
                {catNews.map((item, index) => (
                  <div key={index} className='flex justify-between w-full'>
                    <div>
                        <p className='text-sm'>{item.title}</p>
                        <p className='font-bold'>{item.hashtag}</p>
                        <p className='text-gray-500'>{item.postCount}</p>
                    </div>
                    <MoreHorizIcon />
                  </div>
                ))}
            </section>
            <section>
                <SubscriptionModal open={openSubscriptionModel} handleClose={handleCloseSubscriptionModel}/>
            </section>
        </div>
    )
}

export default RightPart