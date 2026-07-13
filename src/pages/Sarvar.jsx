import React from 'react'

function Sarvar() {
  return (

    <div className="w-full min-h-screen bg-white">
      {/* Navbar */}
      <header className="border-b shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-5 px-6">
          <h1 className="text-4xl font-bold tracking-widest">
            <span className="text-sky-500">TRUE</span>
          </h1>

        </div>
      </header>

      {/* Title */}
      <section className="bg-sky-500 text-white text-center py-8">
        <h2 className="text-3xl font-bold uppercase">
          Show Room TRUE v Tashkente
        </h2>

        <p className="mt-2 uppercase text-sm tracking-wider">
          Posetite nash vistavochniy zal Tashkent City Boulevard
        </p>
      </section>

      {/* Image */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <img
          src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1200"
          alt="gym"
          className="w-full h-[500px] object-cover rounded shadow-lg"
        />
      </section>

      {/* Contact */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-0 px-6 pb-10">
        <iframe
          title="map"
          src="https://maps.google.com/maps?q=Tashkent&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-[400px]"
        ></iframe>

        <div className="bg-gray-100 p-10 flex flex-col justify-center">
          <h3 className="text-sky-500 text-2xl font-bold uppercase mb-6">
            Official Distributor
          </h3>

          <p className="mb-3 text-gray-700">
            📞 +998 (90) 606-66-66
          </p>

          <p className="mb-3 text-gray-700">
            ✉️ info@truefitness.uz
          </p>

          <p className="mb-6 text-gray-700">
            Address:
            <br />
            Tashkent City Boulevard
          </p>

          <p className="text-sky-500 font-bold">
            Mon-Sat 09:00-19:00
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sky-500 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 py-10 px-6">
          <div>
            <h4 className="font-bold mb-4">Katalog</h4>
            <p>Cardio</p>
            <p>Strength</p>
            <p>Accessories</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Information</h4>
            <p>About</p>
            <p>Products</p>
            <p>Contact</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contacts</h4>
            <p>info@truefitness.uz</p>
            <p>+998 90 606 66 66</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Subscribe</h4>

            <input
              type="email"
              placeholder="E-mail"
              className="w-full p-2 rounded text-black"
            />

            <button className="mt-3 w-full bg-yellow-400 text-black py-2 rounded font-semibold">
              Send
            </button>
          </div>
        </div>
      </footer>
    </div>


  )
}

export default Sarvar