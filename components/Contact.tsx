export default function Contact() {
  return (
    <section className="my-12">
      <h2 className="text-3xl font-semibold mb-4">Contact</h2>
      <p className="text-lg">
        Feel free to reach out to me at: <a href="mailto:your.email@example.com" className="text-blue-400 hover:underline">your.email@example.com</a>
      </p>
      <div className="mt-4">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="mr-4 text-blue-400 hover:underline">GitHub</a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">LinkedIn</a>
      </div>
    </section>
  );
}
