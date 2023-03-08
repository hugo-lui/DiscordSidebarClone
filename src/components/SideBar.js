import React from "react";
import Icon from "./Icon";
import {BsPlus, BsFillLightningFill, BsGearFill} from 'react-icons/bs';
import {FaFire, FaPoo} from 'react-icons/fa';

export default function SideBar(props) {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">  
            <Icon icon={<FaFire size="28"/>} text="Fire"/>
            <Icon icon={<FaPoo size="24"/>} text="Poo"/>
            <Icon icon={<BsFillLightningFill size="26"/>} text="Lightning"/>
            <Icon icon={<BsGearFill size="26"/>} text="Gear"/>
            <BsPlus className="sidebar-icon text-green-500 hover:text-white hover:bg-green-400" size="32"/>
        </div>
    );
}