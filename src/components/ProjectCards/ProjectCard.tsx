import './ProjectCard.css'
import { Link } from 'react-router-dom';

interface ProjectCardProps {
    name: string;
    description: string;
    image?: string;
    link:string
}

export default function ProjectCard(props: ProjectCardProps) {
    return (
        <Link to={"/projects/" + props.link} className="group block h-full">
            <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:border-white/30 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20 flex flex-col">
                
                {props.image ? (
                    <div className="relative h-48 w-full overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"/>
                        <img 
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
                            src={props.image} 
                            alt={props.name}
                        />
                    </div>
                ) : (
                    <div className="h-48 w-full bg-gradient-to-br from-blue-900/30 to-purple-900/30 flex items-center justify-center">
                        <span className="text-4xl opacity-20">🚀</span>
                    </div>
                )}

                <div className="flex flex-col flex-grow p-6 z-20">
                    <h2 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-blue-300 transition-colors">
                        {props.name}
                    </h2>
                    <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                        {props.description}
                    </p>
                    
                    <div className="mt-4 flex items-center text-xs font-bold uppercase tracking-widest text-blue-300 opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                        View Project <span className="ml-2">→</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}
