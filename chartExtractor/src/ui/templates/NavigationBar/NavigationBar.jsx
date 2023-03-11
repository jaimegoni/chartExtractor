
import "./NavigationBar.css"
import { DropdownMenu } from "../../components/DropdownMenu/DropdownMenu"
import { ChartLink } from "../../components/ChartLink/ChartLink"

export const NavigationBar = ()=>{

    return(    
        <nav className="navigation__bar--nav">

            <div className="navigation__logo--div">
                <img src="./images/logo.jpg" alt="page_logo" className="navigation__logo--img"/>
                <p className="navigation__logo--p"><label>Chart extractor</label></p>
            </div>

            <div className="navigation__bar--div">
                <a className="navigation__link--a" href="/">Home</a>
                <DropdownMenu>

                    <ChartLink
                        imageSource = "./images/logo.jpg"
                        linkLabel = "Line chart"
                        linkHref="/newLineChart"
                    />
                </DropdownMenu>
                <a className="navigation__link--a" href="/about">About</a>
                <a className="navigation__link--a" href="/faq">FAQ</a>
            </div>
    </nav>
)
}