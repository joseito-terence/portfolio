export default function Experience() {
  const experiences = [
    { 
      company: "Company Name", 
      position: "Position", 
      duration: "Start Date - End Date",
      description: "Brief description of your role and achievements"
    },
    // Add more experiences as needed
  ];

  return (
    <section className="my-12">
      <h2 className="text-3xl font-semibold mb-4">Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-xl font-semibold">{exp.company}</h3>
          <p className="text-lg">{exp.position}</p>
          <p className="text-sm text-gray-400">{exp.duration}</p>
          <p className="mt-2">{exp.description}</p>
        </div>
      ))}
    </section>
  );
}
