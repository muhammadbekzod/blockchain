import React from 'react'


const AllNftRandingPage = ({ value }) => {
        console.log("assets datails", value);
        return (
                <div>

                        <div className='grid mt-10'>
                                <div className='border rounded-lg w-[30rem] h-[20rem]'>
                                        <div>
                                                <img src={value?.assets?.image_url || "no image"} alt="" />
                                        </div>
                                        <div>{value?.assets?.description || "no Data"}</div>

                                </div>
                        </div>
                </div>
        )
}

export default AllNftRandingPage