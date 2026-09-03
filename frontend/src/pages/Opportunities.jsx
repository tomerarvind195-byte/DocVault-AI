import { useState } from "react";
import {
  Search,
  Briefcase,
  Landmark,
  MapPin,
  Clock,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  Filter,
} from "lucide-react";

const opportunitiesData = [
  {
    id: 1,
    type: "Job",
    title: "Junior Web Developer",
    company: "Tech Solutions India",
    location: "Noida, Uttar Pradesh",
    salary: "₹4 - 6 LPA",
    deadline: "30 Aug 2026",
    match: 95,
    skills: ["React", "JavaScript", "HTML", "CSS"],
    description:
      "Entry-level web development opportunity for candidates with frontend development skills.",
  },

  {
    id: 2,
    type: "Job",
    title: "Python Developer Intern",
    company: "AI Innovation Labs",
    location: "Remote",
    salary: "₹15,000/month",
    deadline: "05 Sep 2026",
    match: 91,
    skills: ["Python", "Django", "SQL"],
    description:
      "Internship opportunity for students interested in Python and AI-based application development.",
  },

  {
    id: 3,
    type: "Scheme",
    title: "National Scholarship Scheme",
    company: "Government of India",
    location: "India",
    salary: "Financial Assistance",
    deadline: "15 Sep 2026",
    match: 88,
    skills: ["Student", "Education"],
    description:
      "Financial assistance opportunity for eligible students pursuing higher education.",
  },

  {
    id: 4,
    type: "Job",
    title: "Frontend Developer",
    company: "Digital India Startup",
    location: "Bengaluru / Remote",
    salary: "₹5 - 8 LPA",
    deadline: "20 Sep 2026",
    match: 84,
    skills: ["React", "JavaScript", "CSS"],
    description:
      "Frontend development role focused on building modern and responsive web applications.",
  },

  {
    id: 5,
    type: "Scheme",
    title: "Skill Development Program",
    company: "Government Skill Initiative",
    location: "India",
    salary: "Free Training",
    deadline: "25 Sep 2026",
    match: 81,
    skills: ["Skill Development", "Training"],
    description:
      "Free skill development and training program for eligible candidates.",
  },

  {
    id: 6,
    type: "Job",
    title: "Software Engineer Trainee",
    company: "IT Services Company",
    location: "Gurugram, Haryana",
    salary: "₹4.5 - 7 LPA",
    deadline: "30 Sep 2026",
    match: 78,
    skills: ["Python", "SQL", "Git"],
    description:
      "Graduate trainee position for candidates starting their software engineering career.",
  },
];

function Opportunities() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filteredOpportunities = opportunitiesData.filter((item) => {
    const matchesFilter =
      activeFilter === "All" || item.type === activeFilter;

    const searchText = search.toLowerCase();

    const matchesSearch =
      item.title.toLowerCase().includes(searchText) ||
      item.company.toLowerCase().includes(searchText) ||
      item.location.toLowerCase().includes(searchText) ||
      item.skills.some((skill) =>
        skill.toLowerCase().includes(searchText)
      );

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="opportunities-page">

      {/* ================= HEADER ================= */}

      <div className="opportunities-header">

        <div>
          <div className="opportunities-title-row">
            <div className="opportunities-title-icon">
              <Sparkles size={22} />
            </div>

            <div>
              <h1>Opportunities</h1>

              <p>
                Discover jobs and government schemes matched
                to your documents and skills.
              </p>
            </div>
          </div>
        </div>

      </div>


      {/* ================= AI MATCH BANNER ================= */}

      <div className="ai-match-banner">

        <div className="ai-banner-icon">
          <Sparkles size={24} />
        </div>

        <div className="ai-banner-content">
          <h3>AI-Powered Recommendations</h3>

          <p>
            We found opportunities that match your
            documents, education and skills.
          </p>
        </div>

        <div className="ai-banner-count">
          <strong>6</strong>
          <span>Matches Found</span>
        </div>

      </div>


      {/* ================= SEARCH & FILTER ================= */}

      <div className="opportunity-controls">

        <div className="opportunity-search">

          <Search size={18} />

          <input
            type="text"
            placeholder="Search jobs, schemes, skills..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>


        <div className="opportunity-filters">

          <div className="filter-label">
            <Filter size={15} />
            Filter
          </div>

          {["All", "Job", "Scheme"].map((filter) => (
            <button
              key={filter}
              className={
                activeFilter === filter
                  ? "opportunity-filter active"
                  : "opportunity-filter"
              }
              onClick={() => setActiveFilter(filter)}
            >
              {filter === "All" && "All Opportunities"}

              {filter === "Job" && (
                <>
                  <Briefcase size={14} />
                  Jobs
                </>
              )}

              {filter === "Scheme" && (
                <>
                  <Landmark size={14} />
                  Schemes
                </>
              )}
            </button>
          ))}

        </div>

      </div>


      {/* ================= RESULT COUNT ================= */}

      <div className="opportunity-result-info">
        <strong>{filteredOpportunities.length}</strong>
        opportunities available
      </div>


      {/* ================= CARDS ================= */}

      <div className="opportunities-grid">

        {filteredOpportunities.length > 0 ? (

          filteredOpportunities.map((item) => (

            <div
              className="opportunity-card"
              key={item.id}
            >

              {/* Card top */}

              <div className="opportunity-card-top">

                <div
                  className={
                    item.type === "Job"
                      ? "opportunity-type job"
                      : "opportunity-type scheme"
                  }
                >
                  {item.type === "Job" ? (
                    <Briefcase size={14} />
                  ) : (
                    <Landmark size={14} />
                  )}

                  {item.type}
                </div>


                <div className="match-score">

                  <CheckCircle2 size={15} />

                  {item.match}% Match

                </div>

              </div>


              {/* Title */}

              <h2>{item.title}</h2>

              <div className="opportunity-company">
                {item.company}
              </div>


              {/* Details */}

              <div className="opportunity-details">

                <div>
                  <MapPin size={15} />
                  {item.location}
                </div>

                <div>
                  <Clock size={15} />
                  Deadline: {item.deadline}
                </div>

              </div>


              {/* Salary */}

              <div className="opportunity-salary">
                {item.salary}
              </div>


              {/* Description */}

              <p className="opportunity-description">
                {item.description}
              </p>


              {/* Skills */}

              <div className="opportunity-skills">

                {item.skills.map((skill) => (
                  <span key={skill}>
                    {skill}
                  </span>
                ))}

              </div>


              {/* Bottom */}

              <div className="opportunity-card-footer">

                <span className="match-text">
                  {item.match >= 90
                    ? "Excellent match"
                    : item.match >= 80
                    ? "Good match"
                    : "Potential match"}
                </span>

                <button
                  className="apply-btn"
                  onClick={() =>
                    alert(
                      `Opening application for ${item.title}`
                    )
                  }
                >
                  View Opportunity
                  <ExternalLink size={15} />
                </button>

              </div>

            </div>

          ))

        ) : (

          <div className="no-opportunities">

            <Search size={40} />

            <h3>No opportunities found</h3>

            <p>
              Try changing your search or filter.
            </p>

          </div>

        )}

      </div>

    </div>
  );
}

export default Opportunities;