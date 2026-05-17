export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center min-h-screen px-6 bg-gradient-to-b from-black via-blue-950 to-black">
        
        <img
          src="/logo.png"
          alt="Techgenius Haiti"
          className="w-64 h-64 object-contain mb-8 animate-pulse drop-shadow-[0_0_25px_#2563eb]"

          />
          



         
        <h1 className="text-6xl md:text-8xl font-black mb-6">
          <span className="text-white">TECH</span>
          <span className="text-blue-500">GENIUS</span>
        </h1>

        <p className="text-2xl text-gray-300 max-w-3xl mb-10">
          La nouvelle génération de technologie pour une nouvelle Haïti.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://wa.me/50939283126"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-2xl text-lg font-bold transition"
          >
            WhatsApp
          </a>

          <a
            href="#services"
            className="border border-blue-500 hover:bg-blue-500/20 px-8 py-4 rounded-2xl text-lg font-bold transition"
          >
            Nos Services
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="py-24 px-6 bg-gradient-to-b from-black to-blue-950"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center text-blue-500 mb-16">
            NOS SERVICES
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Réparation logiciel",
              "Installation Windows",
              "Réseau informatique",
              "Caméra sécurité",
              "Déblocage téléphone",
              "FRP Unlock",
              "iCloud Bypass",
              "Développement web",
              "Starlink installation",
            ].map((service, index) => (
              <div
                key={index}
                className="bg-black/40 border border-blue-500/20 rounded-3xl p-8 hover:border-blue-500 transition hover:-translate-y-2"
              >
                <div className="text-5xl mb-6">⚡</div>

                <h3 className="text-2xl font-bold text-blue-400 mb-4">
                  {service}
                </h3>

                <p className="text-gray-400">
                  Service professionnel rapide et sécurisé pour particuliers et entreprises.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-24 px-6 bg-black text-center">
        <h2 className="text-5xl font-black text-blue-500 mb-8">
          CONTACTEZ-NOUS
        </h2>

        <p className="text-gray-400 text-xl mb-10">
          Techgenius Haiti — Solutions technologiques modernes.
        </p>

        <div className="space-y-4 text-lg">
          <p>📱 WhatsApp: +509 3928-3126</p>
          <p>📱 WhatsApp: +509 3881-3277</p>
          <p>📘 Facebook: Techgenius Haiti</p>
          <p>📸 Instagram: @techgenius.ha</p>
          <p>🎵 TikTok: Techgenius Haiti</p>
        </div>
      </section>
    </main>
  );
}