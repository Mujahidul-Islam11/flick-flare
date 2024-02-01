/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";


const About = () => {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="md:max-w-3xl mx-auto text-center">
          <h1 className=" text-2xl md:text-4xl font-bold mb-6 text-sky-300">About Our App</h1>
          <p className="text-lg mb-4 text-gray-800">
            Welcome to our React JS application! Our app allows you to explore a variety of TV shows and get detailed information about each one.
          </p>
          <p className="text-lg mb-4 text-gray-800">
            With our user-friendly interface, you can easily browse through different shows, view their summaries, and even book movie tickets directly from the app.
          </p>
          <p className="text-lg mb-4 text-gray-800">
            Whether you're a fan of drama, comedy, or sports, our app has something for everyone. Get ready to immerse yourself in the world of television entertainment!
          </p>
          <p className="text-lg mb-4 text-gray-800">
            If you have any feedback or suggestions for improving our app, feel free to reach out to us. We're constantly working to enhance your viewing experience.
          </p>
          <p className="text-lg mb-6 text-gray-800">
            Thank you for using our app and happy watching!
          </p>
          <Link to="/Contact" className="btn btn-accent text-white">Contact Us</Link>
        </div>
      </div>
    );
  };
  
  export default About;
