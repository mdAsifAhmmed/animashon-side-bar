import React, { useState } from 'react';
import './SectionCss.css';
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import SubMenu from '../SubMenu/SubMenuApp'

const SectionCom = () => {
    const [state, setstate] = useState();
    const ShowSlider = () => setstate(!state);
    return (
        <>
            <section className="Mein">
                <div className="Section__Whapper">
                    <div className="icon">
                        <a href="#" className="icons">
                            <AiOutlineMenu onClick={ShowSlider} />
                        </a>
                    </div>
                    <div className={state ? 'SubMenu' : 'SubMenu__active'}>
                        <div className="SideNav">
                            <div className="SideNav__Whapper">
                                <div className="Cloc__icon">
                                    <a href="#" className="Cloc__icons">
                                        <AiOutlineClose className="SubMenu__Close__icon Close_Animishon" onClick={ShowSlider} />
                                    </a>
                                </div>
                                <SubMenu />
                            </div>
                        </div>
                    </div>
                    <div className="Content">
                        <div className="Content__whapper">
                            <h2 className="Section__Hadding__text">Welcome</h2>
                            <h4>Freelancer Asif</h4>
                            <p>
                                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available
                            </p>
                            <button className="display__btn btn">Read More</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default SectionCom;