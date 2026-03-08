const publications = [
  {
    title: "Quantum certification and benchmarking",
    authors: "J. Eisert, D. Hangleiter, N. Walk, I. Roth, D. Markham, R. Parekh, U. Chabaud et al.",
    venue: "Nature Reviews Physics 2(7), 382–390",
    year: "2020",
    citations: "536",
  },
  {
    title: "Quantum Algorithms and Simulation for Parallel and Distributed Quantum Computing",
    authors: "R. Parekh, A. Ricciardi, A. Darwish, S. DiAdamo",
    venue: "2021 IEEE/ACM Second International Workshop on Quantum Computing Software (QCS)",
    year: "2021",
    citations: "65",
  },
  {
    title: "Generalized Boolean functions and quantum circuits on IBM-Q",
    authors: "S. Gangopadhyay, V.S. Poonia, D. Aggarwal, R. Parekh",
    venue: "2019 10th International Conference on Computing, Communication and Networking Technologies (ICCCNT)",
    year: "2019",
    citations: "5",
  },
  {
    title: "Path-Oblivious Entanglement Swapping for the Quantum Internet",
    authors: "V. Mutolo, R. Parekh, D. Rubenstein",
    venue: "Proceedings of the 24th ACM Workshop on Hot Topics in Networks, 1–9",
    year: "2025",
  },
];

const PublicationsSection = () => {
  return (
    <section className="py-10 px-6" id="publications">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-foreground">Publications</h2>
        <div className="space-y-5">
          {publications.map((pub, i) => (
            <div key={i}>
              <p className="font-medium text-foreground leading-snug">{pub.title}</p>
              <p className="text-sm text-muted-foreground mt-0.5">{pub.authors}</p>
              <p className="text-sm text-muted-foreground italic">{pub.venue}, {pub.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
