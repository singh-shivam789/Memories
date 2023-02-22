import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./profile.css";

export default function Profile() {
    return (
        <>
            <Topbar></Topbar>
            <div className="profile">
                <Sidebar></Sidebar>
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className="coverPic" src="assets/post/3.jpeg" alt="" />
                            <img className="profilePic" src="assets/person/3.jpeg" alt="" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileUserName"></h4>
                            <span className="profileUserDesc"></span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed></Feed>
                        <Rightbar profile></Rightbar>
                    </div>
                </div>
            </div>
        </>
    )
}
