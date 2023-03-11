
import { Children } from "react"
import { useState } from "react"
import "./DropdownMenu.css"

export const DropdownMenu = ({children}) =>{

    const childrenAmount = Children.count(children);

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
                        childrenAmount > 1
                            ?
                        children.map((child) =>(
                                <li className="dropdown__menu--li">{child}</li>
                            )
                        )
                            :
                        <li className="dropdown__menu--li">{children}</li>
                    }
                </ul>
            }
        </div>
    )

}