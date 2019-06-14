import React, {FunctionComponent, ReactChild} from 'react'

export interface NavButtonProps {
    href: string,
    type: string,
    children: ReactChild
}

const NavButton: FunctionComponent<NavButtonProps> = ({href, type, children}) => {

    const color = type === "primary" ? "blue" : "grey"

    return (
        <a href={href} className={`${color}-button a-button`}>
            <div>
                <span>{children}</span> <i className="fa fa-arrow-circle-o-right" aria-hidden="true"/>
            </div>
        </a>
    )
}

export default NavButton