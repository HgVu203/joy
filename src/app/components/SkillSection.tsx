import React from 'react'
import SkillProduct from '../../../public/images/SkillProduct'
import SkillVisual from '../../../public/images/SkillVisual'
import SkillArt from '../../../public/images/SkillArt'
import SkillCard from './SkillCard'

const SkillSection = () =>
{
    const skills = [
        {
            Img: SkillProduct,
            title: 'Product Design',
            description: 'This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com'
        },
        {
            Img: SkillVisual,
            title: 'Visual Design',
            description: 'This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com'
        },
        {
            Img: SkillArt,
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
                        <SkillCard key={ index } Img={ skill.Img } title={ skill.title } description={ skill.description } />
                    )
                } ) }
            </div>
        </div>
    )
}

export default SkillSection
