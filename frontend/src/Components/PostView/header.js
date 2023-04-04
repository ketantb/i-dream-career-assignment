import "../styles/header.css"
import { Link } from "react-router-dom";
import { HiOutlineCamera } from 'react-icons/hi';
import { FiTarget } from 'react-icons/fi';
import PostForm from "./post_form";

const Header = () => {
    return (
        <>
            <section className="header">
                <div className="header-body">
                    <Link to="/post-view" id=".txt-decor-none">
                        <div className="header-icon-block">
                            <FiTarget className= "instaclone-icon"/>
                            <div className="instaclone-heading">Instaclone</div>
                        </div>
                    </Link>
                    <div className="header-camera-icon-block">
                        <Link to='/post-form'>
                            <HiOutlineCamera className="header-camera-icon"/>
                        </Link>
                    </div>
                </div>
            </section>
            {/* <PostForm data = {data}/> */}
        </>
    )
}

export default Header;