import { GitHubLogoIcon } from '@radix-ui/react-icons';
import ProjectImage from '@/components/ProjectImage';
import './ProjectPages.css'

export default function LemonDrop() {
    return (
        <div id='LemonDrop-page' className="project-content ml-60 p-10 w-[calc(100vw-240px)] h-screen text-white overflow-x-hidden overflow-y-scroll no-scrollbar">
            <div className="text-white text-lg">

                <ProjectImage src="/assets/images/lemon_drop/Lemon-Drop.png" alt="Project Image" 
                    className="project-image w-[15%] h-[30%] rounded-2xl m-4 items-center justify-center mx-auto" 
                />
                
                <div className="flex justify-center items-center mb-4">
                    <h1 className="text-3xl font-bold">Lemon Drop</h1>
                    <a href="https://github.com/NickAwrist/Lemon_Drop" target="_blank" rel="noopener noreferrer" className='ml-2 text-inherit hover:border-none'>
                        <GitHubLogoIcon className="w-6 h-6 hover:text-gray-600 text-white" />
                    </a>
                </div>  

                <p className="mb-4 indent-0"></p>

                <div className="mb-8">
                    <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl hover:bg-black/50 transition-all duration-300">
                        <h2 className="text-3xl font-bold mb-6 text-blue-300">Background</h2>
                        <div className="space-y-6">
                            <p className="text-lg leading-relaxed text-gray-200">
                               My University holds an annual hackathon called Knights Hack. It came around a perfect time this year as one of my teammates and I both had recently gotten a dashcam. But, after wiring everything up to my car and making sure everything was working, I was quite surprised to find that the only way to download and view footage was to either remove the SD card and read it on a computer, or painstakingly download it through a rather slow mobile app. This process was wayyy too slow, and too cumbersome a process, especially for being in 2024. 
                            </p>
                            <p className="text-lg leading-relaxed text-gray-200">
                                Always looking to tinker with things, I proceeded to go home and see if there were any third-party services that would allow me to write a quick script that automatically upload footage once the dashcam arrived home. I got jealous when I saw a <a href="https://github.com/marcone/teslausb" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline transition-colors duration-200">project for Tesla drivers</a> who had a plug and play utility, but saw nothing that pertained to my situation. Until one day I stumbled upon a <a href="https://dashcamtalk.com/forum/threads/how-to-access-the-a129-over-wi-fi-without-the-viofo-app.37279/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline transition-colors duration-200">forum post discussion</a> about my model of dashcam. I learned that the dashcam had a wifi module that could be accessed through a web browser. I was ecstatic. I could finally make my dream come true.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-200">
                                As the weeks led up to the hackathon, I started playing around with sending procedure calls to the dashcam and parsing the XML it returned back. There was no full documentation of what each call did so I decided to run the dashcam's mobile app companion through a decompiler called Jadx and tried to find any useful API calls. I was able to find a few interesting calls and how they were constructed, for example "192.xxx.x.xxx/?custom=1&cmd=3015" would send back an XML file with the names of all the videos. This was exciting and I know knew it was possible to make a project out of this. 
                            </p>
                            <p className="text-lg leading-relaxed text-gray-200">
                                I pitched the idea to my Knights Hack team and they were all in. We discussed the idea for a bit and decided to make a web app that would automatically connect to the dashcam's WiFi whenever it was in range, similar to how your phone connects to your home WiFi when you arrive. Our stretch goal was to be able to support multiple dashcams allowing a user more than one car to manage it all in one place. With just 36 hours to do, we were all in. We wanted to squeeze all the footage out of our dashcams, so we called it Lemon Drop.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mb-8">
                    <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl hover:bg-black/50 transition-all duration-300">
                        <h2 className="text-3xl font-bold mb-6 text-blue-300">Challenges</h2>
                        <div className="space-y-6">
                            <p className="text-lg leading-relaxed text-gray-200">
                                Our first challenge was finding architecture that would allow the dashcam to connect easily. Usually a dashcam would be located a bit far from the home's WiFi, so we worried a home computer wouldn't even be able to reach the dashcam's WiFi signal in the first place. This led us to use a Raspberry Pi as a middleman. The Raspberry Pi would connect to the dashcam's WiFi, while being connected to the home's internet through an ethernet cable. The Raspberry Pi would then host a web server that the home computer could connect to.
                            </p>
                            <div className="flex flex-col items-center mt-4">
                                <ProjectImage src='/assets/images/lemon_drop/whiteboard-planning.jpg' alt='Whiteboard Architecture Planning' className='h-[50%] w-[50%] rounded'/>
                                <i className="text-gray-400 italic mt-2">It's always important to plan your designs before implementation</i>
                            </div>  
                            <p className="text-lg leading-relaxed text-gray-200">
                                The next challenge was figuring out how to programmatically and automatically download the dashcams footage. Luckily we quickly learned that the dashcam was hosting a HTTP File Server. We then had to learn how to use Python's requests library to send a POST request to the dashcam's server to download the footage. We coded up a Python Flask server to host a web server that the home computer could connect to.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-200">
                                But with being on the University's WiFi we quickly learned that the University's firewall was blocking the Raspberry Pi from connecting to the dashcam. One of our teammates was able to use a spare router I had lying around to set up a local network that the Raspberry Pi could connect to. We then used this seperate local network to develop our code on the Raspberry Pi and test it.
                            </p>
                            <div className="flex flex-col items-center">
                                <ProjectImage src='/assets/images/lemon_drop/own-internet-connection.jpg' alt='Local Network Setup' className='h-[10%] w-[20%] rounded'/>
                                <i className="text-gray-400 italic mt-2">Has your school WiFi ever been so bad you had to setup your own network?</i>
                            </div>  
                        </div>
                    </div>
                </div>

                <div className="mb-8">
                    <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl hover:bg-black/50 transition-all duration-300">
                        <h2 className="text-3xl font-bold mb-6 text-blue-300">Features</h2>
                        <div className="space-y-6">
                            <p className="text-lg leading-relaxed text-gray-200">
                                At the end of our 36-hours we were able to successfully implement most of the features we planned on. Because of our time constrains we weren't able to optimize all of the features as well as we wanted to, but I'm proud of the work we did in the given time:
                            </p>
                            <ul className='list-disc list-inside indent-0 text-lg text-gray-200 space-y-2'>
                                <li>
                                    Allowing the user to connect to and manage multiple dashcams.
                                </li>
                                <li>
                                    Automatically downloading footage once the RaspberryPi senses the dashcam's WiFi.
                                </li>
                                <li>
                                    Hosting a local web server that allows a user to visually manage dashcams and footage.
                                </li>
                            </ul>
                            <div className="flex flex-col items-center mt-4">
                                <div className="flex flex-row justify-around gap-4">
                                    <ProjectImage src='/assets/images/lemon_drop/switch-dashcams.jpg' alt='Screencap of the ability to switch dashcams' className='h-[100%] w-[60%] rounded'/>
                                    <ProjectImage src='/assets/images/lemon_drop/manage-footage.jpg' alt='Screencap of the ability to manage your footage' className='h-[100%] w-[60%] rounded'/>
                                </div>
                                <i className="text-gray-400 italic mt-2">I can successfully say we dragged dashcam tech into the modern era</i>
                            </div>  
                        </div>
                    </div>
                </div>

                <div className="mb-8">
                    <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl hover:bg-black/50 transition-all duration-300">
                        <h2 className="text-3xl font-bold mb-6 text-blue-300">What's Next?</h2>
                        <div className="space-y-6">
                            <p className="text-lg leading-relaxed text-gray-200">
                                After I finish this website and gather some more free time, I plan to continue working on Lemon Drop. I want to make the web app more user-friendly and intuitive. We also ran into some issues with the Raspberry Pi's WiFi connection being slow that I want to optimize.
                            </p> 
                            <p className="text-lg leading-relaxed text-gray-200">
                                I also hope in the future to allow the software to be able to connect to any WiFi enabled dashcam, and not just the model that we had. I'd also like the ability to make our program modular enough to be able to run on any computer, as a wider audience may not have a Raspberry Pi lying around.
                            </p> 
                        </div>
                    </div>
                </div>

                <div className="mb-8">
                    <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl hover:bg-black/50 transition-all duration-300">
                        <h2 className="text-3xl font-bold mb-6 text-blue-300">Technologies</h2>
                        <ul className="list-disc list-inside text-lg text-gray-200 space-y-2">
                            <li>Raspberry Pi</li>
                            <li>Python's Flask</li>
                            <li>HTTP/CSS</li>
                        </ul>
                    </div>
                </div>

                <div className="mb-8">
                    <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl hover:bg-black/50 transition-all duration-300">
                        <h2 className="text-3xl font-bold mb-6 text-blue-300">Extras</h2>
                        <div className="flex flex-col items-center mt-4">
                            <div className="flex flex-row justify-around">
                                <ProjectImage src='/assets/images/lemon_drop/knights_hack_group.jpg' alt=' PIcture of group I met and hung out with at Knights Hack' className='h-[100%] w-[30%] rounded'/>
                                {/* <img src='/assets/images/lemon_drop/knightshack_friendandme.jpg' alt='Picture of a friend and I from a digital camera' className='h-[10%] w-[40%] rounded'/> */}
                                <ProjectImage src='/assets/images/lemon_drop/winning_scavenger_hunt.jpg' alt='Picture of group winning the scavenger hunt' className='h-[100%] w-[55%] rounded'/>
                            </div>
                            <i className='font-semibold text-gray-400 italic mt-2'>Just wanted to show off the fun I had at Knights Hack (second year in a row winning scavenger hunt btw)</i>
                        </div>  
                    </div>
                </div>

            </div>
        </div>
    );
}
