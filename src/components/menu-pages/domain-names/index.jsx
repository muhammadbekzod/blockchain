import React from 'react'
import DomainRadingPage from './DomainRadingPage'
import domain from '../../../mock/domain names.json'
const DomainNames = () => {
        return (
                <div className='flex flex-col items-center justify-center'>
                        <img className='w-[100%]' src="https://lh3.googleusercontent.com/eSyL2ho1uDpSXApV-VHWTCR9xaV4wckPvBIh4rhz3gaBDzEVX1ElT5JWySJRPJKIxiZSnKdcCMlgk6PCfeh9D7a3TQmKeZ3o-1cF=s2500" alt="data is broken" />
                        <h1 className='text-4xl font-bold mt-10'> Explore Domain Names</h1>
                        <p className='w-[50%] text-center mt-5'>Blockchain domains have two key use cases; turning hexadecimal wallet addresses into human-readable names and enabling censorship-resistant websites. As a result, trading crypto domains is big business for speculators, NFT traders, and metaverse natives alike. If the sale of "sex.crypto" for 230 ETH (~$90k) on OpenSea is anything to go by, the market could explode as adoption increases over the coming months and years.

                                Buy and sell domain names from Ethereum Name Service (ENS), Unstoppable Domains, and Decentraland Names on OpenSea..</p>
                        <h1 className='text-3xl font-bold mt-14'>Trending collections in Domain Names</h1>

                        <div className='grid grid-cols-3 mt-10 gap-8 justify-center items-center p-10'>
                                {domain?.data?.trendingCollections?.edges?.map((value, id) => (
                                        <DomainRadingPage value={value} key={id} />))
                                }

                        </div>
                </div>
        )
}

export default DomainNames