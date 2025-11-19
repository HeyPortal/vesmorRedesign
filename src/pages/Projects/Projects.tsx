/* Page where all the Project Cards are located */
/* The pages for the projects are located in the subfolder of this folder /projectpages */

import AnimatedPage from "@/animation/AnimatedPage";
import ProjectCard from "@/components/ProjectCards/ProjectCard";
import './Projects.css';

function Projects(){
    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-start pt-10 pb-20">
            <AnimatedPage>
                <div className="w-full max-w-6xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-12 text-center tracking-tighter drop-shadow-lg">
                        Projects
                    </h1>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ProjectCard 
                            name="Re-Rassor TeleOperation Console"
                            description="A console for the educational, open source Rover."
                            image="/assets/images/teleop_console/rerassor_showoff.png"
                            link="rassor-teleoperation-console"
                        />
                        <ProjectCard 
                            name="Lemon Drop"
                            description="Reverse Engineering a dashcam to automate footage retrieval."
                            image="assets/images/lemon_drop/Lemon-Drop.png"
                            link="lemon-drop"
                        />
                        <ProjectCard 
                            name="ResearchBuddy"
                            description="Discord Bot to help labs not forget their dates."
                            link="research-buddy"
                        />
                    </div>
                </div>
            </AnimatedPage>
        </div>
    )
}

export default Projects;