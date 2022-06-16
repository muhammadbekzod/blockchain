
import React from 'react'
// import opensealogo from '../../assets/img/opensea.png'
import { AiOutlineSearch } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineAccountBalanceWallet } from 'react-icons/md'
import { Link } from 'react-router-dom'

const style = {
  nav: `flex `,
  dropcontainer: ``,
  container: `sticky top-0 z-10 `,
  wrapper: ` bg-white  w-screen px-[1.1rem] py-[0.8rem] flex shadow-[0_35px_60px_-2px_rgba(0,0,0,0.2)]`,
  logoContainer: `flex mr-[10rem] items-center cursor-pointer`,
  logoText: ` ml-[0.8rem] text-black font-bold text-2xl`,
  searchBar: `flex flex-1 mx-[0.8rem] w-max-[600px] items-center bg-[#fffff] rounded-[0.6rem] border-solid border-2 border-slate-300`,
  searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
  searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0  ring-0 px-2 pl-0 text-[black] placeholder:text-[#8a939b]`,
  headerItems: ` flex items-center justify-end`,
  headerItem: `text-white px-4 font-bold text-[#808080]  hover:text-black cursor-pointer`,
  navmaincon: ` w-[14rem] bg-white mt-3 shadow-[0_35px_60px_-2px_rgba(0,0,0,0.2)] rounded-b-lg `,
  navcon: `text-white px-4 font-bold text-[#808080]  hover:text-black cursor-pointer h-12 border-b-[1px] items-baseline  hover:shadow-[0px_0px_5px_3px_rgba(0,0,0,0.2)]`,
  headerIcon: `text-[#8a939b] text-3xl font-black px-4 hover:text-black cursor-pointer`,
  context: `pt-3 pb-3 text-[#808080]`,
}

const Navbar = () => {
  return (
    <div className={style.nav}>
      <div className={style.container}>
        <div className={style.wrapper}>
          <div >
            <Link to="/">
              <div className={style.logoContainer}>
                <div className={style.logoText}>OpenSea</div>
              </div>
            </Link>
          </div>
          <div className={style.searchBar}>
            <div className={style.searchIcon}>
              <AiOutlineSearch />
            </div>
            <input
              className={style.searchInput}
              placeholder="Search items, collections, and accounts"
            />
          </div>
          <div className={style.headerItems}>
            <div className="group dropdown relative  cursor-pointer px-4 font-bold tracking-wide text-[#808080] hover:text-black">
              <div>
                <Link to='/expore'>
                  <div className={style.headerItem}>
                    <div className={style.context}>Explore</div>
                  </div>
                </Link>
              </div>

              <div className="dropdown-menu absolute hidden h-auto group-hover:block">
                <ul className={style.navmaincon}>
                  <Link to='all-nfts'>
                    <div className={style.navcon}>
                      <div className={style.context}>All NFTs </div>
                    </div>
                  </Link>
                  <Link to='/art'>
                    <div className={style.navcon}>
                      <div className={style.context}>Art</div>
                    </div>
                  </Link>
                  <Link to='/collectibles'>
                    <div className={style.navcon}>
                      <div className={style.context}>Collectibles</div>
                    </div>
                  </Link>
                  <Link to='domain-names'>
                    <div className={style.navcon}>
                      <div className={style.context}>Domain Names</div>
                    </div>
                  </Link>
                  <Link to='music'>
                    <div className={style.navcon}>
                      <div className={style.context}>Music</div>
                    </div>
                  </Link>
                  <Link to='/photohtaphy'>
                    <div className={style.navcon}>
                      <div className={style.context}>Photography</div>
                    </div>
                  </Link>
                  <Link to='sports' >
                    <div className={style.navcon}>
                      <div className={style.context}>Sports</div>
                    </div>
                  </Link>
                  <Link to='trading-cards'>
                    <div className={style.navcon}>
                      <div className={style.context}>Trading Cards</div>
                    </div>
                  </Link>
                  <Link to='/utility' >
                    <div className={style.navcon}>
                      <div className={style.context}>Utility</div>
                    </div>
                  </Link>
                  <Link to='/virtual-worlds'>
                    <div className={style.navcon}>
                      <div className={style.context}>Virtual Worlds</div>
                    </div>
                  </Link>
                </ul>
              </div>
            </div>


            <div>
              <div className={style.headerIcon}>
                <CgProfile />
              </div>
            </div>
            <div>
              <div className={style.headerIcon}>
                <MdOutlineAccountBalanceWallet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
