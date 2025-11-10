import { useParams, Link } from 'react-router-dom';
import { allYojanas } from '../pages/yojanaData';

const YojanaDetail = () => {
  const { yojanaSlug } = useParams();
  const yojana = allYojanas.find(y => y.slug === yojanaSlug);

  if (!yojana) {
    return (
      <div className="p-8 text-center text-xl text-red-600 mt-10">
        <h1 className="text-3xl font-bold">Error 404: Yojana Not Found!</h1>
        <p className="mt-4">The scheme details you requested could not be loaded.</p>
        <Link
          to="/yojanas"
          className="mt-6 inline-block text-pink-600 hover:text-pink-800 font-medium underline"
        >
          Go back to yojanas list
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 md:p-12 w-full bg-white shadow-lg rounded-xl mt-6 mb-10">
      <Link
        to="/yojanas"
        className="mb-6 inline-flex items-center text-pink-600 hover:text-pink-800 font-medium transition duration-150"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          ></path>
        </svg>
        Back to All Yojanas
      </Link>

      <h1 className="text-4xl md:text-5xl text-gray-800 font-extrabold mb-2 leading-tight">
        {yojana.title}
      </h1>
      <p className="text-xl text-pink-600 font-semibold mb-8">
        {yojana.description}
      </p>

      <hr className="mb-8 border-gray-200" />

      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-700 mb-3 border-l-4 border-pink-500 pl-3">
          Scheme Details
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg pl-3">
          {yojana.details}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-gray-700 mb-3 border-l-4 border-pink-500 pl-3">
            Eligibility
          </h3>
          <p className="text-gray-700 leading-relaxed pl-3">
            {yojana.eligibility}
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-700 mb-3 border-l-4 border-pink-500 pl-3">
            Key Benefits
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 pl-4">
            {yojana.benefits.map((benefit, index) => (
              <li key={index} className="text-base">
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default YojanaDetail;
