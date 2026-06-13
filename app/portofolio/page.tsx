import Link from "next/link";

export default function Portofolio() {
  const projects = [
    {
      id: "siakad-stimi",
      title: "Sistem Informasi Akademik (Siakad) STIMI YAPMI",
      category: "Enterprise Web App",
      description:
        "Platform manajemen kampus terpadu yang mendigitalisasi proses akademik. Dilengkapi dengan fitur pengisian Kartu Rencana Studi (KRS) mandiri, administrasi penilaian, hingga validasi dokumen menggunakan tanda tangan digital.",
      highlight: "Telah bersertifikat Hak Cipta (HAKI).",
      techStack: ["Next.js", "PHP", "MySQL"],
      imagePlaceholder: "Siakad Dashboard",
    },
    {
      id: "shop-api-go",
      title: "Clean Architecture E-Commerce API",
      category: "Backend & Microservices",
      description:
        "Layanan backend (Shop API) yang dirancang untuk platform e-commerce dengan lalu lintas tinggi. Dibangun dari nol menggunakan prinsip Clean Architecture di Golang untuk memastikan pemisahan logika bisnis yang tegas dan skalabilitas infrastruktur.",
      highlight: "Integrasi database NoSQL teroptimasi.",
      techStack: ["Golang", "MongoDB", "Clean Architecture"],
      imagePlaceholder: "API Architecture Diagram",
    },
    {
      id: "mazu-engine",
      title: "Mazu Engine: Custom PHP Framework",
      category: "Core Architecture",
      description:
        "Eksplorasi tingkat lanjut dalam rekayasa perangkat lunak dengan membangun framework PHP MVC secara mandiri. Membawa filosofi 'Minimalis, Eksplisit, dan Terpisah', framework ini memisahkan Core dan Addon untuk performa tanpa overhead.",
      highlight: "Performa tinggi dengan footprint memori sangat kecil.",
      techStack: ["PHP Native", "MVC Pattern", "Custom Routing"],
      imagePlaceholder: "Mazu Engine Codebase",
    },
    {
      id: "ai-rag-integration",
      title: "AI Knowledge Retrieval System",
      category: "Machine Learning & AI",
      description:
        "Sistem cerdas yang mengintegrasikan kapabilitas Large Language Models (LLM) secara lokal. Menggunakan arsitektur Retrieval-Augmented Generation (RAG) untuk memproses dan mengekstraksi informasi dari dokumen internal perusahaan secara otomatis dan aman.",
      highlight:
        "Otomatisasi alur kerja tanpa bergantung pada cloud pihak ketiga.",
      techStack: ["Python", "Local LLM", "Vector Database"],
      imagePlaceholder: "AI Chat Interface",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* HEADER SECTION */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-20 bg-gray-900 border-b border-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Karya & <span className="text-blue-500">Studi Kasus</span>
          </h1>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            Kumpulan solusi digital yang dirancang dengan arsitektur yang
            bersih, aman, dan dapat diandalkan. Bukti nyata dari komitmen kami
            terhadap kualitas kode.
          </p>
        </div>
      </section>

      {/* PORTFOLIO GRID SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                {/* Image Placeholder */}
                <div className="h-64 bg-gray-200 relative flex items-center justify-center border-b border-gray-100 group">
                  <div className="absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="text-gray-500 font-bold tracking-widest uppercase z-10">
                    {project.imagePlaceholder}
                  </span>
                </div>

                {/* Content Area */}
                <div className="p-8 flex-1 flex flex-col">
                  <div className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">
                    {project.category}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 mb-6 flex-1 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlight Box */}
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6">
                    <p className="text-sm text-blue-800 font-medium flex items-start">
                      <svg
                        className="w-5 h-5 mr-2 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {project.highlight}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-xs font-semibold text-gray-600 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Punya Visi Aplikasi yang Ingin Diwujudkan?
          </h2>
          <p className="text-gray-600 mb-10 text-lg">
            Sistem yang baik dimulai dari diskusi yang baik. Mari kita bedah
            kebutuhan teknis Anda dari sisi bisnis maupun arsitektur.
          </p>
          <Link
            href="/kontak"
            className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-bold rounded-full hover:bg-gray-800 transition-colors shadow-md"
          >
            Mulai Diskusi Proyek
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
