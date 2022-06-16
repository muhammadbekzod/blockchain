import React from 'react'
import VirtualWorldRanding from './VirtualWorldRanding'
import virtual from '../../../mock/virtual worlds.json'
const VirtualWorlds = () => {
        return (
                <div className='flex flex-col items-center justify-center'>
                        <img className='w-[100%]' src="https://lh3.googleusercontent.com/no-hL6XVnGKTaf7lvLyVaHBnK3wKUWfLP2FPbbxMm6yjosTCtTvPoK6gZnCEkw3NtXFINpKFcqy0JS9UYuu2S-WAnlVnOiB4r-P3=s2500" alt="data is broken" />
                        <h1 className='text-4xl font-bold mt-10'>Explore Virtual Worlds</h1>
                        <p className='w-[50%] text-center mt-5'>Virtual worlds are blockchain-fueled alternative realities where users can create and trade digital goods, play games, and display NFTs in galleries, among other intriguing use cases. Non-fungible token categories like art, collectibles, and domain names are all put to use in the metaverse, with ecosystems built and maintained by the crypto community.

                                Buy and sell land parcels, wearables, and names from projects like Decentraland, Cryptovoxels, Somnium Space, and The Sandbox right here on OpenSea.</p>
                        <h1 className='text-3xl font-bold mt-14'>Trending collections in Virtual Worlds</h1>

                        <div className='grid grid-cols-3 mt-10 gap-8 justify-center items-center p-10'>
                                {virtual?.data?.trendingCollections?.edges?.map((value, id) => (
                                        <VirtualWorldRanding value={value} key={id} />))
                                }

                        </div>
                </div>
        )
}

export default VirtualWorlds