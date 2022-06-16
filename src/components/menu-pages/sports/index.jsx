import React from 'react'
import SportsRandingPage from './SportsRandingPage'
import sports from '../../../mock/sports.json'
const Sports = () => {
        return (
                <div className='flex flex-col items-center justify-center'>
                        <img className='w-[100%]' src="https://lh3.googleusercontent.com/F97uNjhmvg4r91VD4zQ7TZrDwtwjqfbgygv64zrDqKsuITEX9wROYgHSsihHaqCOjhOmNf-IR91v2IJKqQFGEB_1GsSxOi6V0XDl2g=s2500" alt="data is broken" />
                        <h1 className='text-4xl font-bold mt-10'>Explore Sports</h1>
                        <p className='w-[50%] text-center mt-5'>Sporting brands look after some of the most valuable intellectual property on the planet, and companies like Sorare are selling it in the form of digital trading cards right here on our marketplace. We've also got Formula 1 NFTs from Animoca Brands and anticipate a surge of interest from global sports teams looking to tokenize and distribute their collectibles over the coming years. Browse, buy, and sell non-fungible tokens from the worlds of golf, football, racing, and more.</p>
                        <h1 className='text-3xl font-bold mt-14'>Trending collections in Sports</h1>

                        <div className='grid grid-cols-3 mt-10 gap-8 justify-center items-center p-10'>
                                {sports?.data?.trendingCollections?.edges?.map((value, id) => (
                                        <SportsRandingPage value={value} key={id} />))
                                }

                        </div>
                </div>
        )
}

export default Sports