import React from 'react'
import PhotoRandingPage from './PhotoRandingPage'
import photo from '../../../mock/photography.json'
const Photography = () => {
        return (
                <div className='flex flex-col items-center justify-center'>
                        <img className='w-[100%]' src="https://lh3.googleusercontent.com/g6IAEmQm0J8J2ZoG0wLS04HEkVC7OvxNON5TvBZ4UR0Jm6LfIH4QwJNLWSnJsnabTnvarLUhpfRw_l-lMSBu6R0ymspZXNnT11YtXw=s2500" alt="data is broken" />
                        <h1 className='text-4xl font-bold mt-10'> Explore Photography</h1>
                        <p className='w-[50%] text-center mt-5'>Photographers are taking the NFT world by storm, and we've got a selection of breathtaking collections from a growing and increasingly global community of creators right here on OpenSea.
                                Browse creations from Justin Aversano, Brooke DiDonato, Platon, The British Journal of Photography, and more.</p>
                        <h1 className='text-3xl font-bold mt-14'>Trending collections in Photography</h1>

                        <div className='grid grid-cols-3 mt-10 gap-8 justify-center items-center p-10'>
                                {photo?.data?.trendingCollections?.edges?.map((value, id) => (
                                        <PhotoRandingPage value={value} key={id} />))
                                }

                        </div>
                </div>
        )
}

export default Photography