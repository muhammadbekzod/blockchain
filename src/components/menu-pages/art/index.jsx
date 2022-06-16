import React from 'react'
import ArtRandingPage from './randingPage'
import assets from '../../../mock/assets.json'

console.log("data", assets);

const Art = () => {
        return (
                <div className='flex flex-col items-center justify-center'>
                        <img className='w-[100%]' src="https://lh3.googleusercontent.com/kVVevhk9BBE5BSuIoQfkH5_5FVsPTJCR34wpVBf1ACURh9dfNaybChPgiicte10yb6SYVp5iMQNXaQrOnHXmRiiOtVxUzYJR3M1I=s2500" alt="" />
                        <h1 className='text-4xl font-bold mt-10'> Explore Art</h1>
                        <p className='w-[50%] text-center mt-5'>An online community of makers, developers, and traders is pushing the art world into new territory. It all started with CryptoPunks, a set of 10,000 randomly generated punks that proved demand for the digital ownership of non-physical items and collectibles in 2017, and the market has evolved rapidly ever since.

                                As the underlying technology develops, a growing pool of artists are selling verified, immutable works to art lovers and speculators, and the space as a whole is waking up to the power and potential of decentralized networks and currencies. With creators and collectors generating meaningful revenue through an entirely digital ecosystem, the tokenization of gifs, memes, and MP4s is emerging as the most exciting and relevant blockchain use case. From SuperRare to Josie to JOY, browse and trade NFTs from some of the world's top crypto artists on OpenSea.</p>
                        <h1 className='text-4xl font-bold mt-14'>Trending collections in Art</h1>

                        <div className='grid grid-cols-3 mt-10 gap-8 justify-center items-center p-10'>
                                {assets.map((value, id) => (
                                        < ArtRandingPage value={value} key={id} />))
                                }

                        </div>
                </div>
        )
}

export default Art