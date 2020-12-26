import React from 'react'
import './ChatHeader.css'
import NotificationsIcon from "@material-ui/icons/Notifications"
import EditLocationRoundedIcon from "@material-ui/icons/EditLocationRounded"
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAlt"


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
            </div>
        </div>
    )
}

export default ChatHeader
