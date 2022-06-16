import React from 'react'
import TradingCardRanding from './TraingCardRanding'
import tradingCard from '../../../mock/trading cards.json'

const TradingCards = () => {
        return (
                <div className='flex flex-col items-center justify-center'>
                        <img className='w-[100%]' src="https://lh3.googleusercontent.com/8VGubP7xBfRaeO_EslP8yXVyI0sMyfysOnt1NfbBnY6O7djIVrMeCXHZ8Y2hDqu6DEEc7UZqf87CcxxEOlgVDcVG1TTT72KLpi4_G9M=s2500" alt="data is broken" />
                        <h1 className='text-4xl font-bold mt-10'>Explore Trading Cards</h1>
                        <p className='w-[50%] text-center mt-5'>With unique assets traded and stored on the blockchain, classic games are taking on a new life. Decentralized networks mean players and collectors can now trade in-game items on third-party platforms and marketplaces, fundamentally changing the way online ownership is perceived in the digital era.

                                Buy and sell digital collectible trading cards from the likes of Sorare, Gods Unchained, and $MEME on OpenSea.</p>
                        <h1 className='text-3xl font-bold mt-14'>Trending collections in Trading Cards</h1>

                        <div className='grid grid-cols-3 mt-10 gap-8 justify-center items-center p-10'>
                                {tradingCard?.data?.trendingCollections?.edges?.map((value, id) => (
                                        <TradingCardRanding value={value} key={id} />))
                                }

                        </div>
                </div>
        )
}

export default TradingCards