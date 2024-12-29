import React from 'react'
type TSkillProps = {
    title: string,
    Img: React.FC,
    description: string
}
const SkillCard = ( { title, Img, description }: TSkillProps ) =>
{
    return (
        <div key={ title } className="flex flex-col gap-[42px] justify-center items-center px-[42px] py-16">
            { <Img /> }
            <div className="text-center space-y-3">
                <h3 className='text-[27px] font-semibold'>{ title }</h3>
                <span>{ description }</span>
            </div>
        </div>
    )
}

export default SkillCard
