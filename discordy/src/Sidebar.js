import React from 'react'
import './Sidebar.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AddIcon from '@material-ui/icons/Add'
import SidebarChannel from './SidebarChannel'
import SignalCellular from '@material-ui/icons/SignalCellular3Bar'
import InfoOutlineIcon from '@material-ui/icons/Info'
import CallIcon from '@material-ui/icons/Call'
import { Avatar } from '@material-ui/core'
import MicIcon from '@material-ui/icons/Mic'
import HeadsetIcon from '@material-ui/icons/Headset'
import SettingIcon from '@material-ui/icons/Settings'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'







function Sidebar() {
    const user =  useSelector(selectUser);
    return (
        <div className="sidebar">
            
            <div className="sidebar__top">
                <h3>Discordy</h3>
                <ExpandMoreIcon/>
            </div>

            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                        <h4>Text Channel</h4>
                    </div>

                    <AddIcon className="sidebar__addChannel"/>
                </div>
                <div className="sidebar_channelsList">
                <SidebarChannel/>
                <SidebarChannel/>
                <SidebarChannel/>
                <SidebarChannel/>
            </div>
            </div>

            <div className="sidebar__voice">
                <SignalCellular className="sidebar__voiceIcon"
                fontSize="large"/>

                <div className="sidebar__voiceInfo">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>

                <div className="sidebar__voiceIcons">
                    <InfoOutlineIcon/>
                    <CallIcon/>
                </div>
            </div>
            
            <div className="sidebar__profile">
                <Avatar src={user.photo}/>
                <div className="sidebar__profile__Info">
                    <h3>{user.dispalyName}</h3>
                    <p>#thisismyid</p>
                </div>

                <div className="sidebar__profile__Icons">
                    <MicIcon/>
                    <HeadsetIcon/>
                    <SettingIcon/>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
