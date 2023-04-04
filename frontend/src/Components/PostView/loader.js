import "../styles/loader.css"
import { RotatingLines } from 'react-loader-spinner'
const Loader = () => {
    return (
        <>
            <div id="loader-body">
                <RotatingLines
                    strokeColor="grey"
                    strokeWidth="4"
                    animationDuration="0.9"
                    width="30"
                    visible={true}
                />
            </div>
        </>
    )
}

export default Loader;