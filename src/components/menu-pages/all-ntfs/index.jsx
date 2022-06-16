import React from 'react'
import AllNftRandingPage from './AllNftRandingPage'
import assets from '../../../mock/assets.json'

console.log("data", assets);
const AllNfts = () => {
        return (
                <div className='flex flex-col items-center justify-center'>

                        <div className='grid grid-cols-3 mt-10 gap-8 justify-center items-center p-10'>
                                {assets.map((value, id) => (
                                        <AllNftRandingPage value={value} key={id} />))
                                }
                                {/* {collections.edges.map(() => (
                        <ArtRandingPage key={index} collection={collection} />
                ))} */}
                        </div>
                </div>
        )
}

export default AllNfts