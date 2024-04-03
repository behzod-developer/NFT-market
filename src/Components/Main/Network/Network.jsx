import React from 'react'
import './Network.css'
import Network_Img from '../../../assets/01.png'
import photo_user from '../../../assets/photo-user.png'
import user_box from '../../../assets/user.png'


function Network() {
    return (
        <div className='network-container'>
            <div>
                <img className='network-img' src={Network_Img} alt="" />
            </div>
            <div className='network-text'>
                <h1>the creator <br /> network®</h1>
                <div className='text-parent'>
                    <div className='text-parent'>
                        <div>
                            <img src={photo_user} alt="" />
                        </div>
                        <div>
                            <p>Creator</p>
                            <h3>Enrico Cole</h3>
                        </div>
                    </div>
                    <div>
                        <div className="text-parent">
                            <div>
                                <img src={user_box} alt="" />
                            </div>
                            <div>
                                <p>Instant price</p>
                                <h3>3.5 ETH</h3>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='network-text-border'>
                    <span>Current Bid</span>
                    <h2>1.00 ETH</h2>
                    <h3 className='silver'>$3,618.36</h3>
                    <p>Auction ending in</p>
                    <div className='flex'>
                        <div>
                            <h4>19</h4>
                            <p className='silver'>Hrs</p>
                        </div>
                        <div>
                            <h4>24</h4>
                            <p className='silver'>mins</p>
                        </div>
                        <div>
                            <h4>19</h4>
                            <p className='silver'>secs</p>
                        </div>
                    </div>
                </div>
                <button className=' network-btn-1'>Place a bid</button><br />
                <button className=' network-btn-2'>View item</button>
            </div>

        </div>
    )
}

export default Network