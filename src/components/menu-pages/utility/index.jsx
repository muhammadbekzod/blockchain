import React from 'react'
import utility from '../../../mock/utility.json'
import UtilityRandingPage from './UtilityRandingPage'
const Utility = () => {
        return (
                <div className='flex flex-col items-center justify-center'>
                        <img className='w-[100%]' src="https://lh3.googleusercontent.com/Vw6MpADIga_ZwmXOmclK87L8ax6pI_DylBcn-69kcr1Uhgw5Ij2RvXJD2MFJ0VarfIGeoFZw7NvpGLePX3e2VMztvg7XCQDNo12dLQ=s2500" alt="data is broken" />
                        <h1 className='text-4xl font-bold mt-10'>Explore Utility</h1>
                        <p className='w-[50%] text-center mt-5'>Whether it's redeemable rewards or membership NFTs, a rising number of creators and developers are leveraging blockchain-backed tokens to build and support their communities. Buy and sell scarce digital goods from the likes of POAP, Urbit ID, and Polyient Games.</p>
                        <h1 className='text-3xl font-bold mt-14'>Trending collections in Utility</h1>

                        <div className='grid grid-cols-3 mt-10 gap-8 justify-center items-center p-10'>
                                {utility?.data?.trendingCollections?.edges?.map((value, id) => (
                                        <UtilityRandingPage value={value} key={id} />))
                                }

                        </div>
                </div>
        )
}

export default Utility