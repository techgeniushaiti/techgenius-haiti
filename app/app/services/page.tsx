export default function Services() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold text-blue-500 mb-10">
        NOS SERVICES
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-blue-500">
          <h2 className="text-2xl font-bold mb-4">
            Déblocage iPhone
          </h2>

          <p>
            iCloud • Carrier Unlock • Bypass • Activation
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-blue-500">
          <h2 className="text-2xl font-bold mb-4">
            FRP Android
          </h2>

          <p>
            Samsung • Xiaomi • Motorola • Huawei
          </p>
        </div>

      </div>
    </main>
  );
}