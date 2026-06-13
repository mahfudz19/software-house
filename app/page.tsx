import Link from "next/link";

/**
 * Halaman utama (Home) website software house.
 * Menggunakan color palette yang sudah didefinisikan di globals.css.
 */
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-foreground tracking-tight mb-6">
            Membangun Sistem <span className="text-primary-500">Minimalis</span>{" "}
            <br className="hidden md:block" />
            untuk Skala Maksimal.
          </h1>
          <p className="mt-4 text-xl text-foreground-muted max-w-3xl mx-auto mb-10">
            Mazu Media adalah mitra teknologi yang berfokus pada arsitektur
            perangkat lunak yang bersih, cepat, dan siap diintegrasikan dengan
            kecerdasan buatan (AI) untuk mempercepat bisnis Anda.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/kontak"
              className="px-8 py-3.5 border border-transparent text-base font-medium rounded-full text-white bg-primary-600 hover:bg-primary-700 transition-colors shadow-sm"
            >
              Mulai Proyek
            </Link>
            <Link
              href="/portofolio"
              className="px-8 py-3.5 border border-border text-base font-medium rounded-full text-foreground bg-surface-elevated hover:bg-surface transition-colors"
            >
              Lihat Karya Kami
            </Link>
          </div>
        </div>

        {/* Dekorasi Background */}
        <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-primary-50 to-background -z-10"></div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section className="py-20 bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground">
              Solusi Teknologi Kami
            </h2>
            <p className="mt-4 text-foreground-muted">
              Pendekatan teknis yang tepat untuk setiap kompleksitas masalah.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-surface-elevated p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Enterprise Web Apps
              </h3>
              <p className="text-foreground-muted leading-relaxed">
                Pengembangan sistem informasi kompleks, portal akademik, hingga
                dashboard manajemen dengan performa tinggi.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-surface-elevated p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-secondary-200 text-secondary-700 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                AI & ML Integration
              </h3>
              <p className="text-foreground-muted leading-relaxed">
                Otomatisasi alur kerja dan ekstraksi data cerdas memanfaatkan
                Large Language Models (LLM) dan arsitektur RAG.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-surface-elevated p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-success-50 text-success-500 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Backend & API
              </h3>
              <p className="text-foreground-muted leading-relaxed">
                Pembuatan RESTful API dengan Clean Architecture yang tangguh,
                aman, dan mudah di-scale up untuk aplikasi mobile/web.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HIGHLIGHT PORTFOLIO */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground">
                Karya Pilihan
              </h2>
              <p className="mt-2 text-foreground-muted">
                Beberapa sistem yang telah kami rancang dan bangun.
              </p>
            </div>
            <Link
              href="/portofolio"
              className="hidden md:flex items-center text-primary-500 font-medium hover:text-primary-600"
            >
              Lihat semua
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Project 1 */}
            <div className="group cursor-pointer">
              <div className="w-full h-72 bg-muted rounded-2xl mb-6 overflow-hidden border border-border flex items-center justify-center">
                {/* Placeholder Image - Nantinya ganti dengan tag <Image> dari Next.js */}
                <span className="text-foreground-subtle font-medium tracking-widest uppercase">
                  Screenshot Siakad
                </span>
              </div>
              <div className="flex gap-2 mb-3">
                <span className="px-3 py-1 bg-muted text-xs font-medium text-foreground-muted rounded-full">
                  Next.js
                </span>
                <span className="px-3 py-1 bg-muted text-xs font-medium text-foreground-muted rounded-full">
                  PHP
                </span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary-500 transition-colors">
                Sistem Informasi Akademik
              </h3>
              <p className="text-foreground-muted">
                Platform manajemen kampus terpadu dengan fitur administrasi
                nilai, KRS, dan validasi dokumen digital.
              </p>
            </div>

            {/* Project 2 */}
            <div className="group cursor-pointer">
              <div className="w-full h-72 bg-muted rounded-2xl mb-6 overflow-hidden border border-border flex items-center justify-center">
                {/* Placeholder Image */}
                <span className="text-foreground-subtle font-medium tracking-widest uppercase">
                  Screenshot API / Architecture
                </span>
              </div>
              <div className="flex gap-2 mb-3">
                <span className="px-3 py-1 bg-muted text-xs font-medium text-foreground-muted rounded-full">
                  Golang
                </span>
                <span className="px-3 py-1 bg-muted text-xs font-medium text-foreground-muted rounded-full">
                  MongoDB
                </span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary-500 transition-colors">
                E-Commerce Core API
              </h3>
              <p className="text-foreground-muted">
                Layanan backend berbasis microservices menggunakan Clean
                Architecture untuk memastikan keandalan transaksi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA BANNER */}
      <section className="py-20 bg-secondary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Siap merealisasikan ide Anda?
          </h2>
          <p className="text-secondary-400 mb-10 text-lg">
            Mari diskusikan kebutuhan teknis bisnis Anda. Kami siap memberikan
            konsultasi arsitektur terbaik sebelum menulis baris kode pertama.
          </p>
          <Link
            href="/kontak"
            className="inline-block px-8 py-4 bg-surface-elevated text-secondary-900 font-bold rounded-full hover:bg-surface transition-colors"
          >
            Hubungi Kami Sekarang
          </Link>
        </div>
      </section>
    </div>
  );
}
