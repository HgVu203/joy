import classNames from "classnames"
import Left from "../../public/images/Left"
import Loading from "../../public/images/Loading"
export type TButtonProps = {
    hierarchy?: "primary" | "secondary" | "tertiary",
    state?: "default" | "hover" | "disable" | "loading" | "active",
    variants?: "brand" | "rose" | "gray" | "error" | "success",
    size?: string,
    text: string,
}

const Button: React.FC<TButtonProps> = ( { hierarchy = "primary", state = "default", variants = "brand", size, text } ) =>
{
    const styles = {
        container: classNames( ' cursor-pointer px-8 py-4 rounded-xl text-[14px] font-semibold flex items-center gap-x-2 ', {
            //primary
            'bg-[#F6F8FB]': state === "disable" || ( [ "secondary", "tertiary" ].includes( hierarchy ) && state === "hover" && variants === "gray" ) || ( hierarchy === "tertiary" && [ "default", "active" ].includes( state ) && variants === "brand" ),
            'bg-[#12DFA3]': hierarchy === "primary" && [ "default", "active" ].includes( state ) && variants === "brand",
            'bg-[#0DA578]': ( hierarchy === "primary" && state === "hover" && variants === "brand" ),
            'bg-[#5AF2C4]': hierarchy === "primary" && state === "loading" && variants === "brand",
            'bg-[#F63D68]': hierarchy === "primary" && [ "default", "active" ].includes( state ) && variants === "rose",
            'bg-[#E31B54]': hierarchy === "primary" && state === "hover" && variants === "rose",
            'bg-[#FEA3B4]': hierarchy === "primary" && state === "loading" && variants === "rose",
            'bg-[#0D121C]': hierarchy === "primary" && [ "default", "active" ].includes( state ) && variants === "gray",
            'bg-[#202939]': hierarchy === "primary" && state === "hover" && variants === "gray",
            'bg-[#CDD5DF]': hierarchy === "primary" && state === "loading" && variants === "gray",
            'bg-[#F04438]': hierarchy === "primary" && [ "default", "active" ].includes( state ) && variants === "error",
            'bg-[#D92D20]': hierarchy === "primary" && state === "hover" && variants === "error",
            'bg-[#FDA29B]': hierarchy === "primary" && state === "loading" && variants === "error",
            'bg-[#17B26A]': hierarchy === "primary" && [ "default", "active" ].includes( state ) && variants === "success",
            'bg-[#079455]': hierarchy === "primary" && state === "hover" && variants === "success",
            'bg-[#75E0A7]': hierarchy === "primary" && state === "loading" && variants === "success",

            //secondary
            'bg-[#E7FDF7]': ( hierarchy === "secondary" && [ "default", "active", "loading" ].includes( state ) && variants === "brand" ) || ( hierarchy === "tertiary" && state === "hover" && variants === "brand" ),
            'bg-[#D0FBEE]': hierarchy === "secondary" && state === "hover" && variants === "brand",
            'bg-[#FFF5F6]': hierarchy === "secondary" && [ "default", "active", "loading" ].includes( state ) && variants === "rose",
            'bg-[#FFF1F3]': hierarchy === "secondary" && state === "hover" && variants === "rose",
            'bg-[#FFFFFF]': hierarchy === "secondary" && [ "default", "active" ].includes( state ) && variants === "gray",
            'bg-[#FCFCFD]': hierarchy === "secondary" && state === "loading" && variants === "gray",
        } ),
        colors: classNames( "", {
            'text-[#CDD5DF]': state === 'disable',
            //primary
            'text-[#042F22]': ( hierarchy === "primary" && [ "default", "active", "hover" ].includes( state ) && variants === "brand" ) || ( hierarchy === "secondary" && variants === "brand" && [ "active", "hover" ].includes( state ) ),
            'text-[#FFFFFF]': hierarchy === "primary" && [ "rose", "gray", "error", "success" ].includes( variants ) && [ "default", "active", "hover" ].includes( state ),
            'text-[#D0FBEE]': hierarchy === "primary" && state === "loading" && [ "brand", "rose" ].includes( variants ),
            'text-[#9AA4B2]': ( hierarchy === "primary" && state === "loading" && variants === "gray" ) || ( hierarchy === "secondary" && state === "loading" && variants === "gray" ) || ( hierarchy === "tertiary" && state === "loading" && variants === "gray" ),
            'text-[#FFF0EF]': hierarchy === "primary" && state === "loading" && variants === "error",
            'text-[#DBFAE6]': hierarchy === "primary" && state === "loading" && variants === "success",

            //secondary
            'text-[#085E44]': hierarchy === "secondary" && state === "default" && variants === "brand",
            'text-[#5AF2C4]': ( hierarchy === "secondary" && state === "loading" && variants === "brand" ) || ( hierarchy === "tertiary" && state === "loading" && variants === "brand" ),
            'text-[#F63D68]': hierarchy === "secondary" && state === "default" && variants === "rose",
            'text-[#E31B54]': hierarchy === "secondary" && [ "active", "hover" ].includes( state ) && variants === "rose",
            'text-[#FEA3B4]': hierarchy === "secondary" && state === "loading" && variants === "rose",
            'text-[#364152]': ( hierarchy === "secondary" && state === "default" && variants === "gray" ) || ( hierarchy === "tertiary" && state === "hover" && variants === "gray" ),
            'text-[#202939]': hierarchy === "secondary" && [ "active", "hover" ].includes( state ) && variants === "gray",
            'text-[#0A7655]': [ "secondary", "tertiary" ].includes( hierarchy ) && state === "hover" && variants === "brand",
            'text-[#0DA578]': hierarchy === "tertiary" && [ "default", "active" ].includes( state ) && variants === "brand",
            'text-[#4B5565]': hierarchy === "tertiary" && [ "default", "active" ].includes( state ) && variants === "gray",

        } ),
        sizes: classNames( "", {
            'text-lg': size === "lg",
            'text-md': size === "md",
            'text-xl': size === "xl",
        } ),
        borders: classNames( "", {
            'border border-[#5AF2C4]': hierarchy === "secondary" && variants === "brand" && state !== "disable",
            'border border-[#FEA3B4]': hierarchy === "secondary" && variants === "rose" && state !== "disable",
            'border border-[#E3E8EF]': hierarchy === "secondary" && variants === "gray" && state !== "disable",
        } )
    }
    return (
        <div className={ `${ styles.container } ${ styles.colors } ${ styles.sizes } ${ styles.borders } ${ styles.sizes } ` }>

            { state !== "loading" ? <Left className="size-5" /> : <Loading className="size-5" /> }

            <div className="flex-1 ">{ text }</div>

            { state !== "loading" ? <Left className="size-5" /> : <Loading className="size-5" /> }

        </div >
    )
}

export default Button
