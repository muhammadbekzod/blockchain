import React from 'react'

const CollectiblesRanging = ({ value }) => {
        return (
                <div>
                        <div className='border flex flex-col items-center rounded-lg w-auto h-[25rem] cursor-pointer hover:shadow-xl'>
                                <img className='w-[100%] h-40 rounded-t-lg border' src={value.node?.banner || "https://static.vecteezy.com/system/resources/previews/002/303/113/original/nft-non-fungible-token-nft-text-nft-logo-non-fungible-token-poster-new-digital-currency-digital-art-transaction-illustration-background-vector.jpg"} alt="data is error" />
                                <img className='w-14 border-4 border-white rounded-full mt-[-30px]' src={value.node?.logo || "https://static.vecteezy.com/system/resources/previews/002/303/113/original/nft-non-fungible-token-nft-text-nft-logo-non-fungible-token-poster-new-digital-currency-digital-art-transaction-illustration-background-vector.jpg"} alt="data is broken" />
                                <p>{value.node?.name || "data is broken"}</p>
                                <div className='flex text-xs'>by <p className='ml-1 text-[blue] cursor-pointer'> {value.node?.slug || "no Data"}</p></div>
                                <div className='flex text-center mt-10'><p>{value.node?.description}</p></div>
                        </div>
                </div>

        )
}

export default CollectiblesRanging