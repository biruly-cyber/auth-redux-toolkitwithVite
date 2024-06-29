const Footer = () => {
  return (
    <footer className="bg-gray-100 text-slate-900 p-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <h2 className="text-lg font-bold">About Us</h2>
          <p className="text-sm">
            We are a company dedicated to providing the best service in the
            industry. Our mission is to ensure customer satisfaction through our
            innovative solutions.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-bold">Contact</h2>
          <p className="text-sm">Email: contact@company.com</p>
          <p className="text-sm">Phone: (123) 456-7890</p>
        </div>
        <div>
          <h2 className="text-lg font-bold">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">
              Facebook
            </a>
            <a href="#" className="hover:text-gray-400">
              Twitter
            </a>
            <a href="#" className="hover:text-gray-400">
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-sm mt-4">
        &copy; 2024 MyApp. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
