import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../redux/projectSlice';
import ProjectCard from './ProjectCard';

function Projects() {
    const dispatch = useDispatch();
    const { projects, filter } = useSelector((state) => state.projects);

    const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category === filter);

    return (
        <section id="projects" className="p-10 bg-gray-900 text-white text-center">
            <h2 className="text-4xl font-bold mb-6 text-cyan-400">Projects</h2>

            <div className="mb-5">
                <button onClick={() => dispatch(setFilter("All"))} className="px-4 py-2 border border-cyan-400 rounded m-1 hover:bg-cyan-700">All</button>
                <button onClick={() => dispatch(setFilter("Web App"))} className="px-4 py-2 border border-cyan-400 rounded m-1 hover:bg-cyan-700">Web Apps</button>
                <button onClick={() => dispatch(setFilter("API"))} className="px-4 py-2 border border-cyan-400 rounded m-1 hover:bg-cyan-700">APIs</button>
            </div>

            <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">
                {filteredProjects.map((proj) => (
                    <ProjectCard key={proj.id} title={proj.title} desc={proj.desc} />
                ))}
            </div>
        </section>
    )
}

export default Projects;
