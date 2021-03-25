import React from 'react'

import { AiOutlineSearch } from 'react-icons/ai'


const Header = () => {
    return (    
        <div className="nav ">
                               
            <div className="menu align-self-center p-1 py-3 ">
                    <div
                        className="menuButton "                      
                    />                    
            </div>
            <div className="logo align-self-center p-1 ml-1 ">
                    <div
                        className="logoIcon ">                       
                    </div>
            </div>
            <div className="md md__deliver ">
                <div className="md__deliverText1 md__lineone ">Deliver to</div>
                <div className="md__deliverIcon "></div>
                <div  className="md__deliverText2 md__linetwo ">Vietnam</div>
            </div>

            <div className="sm log align-self-center py-1 mr-1 ">
                <span>Sign in</span>
            </div>
            <div className="md md__lang ">
                <div className="md__langFlag ">

                </div>
                <div 
                className="md__langButton "
                
                >

                </div>

                
            </div>

            <div className="md md__log ">
                <div className="md__logText1 md__lineone ">Hello, sign in</div>
                <div className="md__logText2 md__linetwo ">
                    Account & List
                    <div className="md__logButton "></div>
                </div>
                
            </div>
            
            <div className="md md__return ">
                <div className="md__returnText1 md__lineone">Return</div>
                <div  className="md__returnText2 md__linetwo">& Order</div>
            </div>

            <div className="basket align-self-center p-1  ">
                <div
                    
                    className="basketButton "
                />

            </div>                   
                
                
            <div className="search ">                   
            
                <input 
                    type="text" 
                    name="" 
                    id=""
                    className=" searchInput px-3 "
                    placeholder="Search Amazon"
                    
                />           
            
                <AiOutlineSearch
                        className="searchIcon p-1"
                        size={25}
                        color="black"
                />
            </div>
            
               
            <div className="sm feature ">
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
            <div className="md">
                
            </div>


            <div className="sm deliver">
                deliver to vietnam
            </div>

        </div>
 
    )
}

export default Header
