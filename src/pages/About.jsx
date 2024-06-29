const About = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO",
      photo: "https://via.placeholder.com/150",
      bio: "John is a visionary leader with over 20 years of experience in the industry.",
    },
    {
      name: "Jane Smith",
      role: "CTO",
      photo: "https://via.placeholder.com/150",
      bio: "Jane is an expert in technology and innovation, driving our tech strategy.",
    },
    {
      name: "Sam Wilson",
      role: "COO",
      photo: "https://via.placeholder.com/150",
      bio: "Sam ensures our operations run smoothly and efficiently.",
    },
    // Add more team members as needed
  ];

  return (
    <>
      <div className="container mx-auto p-8 mt-20">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-gray-700">
            Learn more about our company, our mission, and our team.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Company</h2>
          <p className="text-gray-700 leading-relaxed">
            We are a forward-thinking company committed to providing innovative
            solutions to our clients. Our team of professionals works tirelessly
            to deliver outstanding results and ensure customer satisfaction. We
            believe in the power of technology and strive to be at the forefront
            of our industry.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to revolutionize the industry through cutting-edge
            technology and unparalleled customer service. We aim to provide our
            clients with the tools and support they need to succeed in an
            ever-changing market. We are dedicated to continuous improvement and
            innovation.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-gray-700 mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We&apos;d love to hear from you! Whether you have a question about
            our services, need assistance, or just want to talk, feel free to
            reach out to us.
          </p>
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="flex-1 mb-4 md:mb-0">
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p className="text-gray-700">
                123 Main Street, Suite 101, City, State, ZIP
              </p>
            </div>
            <div className="flex-1 mb-4 md:mb-0">
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-700">info@company.com</p>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-700">(123) 456-7890</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
