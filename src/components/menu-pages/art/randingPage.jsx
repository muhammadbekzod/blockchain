import React from 'react'


const ArtRandingPage = ({ value }) => {
        return (
                <div>

                        <div className='grid mt-10'>
                                <div className='border rounded-lg w-[30rem] h-[20rem]'>
                                        <div>{value.assets?.description || "no Data"}</div>

                                </div>
                        </div>
                </div>
        )
}

export default ArtRandingPage