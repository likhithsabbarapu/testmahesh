function Certifications() {
    const certs = [
        "Data Science - Internshala",
        "JAVA - Codetantra",
        "JAVA - Oracle iLearn",
        "Published paper - International Journal of Engineering Innovations"
    ];

    return (
        <section id="certifications" className="p-10 bg-gray-900 text-white text-center">
            <h2 className="text-4xl font-extrabold mb-6 text-purple-400">Certifications</h2>
            <ul className="space-y-3 max-w-xl mx-auto text-lg">
                {certs.map(cert => (
                    <li key={cert} className="bg-white/10 border border-purple-500 rounded-lg p-3">{cert}</li>
                ))}
            </ul>
        </section>
    )
}

export default Certifications;
