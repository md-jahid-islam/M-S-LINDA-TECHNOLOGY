import React from "react";
 const teamMembers = [
  {
    name: "MD. Jobaidul Islam",
    designation: "Managing Director",
    image: "/images/team/jobaidul.jpg",
    description:
    "A visionary business leader with strong expertise in company management, strategic planning and decision making. He leads multiple companies under the Linda Technology & RZ group with dedication, professionalism and long-term vision.",
    skills: [
      "Business Strategy",
      "Company Management",
      "Leadership",
      "Decision Making",
      "Project Planning",
    ],
    companies: [
      "M/S Linda Technology",
      "M/S Reliance Trading",
      "M/S Rahat Zarif Accessories",
      "RZ Poly And Packaging Ltd",
    ],
  },
  {
    name: "MD. Ferdous Rahman",
    designation: "Chairman",
    image: "/images/team/ferdous.jpg",
    description:
    "An experienced and dedicated manager skilled in office administration, client communication and team coordination. He ensures smooth daily operations and maintains strong relationships with clients and staff.",
    skills: [
      "Office Administration",
      "Client Handling",
      "Sales Management",
      "Inventory Control",
      "Team Supervision",
    ],
    companies: [
      "M/S Linda Technology",
      "M/S Reliance Trading",
      "M/S Rahat Zarif Accessories",
      "RZ Poly And Packaging Ltd",
    ],
  },
  {
    name: "Mst. Eitysha Eity",
    designation: "Manager",
    image: "/images/team/eity.jpg",
    description:
    "A hardworking and organized professional responsible for customer support, report management and office coordination. She plays an important role in maintaining efficient communication and documentation.",
    skills: [
      "Customer Service",
      "Data Entry",
      "Communication",
      "Report Management",
      "Office Support",
    ],
    companies: [
      "M/S Linda Technology",
      "M/S Reliance Trading",
      "M/S Rahat Zarif Accessories",
      "RZ Poly And Packaging Ltd",
    ],
  },
  {
    name: "MD. Saiful Islam",
    designation: "Hardware Engineer",
    image: "/images/team/saiful.jpg",
    description:
    "A skilled hardware engineer with strong experience in computer hardware, networking systems, CCTV installation, and technical troubleshooting. He supports and maintains the technical infrastructure of the company.",
    skills: [
      "Computer Hardware",
      "Networking",
      "CCTV Setup",
      "Printer Repair",
      "Troubleshooting",
    ],
    companies: [
      "M/S Linda Technology",
      "M/S Reliance Trading",
      "M/S Rahat Zarif Accessories",
      "RZ Poly And Packaging Ltd",
    ],
  },
  {
    name: "MD. Jahidul Islam",
    designation: "Web & Software Developer",
    image: "/images/imges.jpg",
    description:
    "A creative and passionate web & software engineer specializing in modern front-end and full stack technologies. He designs and develops responsive, high-performance websites and applications for business solutions.",
    skills: [
      "React.js",
      "Node.js",
      "HTML, CSS, JavaScript",
      "Next.js",
      "Firebase",
      "UI/UX Design",
      "API Integration",
      "Git & GitHub",
    ],
    companies: [
      "M/S Linda Technology",
      "M/S Reliance Trading",
      "M/S Rahat Zarif Accessories",
      "RZ Poly And Packaging Ltd",
    ],
  },
 ];

 const AboutUsComponents = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-5 py-10">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">
      About Our Company & Professionals
      </h2>

      {/* Description */}
      <section className="mb-16 text-center max-w-3xl mx-auto">
        <p className="text-gray-700 leading-relaxed text-lg">
          We are a professional business group operating in technology,
          trading, accessories, and packaging industries. Our successful
          operation is driven by experienced leadership, skilled engineers
          and dedicated management teams working together with excellence.
        </p>
      </section>

      {/* Team Section */}
      <section>
        <h3 className="text-3xl font-bold text-center mb-12">
          Our Skilled Team Members
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {teamMembers.map((member, index) => (
            <div
              key={index} className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col">
              {/* Image */}
              <div className="flex justify-center mb-5 ">
              <img src={member.image} alt={member.name} className="w-28 h-28 rounded-full mt-2 object-cover group-hover:scale-110 transition"/>
              </div>

              {/* Name & Designation */}
              <h4 className="text-xl font-bold text-center text-gray-800 mb-1">
                {member.name}
              </h4>
              <p className="text-center text-blue-500 font-semibold mb-3">
                {member.designation}
              </p>

              {/* Description */}
              <p className="text-sm text-gray-600 text-center mb-5 leading-relaxed">
                {member.description}
              </p>

              {/* Skills */}
              <div className="mb-5">
                <h5 className="text-sm font-semibold mb-2 text-gray-700">
                  Skills:
                </h5>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill, i) => (
                    <span
                      key={i} className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Companies */}
              <div>
                <h5 className="text-sm font-semibold mb-2 text-gray-700">
                  Companies:
                </h5>
                <div className="flex flex-wrap gap-2">
                  {member.companies.map((company, i) => (
                    <span
                      key={i}
                      className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                      {company}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
 }; 
 
 export default AboutUsComponents;
 //  fsdhjsdf0rl;qwer;lasdfk 