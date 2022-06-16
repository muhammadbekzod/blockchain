import React from 'react'

const Hero = () => {
    return (

        <div className="before:content-['']  before:bg-red-500  before:absolute 
       before:top-0 before:left-0 before:right-0 before:bottom-0
       before:bg-[url('https://lh3.googleusercontent.com/soR6JAuB0k-X3Az9G8-NJG9Cfoc4kyfgPUCYVtp6Ker9QQSHg9UQA52eFduoL_v_E5dHnnaB3LtZjBIAZdH6p5e2rLOm7aVm6eVoMg=w600')]
       before:bg-cover before:bg-bottom before:opacity-20 before:blur
       lg:h-[36rem]">
            <div className='flex flex-col items-center mt-10'>
                <h1 className='text-5xl font-bold'>Discover paint, collect, and sell extraordinary NFTs</h1>
                <p className='text-2xl m-4'>YU NFT market is made by Yeungnam University students.</p>
                <div className='flex gap-10 mt-5'>
                    <div className='flex flex-col'>

                        <div className='border w-[18rem] h-[18rem] rounded-md'>
                            <img className='h-[100%] flex justify-center' src="https://i.pinimg.com/originals/6c/79/ac/6c79ac1ee58b1ab90d7bbc0beab77a1a.jpg" alt="data is broken" />
                        </div>
                        <div className='flex cursor-pointer border mt-5 h-14 rounded-md justify-center items-center bg-slate-500 text-white font-bold'>My NFT</div>
                    </div>
                    <div>
                        <div className='border w-[18rem] h-[18rem] rounded-md '>
                            <img className='h-[100%] flex justify-center' src="https://mobcompany.info/wp-content/uploads/2019/09/02-84.jpg" alt="data is broken" />
                        </div>
                        <div className='flex cursor-pointer border mt-5 h-14 rounded-md justify-center items-center bg-slate-500 text-white font-bold'>Make NFT</div>
                    </div>
                    <div>

                        <div className='border w-[18rem] h-[18rem] rounded-md'>
                            <img className='h-[100%] flex justify-center' src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/224431915/original/d5140f0cac6735519dcc60aa898ebb18a1c8049d/make-10-000-unique-nfts.jfif" alt="data is broken" />
                        </div>
                        <div className='flex cursor-pointer border mt-5 h-14 rounded-md justify-center items-center bg-slate-500 text-white font-bold'>Make NFT</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero