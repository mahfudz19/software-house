export default function Kontak() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* HEADER SECTION */}
      <section className="pt-24 pb-12 lg:pt-32 lg:pb-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Mari Mulai <span className="text-blue-500">Membangun</span>
          </h1>
          <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
            Ceritakan tantangan bisnis Anda. Kami siap merancang arsitektur dan
            solusi teknis yang tepat sasaran.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Left Column: Contact Information */}
            <div className="lg:w-1/3 space-y-10">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Informasi Kontak
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Lebih suka berbicara langsung? Jangan ragu untuk menghubungi
                  kami melalui email atau WhatsApp. Kami biasanya merespons
                  dalam waktu kurang dari 24 jam.
                </p>
              </div>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg font-bold text-gray-900">Email</h3>
                    <p className="text-gray-600 mt-1">hello@mazumedia.com</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg font-bold text-gray-900">
                      WhatsApp
                    </h3>
                    <p className="text-gray-600 mt-1">+62 812-XXXX-XXXX</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg font-bold text-gray-900">Lokasi</h3>
                    <p className="text-gray-600 mt-1">
                      Makassar, Indonesia
                      <br />
                      <span className="text-sm">
                        (Melayani Klien Nasional & Global)
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:w-2/3">
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  Kirim Pesan
                </h3>

                {/* Form Action: 
                  Ganti "YOUR_ENDPOINT_HERE" dengan URL dari Formspree (formspree.io) 
                  atau Web3Forms (web3forms.com) agar form ini berfungsi tanpa backend.
                */}
                <form
                  action="YOUR_ENDPOINT_HERE"
                  method="POST"
                  className="space-y-6"
                >
                  {/* Row: Name & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-gray-900 mb-2"
                      >
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors outline-none"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-900 mb-2"
                      >
                        Email Perusahaan/Pribadi
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors outline-none"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  {/* Row: Service Needed & Budget */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-semibold text-gray-900 mb-2"
                      >
                        Layanan yang Dibutuhkan
                      </label>
                      <select
                        name="service"
                        id="service"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors outline-none appearance-none"
                      >
                        <option value="web-dev">
                          Enterprise Web App / System
                        </option>
                        <option value="api-dev">
                          Backend API & Microservices
                        </option>
                        <option value="ai-integration">
                          AI & Machine Learning Integration
                        </option>
                        <option value="maintenance">
                          Maintenance & Optimization
                        </option>
                        <option value="other">Lainnya</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="budget"
                        className="block text-sm font-semibold text-gray-900 mb-2"
                      >
                        Estimasi Anggaran
                      </label>
                      <select
                        name="budget"
                        id="budget"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors outline-none appearance-none"
                      >
                        <option value="under-10m">&lt; Rp 10.000.000</option>
                        <option value="10m-50m">
                          Rp 10.000.000 - Rp 50.000.000
                        </option>
                        <option value="50m-100m">
                          Rp 50.000.000 - Rp 100.000.000
                        </option>
                        <option value="above-100m">&gt; Rp 100.000.000</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Area */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-900 mb-2"
                    >
                      Detail Proyek
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors outline-none resize-none"
                      placeholder="Ceritakan sedikit tentang visi aplikasi Anda, masalah yang ingin dipecahkan, atau fitur-fitur utamanya..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 transition-colors shadow-md focus:outline-none focus:ring-4 focus:ring-gray-200"
                    >
                      Kirim Pesan Sekarang
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
