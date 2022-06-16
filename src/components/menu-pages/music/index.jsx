import React from 'react'
import MusicRadingPage from './MusicRadingPage'
import music from '../../../mock/music.json'
const Music = () => {
        return (
                <div className='flex flex-col items-center justify-center'>
                        <img className='w-[100%]' src="https://lh3.googleusercontent.com/AvQukLHo8LVt8fcDkRPi8vxqJ3GUVi6XgKPIR_Z0HFl_JM5PENkOgDwXXA7sWvGGL1ij_tpWGlfiynlN9qdx5YS95wWiHBSidAIcJLc=s2500" alt="data is broken" />
                        <h1 className='text-4xl font-bold mt-10'> Explore Music</h1>
                        <p className='w-[50%] text-center mt-5'>Music NFTs are changing the way fans connect with their favorite artists. From 3LAU to Imogen Heap, all kinds of creators are innovating on the blockchain, and the appetite for change in an industry that so often underserves independent makers is clear.

                                Browse collections from The Weeknd, Richie Hawtin, RAC, and more.</p>
                        <h1 className='text-3xl font-bold mt-14'>Trending collections in Music</h1>

                        <div className='grid grid-cols-3 mt-10 gap-8 justify-center items-center p-10'>
                                {music?.data?.trendingCollections?.edges?.map((value, id) => (
                                        <MusicRadingPage value={value} key={id} />))
                                }

                        </div>
                </div>
        )
}

export default Music