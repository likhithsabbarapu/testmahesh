function ProjectCard({ title, desc }) {
    return (
        <div className="backdrop-blur-lg bg-white/10 border border-cyan-400 rounded-xl p-5 shadow-xl hover:scale-105 transition text-white dark:bg-gray-800 dark:text-white">
            <h3 className="text-2xl font-bold mb-2 text-cyan-300">{title}</h3>
            <p className="text-white/90">{desc}</p>
        </div>
    )
}

export default ProjectCard;
