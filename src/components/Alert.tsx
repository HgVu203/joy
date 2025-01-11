import classNames from "classnames";
import React from "react";
import XClose from "../../public/images/XClose";
import Info from "../../public/images/Info";


export type TAlertProps = {
  hierarchy?: "primary" | "secondary" | "tertiary";
  color?: "default" | "error" | "warning" | "gray" | "success";
  title: string;
  description: string;
};

const Alert: React.FC<TAlertProps> = ( {
  hierarchy = 'primary',
  color = 'default',
  title,
  description,
} ) =>
{
  const styles = {
    container: classNames(
      "w-[588px] h-[58px] px-3 py-2 space-x-3 flex rounded",
      {
        // Primary
        "bg-[#175CD3] border border-[#175CD3]": hierarchy === "primary" && color === "default",
        "bg-[#D92D20] border border-[#D92D20]": hierarchy === "primary" && color === "error",
        "bg-[#DC6803] border border-[#DC6803]": hierarchy === "primary" && color === "warning",
        "bg-[#4B5565] border border-[#CDD5DF]": hierarchy === "primary" && color === "gray",
        "bg-[#079455] border border-[#079455]": hierarchy === "primary" && color === "success",

        // Secondary
        "bg-[#EFF8FF] border border-[#84CAFF]": hierarchy === "secondary" && color === "default",
        "bg-[#FEF3F2] border border-[#FDA29B]": hierarchy === "secondary" && color === "error",
        "bg-[#FFFAEB] border border-[#FEC84B]": hierarchy === "secondary" && color === "warning",
        "bg-[#F6F8FB] border border-[#E3E8EF]": hierarchy === "secondary" && color === "gray",
        "bg-[#ECFDF3] border border-[#75E0A7]": hierarchy === "secondary" && color === "success",

      }
    ),
    title: classNames( "text-sm font-medium truncate whitespace-nowrap overflow-hidden text-ellipsis",
      {
        "text-white": hierarchy === "primary",
        "text-[#175CD3]": [ 'secondary', 'tertiary' ].includes( hierarchy ) && color === "default",
        "text-[#D92D20]": [ 'secondary', 'tertiary' ].includes( hierarchy ) && color === "error",
        "text-[#DC6803]": [ 'secondary', 'tertiary' ].includes( hierarchy ) && color === "warning",
        "text-[#0D121C]": [ 'secondary', 'tertiary' ].includes( hierarchy ) && color === "gray",
        "text-[#079455]": [ 'secondary', 'tertiary' ].includes( hierarchy ) && color === "success",

      } ),
    description: classNames( "text-xs truncate whitespace-nowrap overflow-hidden text-ellipsis ",
      {
        "text-white": hierarchy === "primary",

        "text-[#175CD3]": [ 'secondary', 'tertiary' ].includes( hierarchy ) && color === "default",
        "text-[#D92D20]": [ 'secondary', 'tertiary' ].includes( hierarchy ) && color === "error",
        "text-[#DC6803]": [ 'secondary', 'tertiary' ].includes( hierarchy ) && color === "warning",
        "text-[#4B5565]": [ 'secondary', 'tertiary' ].includes( hierarchy ) && color === "gray",
        "text-[#079455]": [ 'secondary', 'tertiary' ].includes( hierarchy ) && color === "success",
      } ),
    fore: classNames( '', {
      "text-white": hierarchy === "primary",
      "text-[#4B5565]": [ 'secondary', 'tertiary' ].includes( hierarchy ) && [ "warning", "gray" ].includes( color ),
      "text-[#175CD3]": [ 'secondary', 'tertiary' ].includes( hierarchy ) && color === "default",
      "text-[#D92D20]": [ 'secondary', 'tertiary' ].includes( hierarchy ) && color === "error",
      "text-[#079455]": [ 'secondary', 'tertiary' ].includes( hierarchy ) && color === "success",
    } )
  };

  return (
    <div className={ styles.container }>
      <div className="py-1">
        <Info
          className={ `cursor-pointer size-[14.67px] ${ styles.fore }` }

        />
      </div>
      <div className="max-w-[508px] flex flex-col">
        <span className={ styles.title }>{ title }</span>
        <span className={ styles.description }>{ description }</span>
      </div>
      <div className="py-1">
        <XClose
          className={ `cursor-pointer size-[9.33px] ${ styles.fore }` }
        />
      </div>
    </div>
  );
};

export default Alert;
