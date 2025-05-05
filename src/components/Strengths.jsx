function Strengths() {
    const strengths = [
        "Quick learner and adaptable",
        "Team player and good communicator",
        "Can manage multiple assignments efficiently",
        "Passionate about learning new technologies"
    ];

    return (
        <section id="strengths" className="p-10 bg-gradient-to-r from-purple-700 to-indigo-800 text-white text-center">
            <h2 className="text-4xl font-extrabold mb-6">Strengths</h2>
            <ul className="space-y-3 max-w-xl mx-auto text-lg">
                {strengths.map(strength => (
                    <li key={strength} className="border border-white rounded-lg p-3 backdrop-blur-lg bg-white/20">{strength}</li>
                ))}
            </ul>
        </section>
    )
}

export default Strengths;
