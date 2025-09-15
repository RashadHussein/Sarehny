import { features } from '../constants'

const Features = () => {
  return (
    <div className="font-cairo bg-gray-50 text-slate-900 antialiased px-4 py-8 my-4">
      <div className="max-w-[1100px] mx-auto">
        <section id="features" className="max-w-[980px] mx-auto mb-6">
          <h2 className="text-center font-semibold text-2xl mb-4">
            مزايا Unseen
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            {features.map((f, idx) => (
              <div
                key={idx}
                className="bg-gray-100 grid gap-2 rounded-lg shadow-sm p-6 hover:shadow-md transition"
              >
                <p className="text-blue-500 text-xl place-self-end">{f.icon}</p>
                <h3 className="font-semibold mb-2 text-right">{f.title}</h3>
                <p className="text-sm text-gray-600 text-right">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Features
