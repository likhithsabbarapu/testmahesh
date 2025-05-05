function Skills() {
    const skills = [
        "C", "C++", "Java", "Python",
        "ReactJS", "Tailwind CSS", "JavaScript",
        "Responsive Design", "Git & GitHub"
    ];

    return (
        <section id="skills" className="p-10 bg-gradient-to-r from-cyan-500 to-violet-600 text-center text-white">
            <h2 className="text-4xl font-extrabold mb-6">Technical Skills</h2>
            <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">
                {skills.map(skill => (
                    <div key={skill} className="backdrop-blur-lg bg-white/20 border border-white/30 rounded-xl p-6 shadow-xl hover:scale-105 transition text-white font-semibold text-lg">
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills;
