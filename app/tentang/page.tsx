import Link from "next/link";

export default function Tentang() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
            Di Balik <span className="text-blue-600">Mazu Media</span>
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Kami adalah sekelompok pengembang perangkat lunak yang percaya bahwa
            sistem yang hebat tidak harus rumit. Kerumitan adalah musuh dari
            skalabilitas.
          </p>
        </div>
      </section>

      {/* STORY & EXPERIENCE SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Left Content */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Pengalaman yang Membentuk Pendekatan Kami
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Berbekal pengalaman lebih dari empat tahun terjun langsung di
                  industri rekayasa perangkat lunak, kami telah melihat berbagai
                  bentuk evolusi teknologi—dari pemeliharaan sistem monolitik
                  warisan (legacy) hingga perancangan arsitektur microservices
                  modern yang gesit.
                </p>
                <p>
                  Mazu Media didirikan bukan sekadar untuk menjadi "pabrik
                  kode". Kami memposisikan diri sebagai mitra pemikir teknis.
                  Kami selalu memulai dengan memahami logika bisnis secara
                  mendalam sebelum merekomendasikan tumpukan teknologi (tech
                  stack) apa pun.
                </p>
                <p>
                  Dari pengembangan portal akademik dengan tingkat keamanan
                  tinggi hingga merakit backend e-commerce menggunakan Golang
                  dan Next.js, setiap baris kode yang kami tulis bertujuan untuk
                  satu hal:{" "}
                  <strong className="text-gray-900 font-semibold">
                    Efisiensi operasional bisnis Anda.
                  </strong>
                </p>
              </div>
            </div>

            {/* Right Content / Stats */}
            <div className="lg:w-1/2 w-full">
              <div className="bg-gray-900 rounded-3xl p-10 text-white shadow-xl relative overflow-hidden">
                {/* Decorative Element */}
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-20"></div>

                <h3 className="text-2xl font-bold mb-8">Etos Kerja Kami</h3>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mt-1 mr-4">
                      <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Continuous Learning</h4>
                      <p className="text-gray-400 mt-1">
                        Teknologi bergerak cepat. Kami menolak untuk stagnan,
                        secara aktif mengintegrasikan terobosan baru seperti
                        Machine Learning & AI ke dalam alur kerja konvensional.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mt-1 mr-4">
                      <div className="w-2.5 h-2.5 rounded-full bg-purple-500"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">
                        Productivity by Design
                      </h4>
                      <p className="text-gray-400 mt-1">
                        Kami percaya lingkungan dan suasana yang tepat
                        menghasilkan kode yang optimal. Kami merancang alur
                        kerja yang fleksibel namun terukur kualitasnya.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Filosofi Arsitektur Kami
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center mx-auto mb-6">
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
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Minimalis
              </h3>
              <p className="text-gray-600">
                Menghilangkan abstraksi yang tidak perlu. Kami membangun
                aplikasi dengan footprint yang kecil, fokus pada fungsionalitas
                inti, dan meminimalisir overhead resource server.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center mx-auto mb-6">
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Eksplisit
              </h3>
              <p className="text-gray-600">
                Kode harus mudah dibaca oleh manusia. Kami menerapkan aturan
                clean code yang ketat sehingga setiap alur data dan logika
                bisnis dapat dipahami seketika tanpa kebingungan.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-lg flex items-center justify-center mx-auto mb-6">
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
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Terpisah</h3>
              <p className="text-gray-600">
                Pemisahan tanggung jawab secara tegas (Separation of Concerns).
                Memisahkan Core Logic dengan Addon, memastikan sistem modular
                yang sangat mudah untuk diskalakan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Siap Bekerja Sama dengan Tim Kami?
          </h2>
          <p className="text-gray-600 mb-10 text-lg">
            Kami mencari klien yang menghargai kualitas kode yang baik dan
            arsitektur yang tahan banting. Mari bicarakan ide Anda.
          </p>
          <Link
            href="/kontak"
            className="inline-block px-8 py-4 border border-gray-900 text-gray-900 font-bold rounded-full hover:bg-gray-900 hover:text-white transition-colors"
          >
            Hubungi Tim Mazu
          </Link>
        </div>
      </section>
    </div>
  );
}
