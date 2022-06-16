import React from 'react'
import CollectiblesRanging from './CollectiblesRanging'
import collectibles from '../../../mock/collectibles.json'
const Collectibles = () => {
        return (
                <div className='flex flex-col items-center justify-center'>
                        <img className='w-[100%]' src="https://lh3.googleusercontent.com/l8oHCZk1C7EsY4Up-84SzLRwBGrRCDh7Z5k8WDnWIU1749AFyGY-ULYvZ952vKUhOydLrbdZHwjr50ARrqE2kYPEMqwHhg72d1JthQ=s2500" alt="" />
                        <h1 className='text-4xl font-bold mt-10'> Explore Collectibles</h1>
                        <p className='w-[50%] text-center mt-5'>The way we value internet-native items is changing with the development of blockchain technology. Kittens, punks, and memes are now trading digital wallets for cryptocurrencies, and the online collectibles market is taking shape before our eyes.

                                Scarce digital property is cropping up in all kinds of industries around the world, and OpenSea is on a mission to house internet goods from all corners of the ecosystem. Own, buy, and sell rare and exclusive NFTs from CryptoKitties, Axie Infinity, and beyond.</p>
                        <h1 className='text-3xl font-bold mt-14'>Trending collections in Collectibles</h1>

                        <div className='grid grid-cols-3 mt-10 gap-8 justify-center items-center p-10'>
                                {collectibles?.data?.trendingCollections?.edges?.map((value, id) => (
                                        <CollectiblesRanging value={value} key={id} />))
                                }

                        </div>
                </div>
        )
}

export default Collectibles