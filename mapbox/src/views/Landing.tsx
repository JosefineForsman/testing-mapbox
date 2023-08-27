import Login from "../components/Login/Login";
import './Landing.css'
function Landing(){

    return(
        <section className="landing">
            <h1 className="landing__title">Welcome!</h1>
            <Login/>
        </section>
    )
}
export default Landing;