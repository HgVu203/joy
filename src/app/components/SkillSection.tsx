import React from 'react'
import SkillProduct from '../../../public/images/SkillProduct'
import SkillVisual from '../../../public/images/SkillVisual'
import SkillArt from '../../../public/images/SkillArt'

const SkillSection = () =>
{
    const skills = [
        {
            image: SkillProduct,
            title: 'Product Design',
            description: 'This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com'
        },
        {
            image: SkillVisual,
            title: 'Visual Design',
            description: 'This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com'
        },
        {
            image: SkillArt,
            title: 'Art Direction',
            description: 'This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com'
        }
    ]
    return (
        <div className='px-6 py-[42px]'>
            <div className="flex justify-between items-center gap-6 px-[42px] py-[64px]">
                { skills.map( ( skill, index ) =>
                {
                    return (
                        <div key={ skill.title } className="flex flex-col gap-[42px] justify-center items-center px-[42px] py-16">
                            <skill.image />
                            <div className="text-center space-y-3">
                                <h3 className='text-[27px] font-semibold'>{ skill.title }</h3>
                                <span>{ skill.description }</span>
                            </div>
                        </div>
                    )
                } ) }
            </div>
        </div>
    )
}

export default SkillSection
