/* eslint-disable react/no-unescaped-entities */


const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
          <img src="https://i.postimg.cc/0NLx0CD1/Allura-Giant-Phone.png" alt="Contact" className="w-full rounded-lg shadow-lg" />
        </div>
        <div className="lg:w-1/2 lg:pl-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-sky-300">Contact Us</h2>
          <p className="text-lg mb-4 text-gray-800">
            Feel free to reach out to us with any questions, feedback, or inquiries. We're here to help!
          </p>
          <div>
          <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="your name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea type="text" placeholder="your message" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Send</button>
        </div>
      </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
