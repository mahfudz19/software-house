import Link from "next/link";

export default function Layanan() {
  const services = [
    {
      id: "web-dev",
      title: "Enterprise & Web Application",
      description:
        "Pengembangan sistem informasi skala menengah hingga besar. Mulai dari sistem akademik, portal manajemen bisnis, hingga aplikasi web yang sangat interaktif dan responsif.",
      techStack: ["Next.js", "React", "PHP", "Tailwind CSS"],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      color: "bg-blue-50 text-blue-600",
    },
    {
      id: "backend-api",
      title: "Backend Core & API Development",
      description:
        "Arsitektur backend adalah jantung dari aplikasi. Kami merancang sistem dengan prinsip Clean Architecture untuk memastikan RESTful API yang aman, mudah dikembangkan (scalable), dan berkinerja tinggi.",
      techStack: ["Golang", "Node.js", "MySQL", "MongoDB", "Redis"],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
          />
        </svg>
      ),
      color: "bg-slate-100 text-slate-700",
    },
    {
      id: "ai-integration",
      title: "AI & Machine Learning Integration",
      description:
        "Tingkatkan efisiensi bisnis Anda dengan kecerdasan buatan. Kami membantu mengintegrasikan kapabilitas Large Language Models (LLM) dan sistem Retrieval-Augmented Generation (RAG) ke dalam alur kerja perusahaan Anda.",
      techStack: ["Python", "RAG Systems", "LLM APIs", "Data Processing"],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      color: "bg-purple-50 text-purple-600",
    },
    {
      id: "maintenance",
      title: "System Optimization & Maintenance",
      description:
        "Kami tidak hanya membangun, tapi juga merawat. Layanan optimasi kode (refactoring), migrasi arsitektur yang lebih minimalis, hingga pemeliharaan server database untuk mencegah bottleneck.",
      techStack: ["Code Review", "Performance Tuning", "Database Optimization"],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      color: "bg-green-50 text-green-600",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* HEADER SECTION */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
            Keahlian Teknis Kami
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Dari fondasi arsitektur yang kuat hingga antarmuka pengguna yang
            memukau. Kami membawa keahlian mendalam untuk memecahkan masalah
            bisnis Anda.
          </p>
        </div>
      </section>

      {/* SERVICES LIST SECTION */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 lg:space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`flex flex-col lg:flex-row gap-10 items-start ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Icon & Title Area */}
                <div className="lg:w-1/3 w-full">
                  <div
                    className={`inline-flex p-4 rounded-2xl mb-6 ${service.color}`}
                  >
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                </div>

                {/* Description & Tech Stack Area */}
                <div className="lg:w-2/3 w-full bg-gray-50 p-8 rounded-3xl border border-gray-100">
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                      Teknologi Utama:
                    </h3>
                    <div className="flex flex-wrap gap-2.5">
                      {service.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Butuh arsitektur khusus untuk proyek Anda?
          </h2>
          <p className="text-gray-400 mb-10 text-lg">
            Teknologi hanyalah alat. Mari berdiskusi untuk menemukan alat dan
            arsitektur yang paling tepat sasaran untuk kebutuhan sistem Anda.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/kontak"
              className="px-8 py-3.5 border border-transparent text-base font-medium rounded-full text-gray-900 bg-white hover:bg-gray-100 transition-colors"
            >
              Konsultasi Gratis
            </Link>
            <Link
              href="/portofolio"
              className="px-8 py-3.5 border border-gray-700 text-base font-medium rounded-full text-white bg-transparent hover:bg-gray-800 transition-colors"
            >
              Lihat Bukti Kerja Kami
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
