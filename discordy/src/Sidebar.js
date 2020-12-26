import React from 'react'
import './Sidebar.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AddIcon from '@material-ui/icons/Add'
import SidebarChannel from './SidebarChannel'
import SignalCellular from '@material-ui/icons/SignalCellular3Bar'
import InfoOutlineIcon from '@material-ui/icons/Info'
import CallIcon from '@material-ui/icons/Call'





function Sidebar() {
    return (
        <div className="sidebar">
            
            <div className="sidebar__top">
                <h3>Discordy</h3>
                <ExpandMoreIcon/>
            </div>

            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                        <h4>Text Channels</h4>
                    </div>

                    <AddIcon className="sidebar__addChannel"/>
                </div>
                <div className="sidebar_channelsList">
                <SidebarChannel/>
                <SidebarChannel/>
                <SidebarChannel/>
                <SidebarChannel/>
            </div>

            <div className="sidebar__voice">
                <SignalCellular className="sidebar__voiceIcon"
                fontSize="large"/>
                <div className="sidebar__voicei">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>
                <div className="sidebar__voiceIcons">
                    <InfoOutlineIcon/>
                    <CallIcon/>
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default Sidebar
