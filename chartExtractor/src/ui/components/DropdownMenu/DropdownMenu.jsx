
import { useState } from "react"
import "./DropdownMenu.css"

export const DropdownMenu = ({children}) =>{

    const [isDisplayed, setIsDisplayed] = useState(false);

    const hoverOn = () => {
        setIsDisplayed(true)
    }

    const hoverOff = () => {
        setIsDisplayed(false)
    }

    return(
        <div className="dropdown__menu--div" onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
            <p className="dropdown__menu--p">Extract new chart</p>
            {
                isDisplayed
                    &&
                <ul className="dropdown__menu--ul">
                    {
                        children.map((child) =>(
                                <li className="dropdown__menu--li">{child}</li>
                            )
                        )
                    }
                </ul>
            }
        </div>
    )

}