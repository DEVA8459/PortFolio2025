
import { useMatches } from "@mantine/core";
import { socialLinks } from "../Utils/Constant";

const Social=()=>{
    const size=useMatches({
            xs:20,
            md:25,
        })
    const socialIcons=socialLinks.map((socialLink, index)=>{
        return <a   key={index} href={`${socialLink.link}`} target="_blank"  className="font-mono text-lg  hover:text-primary hover:-translate-x-1 transition transform duration-300 ease-in-out">
       <div data-aos="fade-up-left" data-aos-duration="800" > <socialLink.icon stroke={1.5} className="-rotate-90" size={size} /></div>
    </a>
    })

    return <div  className="flex  text-secondary items-center gap-8 fixed bottom-58 -left-48 rotate-90 " >
        {socialIcons}
        <hr className="border w-40 rounded-full  bg-secondary border-secondary"/>
    </div>
}
export default Social;