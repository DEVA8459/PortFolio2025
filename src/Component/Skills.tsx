import { SkillInfo } from "../Utils/Constant";
import SkillCard from "./SkillCard";

const Skills=()=>{
    return <div className="xl-mx:px-28 xsm-mx:px-18 md-mx:px-18 my-10 font-mono xsm-mx:w-full" id="Skills">
            <h1 className="text-4xl sm-mx:text-3xl xs:text-2xl mb-10 font-bold text-center text-white"><span className="text-primary">03.&nbsp;</span>Skills</h1>
            <div className="flex flex-wrap justify-around md-mx:justify-between sm-mx:justify-center gap-4 md-mx:gap-2">
            {
                SkillInfo.map((skill:any, index:number)=><SkillCard key={index} title={skill.title} skills={skill.skills} />)
            }
            </div>
        </div>
}
export default Skills;