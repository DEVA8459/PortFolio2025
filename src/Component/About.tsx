import { Info } from "../Utils/Constant";
import Typewriter from "typewriter-effect";
import { NeonGradientCard } from "./MagicUI/NeonGradientCard";
import Particles from "./MagicUI/Particle";
import { Button, useMatches } from "@mantine/core";
import { IconDownload } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import ResumeViewer from "./ResumeViewer";

const About = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const btn =useMatches({
      xs:'xs',
      sm:'sm',
      md:'md',
      lg:'lg'
  })
  return (
    <div className=" relative overflow-hidden    ">
      <Particles
        className="absolute  inset-0 "
        quantity={1000}
        ease={80}
        vx={0.1}
        vy={0.1}
        color="#64FFDA"
        refresh
      />
      <div className=" bg-color font-mono flex sm:flex-row flex-col-reverse xsm-mx:mt-20 md-mx:mt-5 ">
        <div className="sm:px-28 p-8 sm:w-10/12 flex flex-col  gap-5 items-center sm:items-start  text-xl mb-20">
          <div className="text-primary sm:text-3xl">Hi,I am</div>
          <div className="text-white sm:text-[4.25rem] font-extrabold text-4xl">
            {Info.name}
          </div>
          <div className="sm:text-3xl  text-white flex text-lg ">
            I'm a&nbsp;
            <span className="text-primary ">
              <Typewriter
                options={{ strings: Info.stack, autoStart: true, loop: true }}
              />
            </span>
          </div>
          <div className="w-[90%] text-secondary font-semibold text-justify sm:gap-3  text-sm sm:text-xl">
            {Info.bio}
          </div>
          <div className="xs-mx:w-[90%] mt-5 flex gap-3 xs-mx:justify-between">
            <Button
              onClick={open}
              className="focus-visible:!outline-none !text-bg !w-fit xs-mx:!w-[46%]"
              size={btn}
              variant="filled"
              color="#64FFDA"
            >
              Check Resume
            </Button>
            <Button
              component="a"
              href="Resume.pdf"
              download={Info.name}
              className="focus-visible:!outline-none !text-primary !w-fit xs-mx:!w-[46%]"
              size={btn}
              variant="outline"
              color="#64FFDA"
              rightSection={<IconDownload size={20} />}
            >
              Download
            </Button>
          </div>
        </div>
        <div className=" flex justify-center items-center rounded-full sm:w-2/5  sm:mr-20 relative z-0">
          <NeonGradientCard className="w-[325px] h-[350px] lg-mx:w-64 lg-mx:h-64 md-mx:mt-10 sm-mx:mt-20  xsm-mx:w-56 xsm-mx:h-56 items-center justify-center text-center">
            <img
              className="w-full  h-full rounded-full "
              src="photo.jpg"
              alt="profile"
            />
          </NeonGradientCard>
        </div>
      </div>
      <ResumeViewer opened={opened} close={close} />
    </div>
  );
};

export default About;
