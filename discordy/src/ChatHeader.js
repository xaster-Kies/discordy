import React from 'react'
import './ChatHeader.css'
import NotificationsIcon from "@material-ui/icons/Notifications"
import EditLocationRoundedIcon from "@material-ui/icons/EditLocationRounded"
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAlt"
import SearchRoundedIcon from "@material-ui/icons/SearchRounded"


function ChatHeader() {
    return (
        <div className="chatHeader">
            <div className="chatHeader__left">
                <span className="chatHeader__hash">#</span>
                    Test Channel Name
            </div>
            <div className="chatHeader__right">
               <NotificationsIcon/>
               <EditLocationRoundedIcon/>
               <PeopleAltRoundedIcon/>

               <div className="chatHeader__search">
                   <input type="text" placeholder="Search"/>
                   <SearchRoundedIcon></SearchRoundedIcon>
               </div>
            </div>
        </div>
    )
}

export default ChatHeader
