import React from 'react'

import { AiOutlineSearch } from 'react-icons/ai'


const Header = () => {
    return (    
        <div className="nav container-xxl">
                <div className="lineOne row col-12 justify-content-between p-0 m-0 ">
                    <div
                            className="col-6 row p-0 m-0 pl-3"
                    >
                        <div className="menu align-self-center p-1 ">
                                <div
                                    className="menuButton"
                                    
                                    
                                />                    
                        </div>
                        <div className="logo align-self-center p-1 ml-1 ">
                                <div
                                    className="logoIcon ">                       
                                </div>
                        </div>
                    </div>
                    <div
                        className="col-5 row p-0 m-0 pr-3 justify-content-end "
                    >
                        <div className="log   align-self-center p-1 mr-1 ">
                            <div>Sign in</div>
                        </div>
                        <div className="basket align-self-center p-1 ">
                            <div
                                
                                className="basketButton"
                            />

                        </div>
                    </div>
                </div>
                <div className="col-12 row justify-content-center p-0 m-0">
                    <div className="search col-11  ">                   
                    
                        <input 
                            type="text" 
                            name="" 
                            id=""
                            className=" searchInput h-100 px-3 col-11"
                            placeholder="Search Amazon"
                            
                        />           
                    
                        <AiOutlineSearch
                                className="searchIcon p-1 h-100  "
                                size={25}
                                color="black"
                        />
                    </div>
                   
                </div>
                <div className="feature">
                    <div className="featureButton">
                        Best Seller
                    </div>
                    <div className="featureButton">
                       Video
                    </div>
                    <div className="featureButton">
                        Whole Foods
                    </div>
                    <div className="featureButton">
                        New Releases
                    </div>

                    <div className="featureButton">
                       Home
                    </div>
                    <div className="featureButton">
                        Books
                    </div>
                    <div className="featureButton">
                        Pharmacy
                    </div>
                    <div className="featureButton">
                        List
                    </div>
                    <div className="featureButton">
                        PC
                    </div>
                    <div className="featureButton">
                        Health & Household
                    </div>
                    <div className="featureButton">
                        Gift Cards
                    </div>
                    <div className="featureButton">
                        Lievestreams
                    </div>
                    <div className="featureButton">
                        Music
                    </div>
                    <div className="featureButton">
                        Amazon Basics
                    </div>

                </div> 
                {/* <div className="unknown ">
                    deliver to vietnam
                </div> */}

        </div>
 
    )
}

export default Header
