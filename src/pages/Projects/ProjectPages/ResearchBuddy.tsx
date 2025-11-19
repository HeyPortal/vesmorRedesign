import { GitHubLogoIcon } from '@radix-ui/react-icons';
import ProjectImage from '@/components/ProjectImage';
import './ProjectPages.css'

export default function ResearchBuddy() {
    return (
        <div id='ResearchBuddy-page' className="project-content ml-60 p-10 w-[calc(100vw-240px)] h-screen text-white overflow-x-hidden overflow-y-scroll no-scrollbar">
            <div className="text-white mt-10 text-lg">
                
                <div className="flex justify-center items-center mb-10">
                    <h1 className="text-3xl font-bold">Research Buddy</h1>
                    <a href="https://github.com/vesmor/ResearchBuddy" target="_blank" rel="noopener noreferrer" className='ml-2 text-inherit hover:border-none'>
                        <GitHubLogoIcon className="w-6 h-6 hover:text-gray-400 text-white transition-colors duration-200" />
                    </a>
                </div>  

                <p className="mb-4 indent-0"></p>

                <div className="mb-8">
                    <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl hover:bg-black/50 transition-all duration-300 space-glow">
                        <h2 className="text-3xl font-bold mb-6 text-blue-300">Background</h2>
                        <div className="space-y-6">
                            <p className="text-lg leading-relaxed text-gray-200">
                                Like a lot of college students, whenever I wanted to make quick cash I would sign up to do little research studies at my University. The lab that conducted a lot of these studies was the <a href="https://www.eecs.ucf.edu/isuelab/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline transition-colors duration-200">Interactive Systems and User Experience(ISUE) Lab</a>. After doing a few of their studies, I decided to join their Discord server to keep up with their studies. One day, I was notified of a small project they were offering their Undergraduate Students. They wanted a Discord bot that would remind the lab members of their conference dates.
                            </p>
                            <div className="flex flex-col items-center mt-4">
                                <ProjectImage src='/assets/images/ResearchBuddy/isue-request.png' alt='Discord Bot request' className='h-[50%] w-[50%] rounded shadow-lg'/>
                                <i className="text-gray-400 italic mt-2">If only Amazon's Alexa was integrated into Discord</i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-8">
                    <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl hover:bg-black/50 transition-all duration-300 space-glow">
                        <h2 className="text-3xl font-bold mb-6 text-blue-300">Challenges</h2>
                        <div className="space-y-6">
                            <p className="text-lg leading-relaxed text-gray-200">
                                This was the first time I had ever made a Discord bot, and worked with an API in general, so I had a lot to learn. I had to learn how to use the Discord API, how to use the Discord.py library, and how to host the bot on a server. I also had to learn how to use the Google Calendar API to track the conference dates, and learn the basics of BeautifulSoup to scrape multiple websites for dates. But that was okay, because learning is always the fun part.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-200">
                                Discord.py also had significantly less documentation than Discord.js, so I had to rely on the community a lot. After this project, I really started to undertstand the importance of good documentation and good API design. At this point, I promised myself to always remember how I felt working on this project, and to keep it in mind when I later went on to design some of my own APIs.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-200">
                                The hardest challenge was the fact that the conference dates were spread out onto multiple websites. I had to take into account that each website had a different HTML layout. At the end, the website scraping wasn't perfect but it was good enough to get at least around 85% of the dates. I was later able to add a feature that allowed the user to manually add dates that may not have been scraped properly. 
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mb-8">
                    <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl hover:bg-black/50 transition-all duration-300 space-glow">
                        <h2 className="text-3xl font-bold mb-6 text-blue-300">Features</h2>
                        <div className="space-y-6">
                            <p className="text-lg leading-relaxed text-gray-200">
                                Although this was my first Discord bot, I was able to implement a lot of features that I was proud of. Some of the features include:
                            </p>
                            <ul className='list-disc list-inside indent-0 text-lg text-gray-200 space-y-2'>
                                <li>
                                    A cron job that would periodically scrape the websites for dates and any changes to existing dates.
                                </li>
                                <li>
                                    Using the Google Calendar API to allow a user to add a date using natural language.
                                </li>
                                <li>
                                    Automatic reminders of upcoming important dates. And the ability to subscribe certain users to the reminder announcements.
                                </li>
                            </ul>

                            <div className="flex flex-col items-center mt-4 ">
                                <div className="flex flex-row justify-around">
                                    <ProjectImage src='/assets/images/ResearchBuddy/example_of_natural_language.png' alt='Screencap adding even with natural language' className='h-[10%] w-[40%] rounded shadow-lg'/>
                                    <div className='flex-col justify-items-center justify-around space-y-4'>
                                        <ProjectImage src='/assets/images/ResearchBuddy/ResearchBuddy_Reminder.png' alt='Screencap of receiving a reminder' className='h-[45%] w-[85%] rounded shadow-lg'/>
                                        <ProjectImage src='/assets/images/ResearchBuddy/Deleting_Event.png' alt='Screencap of sending a delete command' className='h-[45%] w-[85%] rounded shadow-lg'/>
                                    </div>
                                </div>  
                                <i className="text-gray-400 italic mt-2">Sreencaps of a couple test commands</i>
                            </div>    
                        </div>
                    </div>
                </div>

                <div className="mb-8">
                    <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl hover:bg-black/50 transition-all duration-300 space-glow">
                        <h2 className="text-3xl font-bold mb-6 text-blue-300">Technologies</h2>
                        <ul className="list-disc list-inside text-lg text-gray-200 space-y-2">
                            <li>Google Calendar API</li>
                            <li>Discord Python API</li>
                            <li>Python</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}
