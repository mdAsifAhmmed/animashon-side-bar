// import React, { useState } from 'react';
import './SubMenuCss.css'
import { AiFillAudio } from "react-icons/ai";
import { SiAerlingus } from "react-icons/si";
import { FaDollarSign } from "react-icons/fa";
import { IoMdPulse } from "react-icons/io";
import { GiHammerBreak } from "react-icons/gi";
import { GiHangingSpider } from "react-icons/gi";
import { HiUserGroup } from "react-icons/hi";
import { BiTachometer } from "react-icons/bi";
import { HiDatabase } from "react-icons/hi";
import { SiPlayerfm } from "react-icons/si";
import { FaHeadset } from "react-icons/fa";
const SubMenuCom = () => {

    return (
        <>

            <div className="SubMenu__Item">
                <div className="Secend__SubMenu__Item Frist__SubMenu__Item">
                    <ul>
                        <li>
                            <a href="#">
                                Grow
                                    </a>
                        </li>
                        <li>
                            <a href="#">
                                <AiFillAudio className="SubMenu__Icon" />
                                        Aquire
                                    </a>
                        </li>
                        <li>
                            <a href="#">
                                <SiAerlingus className="SubMenu__Icon" />
                                        Game Growth
                                    </a>
                        </li>
                    </ul>
                </div>
                <div className="Secend__SubMenu__Item Frist__SubMenu__Item">
                    <ul>
                        <li>
                            <a href="#">
                                Monetization
                                </a>
                        </li>
                        <li>
                            <a href="#">
                                <FaDollarSign className="SubMenu__Icon" />
                                    Monetize
                                </a>
                        </li>
                    </ul>
                </div>
                <div className="Secend__SubMenu__Item Frist__SubMenu__Item">
                    <ul>
                        <li>
                            <a href="#">
                                Analytics
                                </a>
                        </li>
                        <li>
                            <a href="#">
                                <IoMdPulse className="SubMenu__Icon" />
                                Analytics
                                </a>
                        </li>
                    </ul>
                </div>
                <div className="Secend__SubMenu__Item Frist__SubMenu__Item">
                    <ul>
                        <li>
                            <a href="#">
                                Devops
                                    </a>
                        </li>
                        <li>
                            <a href="#">
                                <GiHammerBreak className="SubMenu__Icon" />
                                        Cloud Build
                                    </a>
                        </li>
                        <li>
                            <a href="#">
                                <GiHangingSpider className="SubMenu__Icon" />
                                        Diagnnostics
                                    </a>
                        </li>
                        <li>
                            <a href="#">
                                <HiUserGroup className="SubMenu__Icon" />
                                        Colaborate
                                    </a>
                        </li>
                        <li>
                            <a href="#">
                                <BiTachometer className="SubMenu__Icon" />
                                        Accelerator
                                    </a>
                        </li>
                    </ul>
                </div>
                <div className="Secend__SubMenu__Item Frist__SubMenu__Item">
                    <ul>
                        <li>
                            <a href="#">
                                Multiplayer
                                    </a>
                        </li>
                        <li>
                            <a href="#">
                                <HiDatabase className="SubMenu__Icon" />
                                        Multiplay
                                    </a>
                        </li>
                        <li>
                            <a href="#">
                                <GiHangingSpider className="SubMenu__Icon" />
                                        Diagnostics
                                    </a>
                        </li>
                        <li>
                            <a href="#">
                                <SiPlayerfm className="SubMenu__Icon" />
                                        Multiplayer
                                    </a>
                        </li>
                        <li>
                            <a href="#">
                                <FaHeadset className="SubMenu__Icon" />
                                        Vivox
                                    </a>
                        </li>
                    </ul>
                </div>
                <div className="Secend__SubMenu__Item Frist__SubMenu__Item">
                    <ul>
                        <li>
                            <a href="#">
                                Backend
                                </a>
                        </li>
                    </ul>
                </div>




            </div>
        </>
    )
}
export default SubMenuCom;