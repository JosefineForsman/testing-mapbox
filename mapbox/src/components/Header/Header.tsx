import './Header.css'
import Login from '../Login/Login'
function Header(){
    return(
        <header className="header">
            <h1 className='header__title'>Mapbox demo</h1>
            <aside className='header__login'>
                <Login/>
            </aside>
        </header>
    )
}
export default Header;