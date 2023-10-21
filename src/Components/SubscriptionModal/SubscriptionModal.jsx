import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { IconButton } from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    outline: "none",
    border: "none",
    boxShadow: 24,
    p: 4,
    borderRadius: "20px",
};

const features = [
    "Daha az mama reklamları !",
    "Daha fazla sahip daha fazla sevgi",
    "Daha fazla YAŞ MAMA !!",
    "Daha fazla kedi takipçi kazan !"
];

export default function SubscriptionModal({ handleClose, open }) {
    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);
    const [plan, setPlan] = React.useState("Yillik");

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='flex items-center space-x-3'>
                        <IconButton onClick={handleClose} aria-label='delete'>
                            <CloseOutlinedIcon />
                        </IconButton>
                    </div>
                    <div className='flex justify-center py-10'>
                        <div className='w-[80%] space-y-10'>
                            <div className='p-5 rounded-md flex items-center justify-between shadow-lg bg-slate-200'>
                                <h1 className='text-xl pr-5'>Mavi aşılı kediler çok daha fazla sahipleniyor ve takipçi kazanıyor !! </h1>
                                <img className='w-28 h-28' src="https://st.myideasoft.com/shop/yr/99/myassets/blogs/kedi-asisi.jpg?revision=1654089343" alt="kedi aşısı" />
                            </div>
                            <div className='flex justify-between border rounded-full px-5 py-3 border-gray-500'>
                                <div>
                                    <span onClick={() => setPlan("annually")} className={'${plan==="annually"?"text-black":"text-gray-400"}cursor-pointer'}>1 kedi yili üye ol ve </span>
                                    <span className='text-green-500 text-sm ml-5'>%12 indirim kazan !</span>
                                </div>
                                <p onClick={() => setPlan("monthly")} className={'${plan==="monthly"?"text-black":"text-gray-400"} cursor-pointer'}>
                                    1 Aylık istiyorum.
                                </p>
                            </div>

                            <div className='space-y-3'>
                                {features.map((item) => <div className='flex items-center space-x-5'>
                                    <FiberManualRecordIcon sx={{ width: "7px", height: "7px" }} />
                                    <p className='text-sm'>{item}
                                    </p>
                                </div>)}
                            </div>
                            <div className='cursor-pointer flex justify-center bg-gray-900 text-white rounded-full px-5 py-3'>
                                <span className='line-through italic'>₺600</span>
                                <span className='px-5'>₺520/year</span>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}