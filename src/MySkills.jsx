import data from "./data/index.json";

export default function MySkills() {
  return (
    <section className="py-24 bg-gray-100" id="mySkills">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-xl font-semibold text-gray-600">My Skills</p>
          <h2 className="text-5xl font-bold text-gray-900 mt-4">My Expertise</h2>
        </div>
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {data?.skills?.map((item, index) => (
            <div key={index} className="flex flex-col items-start p-8 bg-white rounded-lg shadow-lg hover:border-b-4 hover:border-primary transition duration-300">
              <div className="flex items-center justify-center p-4 bg-white rounded-full shadow-md">
                <img src={item.src} alt={item.title} className="h-16 w-16" />
              </div>
              <div className="mt-6 flex flex-col items-start">
                <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                <p className="mt-4 text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
