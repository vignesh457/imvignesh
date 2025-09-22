import { cn } from "@/lib/utils";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { TextAnimate } from "@/components/magicui/text-animate";
import RotatingText from '../RotatingText'
import TextType from '../TextType';
import { AuroraText } from "@/components/magicui/aurora-text";
import { DockerBar } from "../ui/floating-dock";

export default function HeaderSection() {
  return (
    <section id='home' className='w-full min-h-screen pt-20 pb-16 flex flex-col items-center justify-center px-2 md:px-16 gap-5'>
        <div className="z-10 flex items-center justify-center">
          <div
            className={cn(
              "group rounded-full border text-base text-white transition-all ease-in hover:cursor-pointer border-white/10 bg-neutral-900 hover:bg-neutral-800",
            )}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span className="flex items-center">
                <div className="bg-green-500 size-2 rounded-full relative z-0 mr-2 inline-block">
                  <div className="absolute inset-0 bg-green-500 rounded-full animate-ping -z-10"></div>
                </div>
                Available for Hire & Freelance work!
              </span>
            </AnimatedShinyText>
          </div>
        </div>
        <h1 className="text-7xl font-bold tracking-tighter text-center">
          Hi, I'm <AuroraText>Vignesh</AuroraText>
        </h1>
        <div className="flex flex-wrap justify-center items-center">
          <span className="text-4xl font-bold tracking-tighter text-neutral-300 flex items-center justify-center">
            I <span className="scale-90">💙</span> Building
            <RotatingText
              texts={[' Web ', ' Mobile ', ' AI ']}
              mainClassName="px-2 sm:px-2 md:px-2 bg-blue-500 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg mx-2 inline-block"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </span>
          <span className="text-4xl font-bold tracking-tighter inline-block text-neutral-300">App from Scratch</span>
        </div>
        <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 max-w-3xl text-center px-2">
          <TextAnimate animation="blurInUp" by="word" duration={3}>
            Let's all work together to solve inefficiencies in the Indian system and build a stronger nation—where population is not a problem but a powerful driver of India's rapid and expansive growth.
          </TextAnimate>
        </p>
        <TextType 
          text={["idea && code(idea)",""]}
          typingSpeed={100}
          pauseDuration={1000}
          showCursor={true}
          cursorClassName="text-neutral-600 font-medium"
          cursorCharacter="|"
          className="text-4xl font-bold text-neutral-800 md:text-5xl"
        />
        <DockerBar />
    </section>

  )
}
