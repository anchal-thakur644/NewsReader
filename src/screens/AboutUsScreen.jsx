import React from "react";

const AboutUsScreen = () => {
  const teamMembers = [
    {
      name: "Baljit Kaur",
      rollNumber: "2224885",
      branch: "IT",
      className: "BCA 3rd Year",
      image:
        "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
    },
    {
      name: "Gagan",
      rollNumber: "2224889",
      branch: "IT",
      className: "BCA 3rd Year",
      image:
        "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
    },
    {
      name: "Harpreet Kaur",
      rollNumber: "2224896",
      branch: "IT",
      className: "BCA 3rd Year",
      image:
        "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
    },
    {
      name: "Anchal",
      rollNumber: "2224878",
      branch: "IT",
      className: "BCA 3rd Year",
      image:
        "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50 px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-gray-600 mb-10">
            We are a team of passionate students developing a smart News Reader
            platform using React and modern web technologies.
          </p>

          <h2 className="text-3xl font-semibold text-blue-600 mb-6">
            Meet Our Team
          </h2>

          <div className="flex justify-center gap-8 ">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden w-80 transform hover:scale-105 hover:shadow-xl transition duration-500">
                <img
                  src={member.image}
                  alt={member.name}
                  className="m-4 h-40 w-40 rounded-full"
                />
                <div className="p-5 text-left">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-1">
                    <span className="font-medium">Class:</span>{" "}
                    {member.className}
                  </p>
                  <p className="text-gray-600 text-sm mb-1">
                    <span className="font-medium">Roll No:</span>{" "}
                    {member.rollNumber}
                  </p>
                  <p className="text-gray-600 text-sm">
                    <span className="font-medium">Branch:</span> {member.branch}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-8">
            About This App{" "}
          </h1>

          <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                News Reader
              </h2>
              <p className="text-gray-600">
                A news reader is a program or app that helps you read the latest
                news from different websites all in one place. Instead of
                visiting many news sites, a news reader collects and shows the
                news for you so you can stay updated easily.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Our Mission
              </h2>
              <p className="text-gray-600">
                At News Reader, our mission is to deliver fast, accurate, and
                personalized news to our readers. We aim to provide a platform
                where users can stay updated with events that matter most to
                them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Future Scope
              </h2>
              <p className="text-gray-600">
                News reader has different future scope for better understanding
                and conveys information to users.
                <ul className="list-disc list-inside text-gray-600">
                  <li>
                    In future, AI will be able to condense lengthy articles into
                    bite-sized summaries, audio snippets or even visual
                    info-graphics, saving your time while keeping you informed.
                  </li>
                  <li>
                    In future, we can AI chat bots for better user experience
                    for GUI (Graphical User Interface).
                  </li>
                  <li>
                    In future, news reader websites or applications are more
                    secure as per now.
                  </li>
                  <li>
                    News reader app version will be upgraded and remove unwanted
                    feature or unsecure information.
                  </li>
                </ul>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                About Our Team
              </h2>
              <p className="text-gray-600">
                We are a small team of people who love news and want to make it
                easy for everyone to stay informed. Our goal is to bring you the
                latest and most important news from around the world in one
                simple place. We believe everyone has the right to know what’s
                happening in the world—without confusion or stress. That’s why
                we created this news reader website: to help you find news that
                matters, fast and easy. Thank you for trusting us to keep you
                updated.
              </p>
            </section>

            <section></section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                What We Offer
              </h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>Real-time news updates from top sources</li>
                <li>Customizable news feeds based on interests</li>
                <li>Mobile-friendly experience</li>
                <li>Bookmark and read-later options</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Contact Us
              </h2>
              <p className="text-gray-600">
                Have questions or suggestions? Feel free to reach out at{" "}
                <a
                  href="mailto:support@newsreader.com"
                  className="text-blue-600 hover:underline">
                  support@newsreader.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsScreen;
