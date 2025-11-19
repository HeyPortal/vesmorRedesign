import ProjectImage from '@/components/ProjectImage';
import './ProjectPages.css'

export default function Teleop() {
    return (
        <div id='teleop-page' className="project-content ml-60 p-10 w-[calc(100vw-240px)] h-screen text-white overflow-x-hidden overflow-y-scroll no-scrollbar">
            <div className="text-white text-lg">

                <ProjectImage src="/assets/images/teleop_console/rerassor_showoff.png" alt="Project Image" 
                    className="project-image w-2/4 h-5/6 rounded-2xl m-4 items-center justify-center mx-auto" 
                />
                
                <h1 className="text-3xl text-center font-bold mb-4">RASSOR TeleOperation Console</h1>
                
                
                <div className="mb-8">
                    <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl hover:bg-black/50 transition-all duration-300">
                        <p className="text-lg leading-relaxed text-gray-200 mb-6">As part of my capstone project, I was able to volunteer with the Florida Space Institute to help develop a console for their educational, open-source rover. Our team of 5 were tasked with presenting complex technical information in a way that's accessible and intuitive for a variety of users, from researchers to grade-level students.</p>
                    </div>
                </div>

                <div className="mb-8">
                    <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl hover:bg-black/50 transition-all duration-300">
                        <h2 className="text-3xl font-bold mb-6 text-blue-300">Background</h2>
                        <div className="space-y-6">
                            <p className="text-lg leading-relaxed text-gray-200">
                                RASSOR stands for 'Regolith Advanced Surface Systems Operational Robot', the original rover is an impressive feat of engineering that is being <a target="_blank" rel="noopener noreferrer" href="https://technology.nasa.gov/patent/KSC-TOPS-7" className="text-blue-400 hover:text-blue-300 underline transition-colors duration-200">developed by NASA</a>, to be used in future as an excavation rover on Earth and, in the future, extraterrestrial bodies. 
                            </p>
                            
                            <p className="text-lg leading-relaxed text-gray-200">    
                                The Florida Space Institute(FSI) is offering a research and educational aspect of this rover that can be used in a more non-commericial, academic sense. Hence, they call it the <a target="_blank" rel="noopener noreferrer" href="https://fsi.ucf.edu/student-design/robotics/re-rassor/" className="text-blue-400 hover:text-blue-300 underline transition-colors duration-200">RE-RASSOR rover</a>, the 'RE' standing for 'Research and Education.' They are aiming to use open-source parts and software to as a platform for lower cost research, and the ability to support STEAM education for elementary and middle school kids, who are given the 3D printed parts and instructed on how to put it together themselves.
                            </p>
                            
                            <div className='flex justify-center items-center space-x-4'>
                                <ProjectImage src='/assets/images/teleop_console/fsirover-buildingjpg.jpg' alt='Picture of a RASSOR Rover being built' className='w-[30%] h-auto rounded'/>
                                <ProjectImage src='/assets/images/teleop_console/explodedv1-gearbox.png' alt='Exploded view of gearbox' className='w-[24%] h-auto rounded'/>
                            </div>

                            <p className="text-lg leading-relaxed text-gray-200">
                                Although there is one RE-RASSOR project, there are multiple types of rovers. Some rovers have paver arms that can dig into regolith, while others carry other mini rovers that can be deployed. 
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mb-8">
                    <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl hover:bg-black/50 transition-all duration-300">
                        <h2 className="text-3xl font-bold mb-6 text-blue-300">Features</h2>
                        <div className="space-y-6">
                            <p className="text-lg leading-relaxed text-gray-200">
                                We successfully created a console that was user-friendly, intuitive, and quote "made it feel like you were doing something cool". Some of the features that we implemented were:
                            </p>
                            <ul className='list-disc list-inside indent-0 text-lg text-gray-200 space-y-2'>
                                <li>
                                    Switching control between multiple rovers, and keeping track of the previous inputs sent to the rover
                                </li>
                                <li>
                                    Simulating a communication time-delay as if the rover was on another planet
                                </li>
                                <li>
                                    Allowing users to find rovers over the network automatically without needing to know IP addresses
                                </li>
                                <li>
                                    Console could control rovers in a Gazebo simulation, or real-life rovers 
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mb-8">
                    <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl hover:bg-black/50 transition-all duration-300">
                        <h2 className="text-3xl font-bold mb-6 text-blue-300">Challenges</h2>
                        <h3 className="text-lg font-semibold mb-2 text-blue-300">Understanding the Rover</h3>
                        <div className="space-y-6">
                            <p className="text-lg leading-relaxed text-gray-200">
                                The first hurdle we had to overcome was understanding the rover and its capabilities. We had to learn how the rover was built, how it was controlled, and what it was capable of. This was a challenge because the rover was still in development and there were multiple versions of the rover. It was difficult to always track down the correct person we needed for information.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-200">
                                Along with this it was hard even getting to work with the rover. At the time all the rovers were in use either for testing or for demonstrations. Instead, we had to work with a simulation of the rover. This was a challenge because the simulation software was not user-friendly and there lacked a lot of documentation on how to set it up and use it. <br/>
                                Our first major win was getting the Gazebo simulation to be up in the first place.
                                After our struggle in getting the simulation up and running and chasing down the different software requirements we needed, we took the time to write extensive documentation detailing how we got the different parts of the software to work together, including which version numbers we used. Hopefully this will make life easier for future teams to get started.
                            </p>
                            <div>
                                <ProjectImage src='/assets/images/teleop_console/Gazebo-Screenshot.png' alt='Gazebo Simulation' className='h-auto rounded'/>
                            </div>
                            
                            
                            <h3 className="text-lg font-semibold mb-2 text-blue-300">Fixing previous bugs</h3>
                            <p className="text-lg leading-relaxed text-gray-200">
                                Since our project was focused on making the previous attempt at the console better, we wanted to implement features rover-side and on the frontend to improve the user experience. A lot of the work we did was fixing bugs and adding quality-of-life improvements that were present in the previous version of the rover's software so that they would stop hindering us in our attempts to implement more features. Simple things like a camera failing to be found on the rover would crash the whole program and force us to restart, which was very frustrating when we were trying to test new features. We went through implementing gracious error handling and even simple things like automatically searching for a camera on another port if the default one wasn't found, that made things not fail catastrophically all the time.
                            </p>
                            
                            <h3 className="text-lg font-semibold mb-2 text-blue-300">Learning Networking</h3>
                            <p>
                                A big quality of life addition in our project was allowing the console to find rovers on the network automatically. Even though the rovers were expected to be used by school teachers and students, to set it up you had to guide them on how to login to a terminal and enter different linux commands until they found all the information they needed. To solve this we had to learn about different networking protocols and how to implement them. We ended up using mDNS broadcasting as it was one of the easier protocols to understand and use given the time we had and the toolset available to us. 
                            </p>

                        </div>
                    </div>
                </div>
                <div className="mb-8">
                    <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl hover:bg-black/50 transition-all duration-300">
                        <h2 className="text-3xl font-bold mb-6 text-blue-300">Accomplishments</h2>
                        <div className="space-y-6">
                            <p className="text-lg leading-relaxed text-gray-200">
                                Personally I consider this project one of my biggest accomplishments. I was able to learn a lot about robotics, networking, and software development. I was able to work with a team of talented individuals and we were able to create a console that we are all proud of, and got plenty of positive feedback on. 
                            </p>
                            <p className="text-lg leading-relaxed text-gray-200">
                                After project completion we were invited to present our project at the Regolith lab in front of the FSI staff and sponsors. It was a great experience and we got to actually deploy our software on this cool looking console they had set up and drive multiple rovers around in a simulated regolith bin! 
                            </p>
                            
                            <div className="flex justify-center items-center space-x-4 mt-4">
                                <ProjectImage src='/assets/images/teleop_console/console-in-lab.jpg' alt='Picture showing the console deployed on lab computers' className='w-[45%] h-auto rounded'/>
                                <ProjectImage src='/assets/images/teleop_console/rovers_in_bin.jpg' alt='Rovers driving around regolith bin' className='w-[45%] h-auto rounded'/>
                            </div>

                            <p className="text-lg leading-relaxed text-gray-200">
                                I was also invited to the Kennedy Space Center education center to present our project to a group of educators and some research engineers from the SwampWorks Lab. 
                            </p>

                            <div className="flex justify-center items-center space-x-4 mt-4">
                                <video className='w-[30%] h-auto rounded' controls playsInline autoPlay={false} preload="metadata">
                                    <source src='/assets/videos/teleop_console/pan-around-of-regolithlab.mov' type='video/mp4'/>
                                    Your browser does not support the video tag.
                                </video>
                                <ProjectImage src='/assets/images/teleop_console/page-of-powerpoint.png' alt='Rovers driving around regolith bin' className='w-[45%] h-auto rounded'/>
                            </div>
                            <i className="text-gray-400 italic mt-2 text-center">Video of the event and a slide from one of my powerpoints, can't believe NASA thought I had something important to say</i>

                        </div>
                    </div>
                </div>


                <div className="mb-8">
                    <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl hover:bg-black/50 transition-all duration-300">
                        <h2 className="text-3xl font-bold mb-6 text-blue-300">Technologies</h2>
                        <ul className="list-disc list-inside text-lg text-gray-200 space-y-2">
                            <li>Gazebo</li>
                            <li>Robot Operating System</li>
                            <li>Python's FastAPI</li>
                            <li>React / React Native</li>
                            <li>Electron</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
