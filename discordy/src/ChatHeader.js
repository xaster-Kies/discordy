import React from 'react'
import './ChatHeader.css'
import NotificationsIcon from "@material-ui/icons/Notifications"
import EditLocationRoundedIcon from "@material-ui/icons/EditLocationRounded"
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAlt"
import SearchRoundedIcon from "@material-ui/icons/SearchRounded"
import SendRoundedIcon from "@material-ui/icons/SendRounded"
import HelpRoundIcon from "@material-ui/icons/HelpRounded"



function ChatHeader() {
    return (
        <div className="chatHeader">
            <div className="chatHeader__left">
                
                <h3>
                    <span className="chatHeader__hash"># 
                    </span>
                    TestChannel
                </h3>
                
            </div>
            <div className="chatHeader__right">
               <NotificationsIcon/>
               <EditLocationRoundedIcon/>
               <PeopleAltRoundedIcon/>

               <div className="chatHeader__search">
                   <input type="text" placeholder="Search"/>
                   <SearchRoundedIcon></SearchRoundedIcon>
               </div>

               <SendRoundedIcon/>
               <HelpRoundIcon/>
            </div>
        </div>
    )
}

export default ChatHeader
