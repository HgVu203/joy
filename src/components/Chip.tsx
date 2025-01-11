import React from 'react'
import UserIcon from '../../public/images/UserIcon'
import XClose from '../../public/images/XClose'
import classNames from 'classnames'


export type TChipProps = {
    hierarchy?: "primary" | "secondary",
    state?: "default" | "hover" | "active",
    color?: "brand" | "rose" | "gray" | "warning" | "success" | "info",
    size?: string,
    text: string,
}
const Chip: React.FC<TChipProps> = ( { hierarchy = "primary", state = "default", color = "brand", size = 'xs', text } ) =>
{
    const styles = {
        container: classNames( "flex items-center gap-2 py-[5px] px-[6px] rounded", {
            //primary
            'text-[#FFFFFF]': hierarchy === "primary" && color !== "brand",
            'bg-[#12DFA3] text-[#042F22]': hierarchy === "primary" && [ "default", "active" ].includes( state ) && color === "brand",
            'bg-[#0DA578] text-[#042F22]': hierarchy === "primary" && state === "hover" && color === "brand",
            'bg-[#F63D68]': hierarchy === "primary" && [ "default", "active" ].includes( state ) && color === "rose",
            'bg-[#E31B54]': hierarchy === "primary" && state === "hover" && color === "rose",
            'bg-[#0D121C]': hierarchy === "primary" && [ "default", "active" ].includes( state ) && color === "gray",
            'bg-[#202939]': hierarchy === "primary" && state === "hover" && color === "gray",
            'bg-[#17B26A]': hierarchy === "primary" && [ "default", "active" ].includes( state ) && color === "success",
            'bg-[#079455]': hierarchy === "primary" && state === "hover" && color === "success",
            'bg-[#F79009]': hierarchy === "primary" && [ "default", "active" ].includes( state ) && color === "warning",
            'bg-[#DC6803]': hierarchy === "primary" && state === "hover" && color === "warning",
            'bg-[#2E6FFF]': hierarchy === "primary" && [ "default", "active" ].includes( state ) && color === "info",
            'bg-[#175CD3]': hierarchy === "primary" && state === "hover" && color === "info",

            //secondary
            'bg-[#E7FDF7] border-[#5AF2C4] text-[#085E44]': hierarchy === "secondary" && [ "default", "active" ].includes( state ) && color === "brand",
            'bg-[#D0FBEE] border-[#5AF2C4] text-[#042F22]': hierarchy === "secondary" && state === "hover" && color === "brand",
            'bg-[#FFF5F6] border-[#FEA3B4] text-[#F63D68]': hierarchy === "secondary" && [ "default", "active" ].includes( state ) && color === "rose",
            'bg-[#FFF1F3] border-[#FEA3B4] text-[#E31B54]': hierarchy === "secondary" && state === "hover" && color === "rose",
            'bg-[#FFFFFF] border-[#E3E8EF] text-[#364152]': hierarchy === "secondary" && [ "default", "active" ].includes( state ) && color === "gray",
            'bg-[#F6F8FB] border-[#E3E8EF] text-[#202939]': hierarchy === "secondary" && state === "hover" && color === "gray",
            'bg-[#F6FEF9] border-[#75E0A7] text-[#17B26A]': hierarchy === "secondary" && [ "default", "active" ].includes( state ) && color === "success",
            'bg-[#ECFDF3] border-[#75E0A7] text-[#079455]': hierarchy === "secondary" && state === "hover" && color === "success",
            'bg-[#FFFCF5] border-[#FEC84B] text-[#F79009]': hierarchy === "secondary" && [ "default", "active" ].includes( state ) && color === "warning",
            'bg-[#FFFAEB] border-[#FEC84B] text-[#DC6803]': hierarchy === "secondary" && state === "hover" && color === "warning",
            'bg-[#F5FAFF] border-[#84CAFF] text-[#2E6FFF]': hierarchy === "secondary" && [ "default", "active" ].includes( state ) && color === "info",
            'bg-[#EFF8FF] border-[#84CAFF] text-[#175CD3]': hierarchy === "secondary" && state === "hover" && color === "info",
        } ),
        size: classNames( {
            'text-xs': size === 'xs',
            'text-md': size === 'md'
        } )
    }
    return (
        <div className={ `${ styles.container } ${ styles.size }` }>
            <UserIcon />
            <div className="flex-1 text-xs leading-[18px]">{ text }</div>
            <XClose />
        </div>
    )
}

export default Chip
