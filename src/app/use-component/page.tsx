'use client'
import Alert, { TAlertProps } from '@/components/Alert'
import Button, { type TButtonProps } from '@/components/Button';
import Chip, { type TChipProps } from '@/components/Chip';
import React from 'react'

const UseComponent = () =>
{
    const hierarchies: Array<TAlertProps[ 'hierarchy' ]> = [ 'primary', 'secondary', 'tertiary' ];
    const colors: Array<TAlertProps[ 'color' ]> = [ 'default', 'error', 'warning', 'gray', 'success' ];
    const hierarchiesButton: Array<TButtonProps[ 'hierarchy' ]> = [ 'primary', 'secondary', 'tertiary' ];
    const stateButton: Array<TButtonProps[ 'state' ]> = [ "default", "hover", "active", "disable", "loading" ];
    const variantsButton: Array<TButtonProps[ 'variants' ]> = [ "brand", "rose", "gray", "error", "success" ];
    const hierarchiesChip: Array<TChipProps[ 'hierarchy' ]> = [ 'primary', 'secondary' ];
    const stateChip: Array<TChipProps[ 'state' ]> = [ "default", "hover", "active" ];
    const colortChip: Array<TChipProps[ 'color' ]> = [ "brand", "rose", "gray", "warning", "success", "info" ];
    const textButton = 'Button CTA';
    const textChip = "Test";
    const data = {
        title: 'Lorem ipsum dolor sit amet consectetur. Sed quis imperdiet lorem nunc tellus est.',
        description: 'Lorem ipsum dolor sit amet consectetur. Sed quis imperdiet lorem nunc tellus est.'
    }
    const [ open, setOpen ] = React.useState<string>( "alert" );
    
    return (
        <div>
            <div className="flex justify-center gap-10 p-5 border cursor-pointer">
                <span onClick={ () => setOpen( "alert" ) }>Alert</span>
                <span onClick={ () => setOpen( "button" ) }>Button</span>
                <span onClick={ () => setOpen( "chip" ) }>Chip</span>
            </div>
            {
                open === "alert" &&
                <div className='flex items-center flex-col p-10 gap-y-8'>
                    { colors?.map( ( color, index ) =>
                        hierarchies?.map( ( hierarchy ) =>
                        {
                            return (
                                <Alert key={ `${ hierarchy } + ${ color }` } hierarchy={ hierarchy } color={ color } title={ data.title } description={ data.description } />
                            )
                        } )
                    ) }

                </div>
            }
            {
                open === "button" && <div className='flex flex-wrap justify-center gap-12 p-10'>
                    { hierarchiesButton?.map( ( hierarchy ) =>
                        stateButton?.map( ( state ) =>
                            variantsButton?.map( ( variant ) =>
                            {
                                return (
                                    <Button key={ `${ hierarchy }-${ state }-${ variant }` } text={ textButton } hierarchy={ hierarchy } state={ state } variants={ variant } />
                                )
                            } )
                        )
                    ) }
                </div>
            }
            {
                open === "chip" && <div className='flex flex-wrap gap-12 p-10 justify-center'>
                    { hierarchiesChip?.map( ( hierarchy ) =>
                        colortChip?.map( ( color ) =>
                            stateChip?.map( ( state ) =>
                            {
                                return (
                                    <Chip key={ `${ hierarchy }-${ state }-${ color }` } text={ textChip } hierarchy={ hierarchy } state={ state } color={ color } />
                                )
                            } )
                        )
                    ) }
                </div>
            }


        </div>
    )
}

export default UseComponent
