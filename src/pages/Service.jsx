const Service = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "Creating stunning and responsive websites tailored to your needs.",
      icon: "https://via.placeholder.com/64", // Replace with your own icon or image URL
    },
    {
      title: "Mobile App Development",
      description:
        "Building user-friendly mobile applications for both iOS and Android platforms.",
      icon: "https://via.placeholder.com/64", // Replace with your own icon or image URL
    },
    {
      title: "Digital Marketing",
      description:
        "Providing comprehensive digital marketing strategies to boost your online presence.",
      icon: "https://via.placeholder.com/64", // Replace with your own icon or image URL
    },
    {
      title: "SEO Optimization",
      description:
        "Enhancing your website’s visibility on search engines to attract more traffic.",
      icon: "https://via.placeholder.com/64", // Replace with your own icon or image URL
    },
    {
      title: "Graphic Design",
      description:
        "Designing visually appealing graphics for your brand and marketing materials.",
      icon: "https://via.placeholder.com/64", // Replace with your own icon or image URL
    },
    {
      title: "Consulting Services",
      description:
        "Offering expert advice and strategies to help your business grow.",
      icon: "https://via.placeholder.com/64", // Replace with your own icon or image URL
    },
    // Add more services as needed
  ];
  return (
    <>
      <div className="container mx-auto p-8 mt-20">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-lg text-gray-700">
            Discover the range of services we offer to help your business
            thrive.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-8">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="mb-4">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-16 h-16 mx-auto"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Have questions about our services? Get in touch with us using the
            form below.
          </p>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-green-500 px-4 py-2 text-white rounded-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Service;
