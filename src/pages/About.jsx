import { Link } from 'react-router-dom'

function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        About Sarehny
      </h1>
      <div className="text-center">
        <p className="text-lg mb-4 text-gray-600">
          This is the about page of the Sarehny project.
        </p>
        <Link
          to="/"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default About
