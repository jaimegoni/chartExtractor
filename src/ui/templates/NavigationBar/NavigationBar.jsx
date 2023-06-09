
import "./NavigationBar.css"

export const NavigationBar = ()=>{

    return(    
        <nav className="navigation__bar--nav">

            <div className="navigation__logo--div">
                <img src="/images/logo.jpg" alt="page_logo" className="navigation__logo--img"/>
                <p className="navigation__logo--p"><label>Chart extractor</label></p>
            </div>

            <div className="navigation__bar--div">
                <a className="navigation__link--a" href="/">Home</a>
                <a className="navigation__link--a" href="/usage">Usage</a>
                <a className="navigation__link--a" href="/faq">FAQ</a>
            </div>
    </nav>
)
}