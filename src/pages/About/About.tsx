import AnimatedPage from "@/animation/AnimatedPage";

export default function About() {
    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-start pt-10 pb-20">
            <AnimatedPage>
                <div className="w-full max-w-4xl mx-auto px-6">
                    
                    {/* Modern Hero Section */}
                    <div className="mb-16 text-center">
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter drop-shadow-lg">
                            About Me
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto"></div>
                    </div>
                    
                    {/* Blurb Section with Glassmorphism */}
                    <section className="mb-12">
                        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl transition-all duration-300 hover:bg-white/10">
                            <h2 className="text-3xl font-bold mb-6 text-blue-300">Blurb</h2>
                            <p className="text-lg leading-relaxed text-gray-200">
                                I'm a student finishing up my Bachelor's degree in Computer Science at the University of Central Florida and am actively seeking an internship or full-time position. With experience in both backend and frontend development, I've been involved in many projects focused on providing web-based solutions, and have expanded my knowledge to include working in other areas such as embedded systems and simulation software. <a target="_blank" href="/#/projects/rassor-teleoperation-console" className="text-blue-400 hover:text-blue-300 underline transition-colors duration-200">Currently</a>, I am working on a project with the Florida Space Institute to create a teleoperation console for their RE-RASSOR rover program. 
                            </p>
                        </div>
                    </section>

                    {/* Background Section */}
                    <section className="mb-12">
                        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl transition-all duration-300 hover:bg-white/10">
                            <h2 className="text-3xl font-bold mb-6 text-blue-300">Background</h2>
                            <div className="space-y-6 text-gray-200">
                                <p className="text-lg leading-relaxed">
                                    I was born in the infamous country of Haiti, although I don't remember much of my time there, I do remember my journey to the United States. The first time I felt the plane's wheels lift off the ground, my parents described seeing a glint in my eye that has since never left. I dreamed of one day gaining my own wings and flying. I gained an animus toward the airplane's window as it kept me from feeling the air on my face. From that moment, I knew I was not meant to be earthbound. 
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Growing up in the United States, I had limited access to the internet, so I spent most of my time exploring the world around me and picking up different skills that interested me. I was particularly known for asking too many questions. 'Why' seemed to be my favorite word. I was determined to learn as much about the world as possible. As I became older, this manifested into enjoying tinkering with things. I also became interested in space exploration and our new frontier. At this time, I played a game called Kerbal Space Program, and enjoyed the glimpse it gave me into the work that goes into space exploration. There is a huge modding community around this game, and I stumbled onto a really cool mod named "Kerbal Operating System" (kOS). It allowed you to write programs to control your rockets in real-time. It got me hooked as I was programmatically solving interesting real-time problems using concepts I had been learning in grade school and some extra-curricular learning. Eventually, I decided to learn other programming languages used in real life, such as C. As I followed tutorials, the power a computer held instantly became clear to me, and I wanted to learn everything about it and more. 
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Journey Section */}
                    <section className="mb-12">
                        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl transition-all duration-300 hover:bg-white/10">
                            <h2 className="text-3xl font-bold mb-6 text-blue-300">Journey</h2>
                            <div className="space-y-6 text-gray-200">
                                <p className="text-lg leading-relaxed">
                                    At some point, I wanted to know how it all came together and uncover how we got from rocks and electricity to running programs like a web browser. I delved deeper and came across videos of people building computers using Redstone in the game Minecraft. I followed along with tutorials and built my own simple binary adder in the game, and was eventually recommended an <a href="https://youtube.com/playlist?list=PLowKtXNTBypGqImE405J2565dvjafglHU&si=343dXdZQaIbT36HL" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline transition-colors duration-200">amazing video series</a> by Ben Eater. Months of obsession later, I eventually bought an Arduino and started programming and building my own circuits. Soon, programming became a part of everything I did—I programmed custom LED lights and set up my own HomeLab server to learn how to self-host my own network attached storage (NAS).
                                </p>
                                
                                <p className="text-lg leading-relaxed">
                                    When I graduated high school, I was inundated with thoughts about who I wanted to eventually be. So, I decided to do everything! I enrolled in my local community college to get my Associate in Arts with a focus in Computer Science. Simultaneously, I pursued my dream of flying and started lessons at my local flight school. On August 17th, 2019, I got my solo endorsement and, per tradition, got the tail of my shirt cut.
                                </p>
                                
                                {/* Solo Shirt Image with Modern Styling */}
                                <div className="mt-8 flex flex-col items-center">
                                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 shadow-lg">
                                        <img 
                                            src='/assets/images/about/Solo-Shirt.jpg' 
                                            alt='Solo Shirt Cutout' 
                                            className='w-full max-w-md rounded-xl shadow-inner transition-transform duration-300 hover:scale-[1.02]'
                                        />
                                    </div>
                                    <p className="text-gray-400 italic mt-4 text-center">Thankfully, I didn't wear my favorite shirt that day!</p>
                                </div>
                                
                                <p className="text-lg leading-relaxed mt-6">
                                    On the last day of February of 2020, luckily the day before COVID-19 shut the world down, I officially got my Private Pilot's License, and I've been intermittently enjoying my wings ever since. I've taken up my family and friends flying and even done some cool stuff like flying over the Kennedy Space Center!
                                </p>
                                
                                {/* Flying Images with Modern Grid */}
                                <div className="mt-8">
                                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 shadow-lg">
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            <img 
                                                src='/assets/images/about/landing.jpg' 
                                                alt='Passenger side picture of me landing' 
                                                className='w-full rounded-xl h-full object-cover shadow-md transition-transform duration-300 hover:scale-[1.05]'
                                            />
                                            <img 
                                                src='/assets/images/about/first-passenger.jpg' 
                                                alt='Picture of me flying, passenger took photo' 
                                                className='w-full rounded-xl h-full object-cover shadow-md transition-transform duration-300 hover:scale-[1.05]'
                                            />
                                            <img 
                                                src='/assets/images/about/flying-over-ksc.jpg' 
                                                alt='Flying over Kennedy Space Center' 
                                                className='w-full rounded-xl h-full object-cover shadow-md transition-transform duration-300 hover:scale-[1.05]'
                                            />
                                        </div>
                                    </div>
                                    <p className="text-gray-400 italic text-center mt-4">Why buy a GoPro when you can force your brother to take pictures for you?</p>
                                </div>
                                
                                <p className="text-lg leading-relaxed mt-6">
                                    Afterwards, I finished up my A.A. at community college and continued to pursue my Bachelors in Computer Science at UCF. 
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Future Plans Section */}
                    <section className="mb-12">
                        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl transition-all duration-300 hover:bg-white/10">
                            <h2 className="text-3xl font-bold mb-6 text-blue-300">Future Plans</h2>
                            <div className="space-y-6 text-gray-200">
                                <p className="text-lg leading-relaxed">
                                    In the future, I plan to further my education, ideally coming back to school for a Master's degree. In the meantime, I'm focused on completing my studies and actively seeking opportunities in the industry. Hopefully, I get to continue working on various exciting projects. Meanwhile, I will be continuing to fly and work on my own projects. 
                                </p>
                                
                                <p className="text-lg leading-relaxed">
                                    Although I'm finishing up school, I consider myself to be a lifelong student. I'm always looking for new things to learn and new ways to grow. As I look ahead, I'm excited, yet, a bit nervous to discover what lies on the path ahead.
                                </p>
                            </div>
                        </div>
                    </section>

                </div>
            </AnimatedPage>
        </div>
    );
}
