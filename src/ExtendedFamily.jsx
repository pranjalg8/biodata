import { Link } from 'react-router-dom'
import './App.css'

// Extended Family Data from biodata document
const extendedFamilyData = {
    paternalUncles: [
        {
            name: "Mr. Harishchandra Gupta",
            spouse: "Mrs. Urmila Gupta",
            relation: "Chachaji",
            occupation: "Kirana Merchant",
            location: "Mahoba"
        },
        {
            name: "Mr. Chandra Prakash Gupta",
            spouse: "Mrs. Sangeeta Gupta",
            relation: "Chachaji",
            occupation: "Dhanwantari Medical Store",
            location: "Mahoba"
        }
    ],
    paternalAunts: [
        {
            name: "Smt. Usha Gupta",
            spouse: "Late Ashok Gupta",
            relation: "Buaji",
            occupation: "Pneumatic Balaji Trading",
            location: "Mahoba"
        },
        {
            name: "Smt. Gayatri Gupta (Manju)",
            spouse: "Mr. Umesh Gupta",
            relation: "Buaji",
            occupation: "Gupta Pustak Mahal",
            location: "Rath, U.P."
        }
    ],
    maternalUncles: [
        {
            name: "Dr. Pankaj Gupta",
            spouse: "Mrs. Naina Gupta",
            relation: "Mamaji",
            occupation: "Asst. Professor, IGDTU, Delhi",
            spouseOccupation: "Executive Engineer, UJVN, Dehradun",
            location: "Delhi / Dehradun"
        },
        {
            name: "Mr. Pradeep Gupta",
            spouse: "Mrs. Manisha Gupta",
            relation: "Mamaji",
            occupation: "Senior Associate VP, JP Morgan Chase",
            location: "Bangalore"
        }
    ],
    maternalAunts: [
        {
            name: "Mrs. Shashi Prabha Gupta",
            spouse: "Late Ramesh Chandra Gupta",
            relation: "Mausi",
            occupation: "",
            location: "Lohe wale, Mahoba"
        },
        {
            name: "Mrs. Sangeeta Gupta",
            spouse: "Mr. Amit Gupta",
            relation: "Mausi",
            occupation: "Supervisor, Careington Benefit Solutions",
            spouseOccupation: "Finance Director, Aramark Inc.",
            location: "USA"
        }
    ]
}

function FamilyMemberCard({ member, icon }) {
    return (
        <div className="extended-family-card">
            <div className="family-member-icon">{icon}</div>
            <div className="family-member-details">
                <span className="member-relation">{member.relation}</span>
                <span className="member-name">{member.name}</span>
                {member.spouse && (
                    <span className="member-spouse">& {member.spouse}</span>
                )}
                {member.occupation && (
                    <span className="member-occupation">{member.occupation}</span>
                )}
                {member.spouseOccupation && (
                    <span className="member-occupation spouse-job">{member.spouseOccupation}</span>
                )}
                <span className="member-location">📍 {member.location}</span>
            </div>
        </div>
    )
}

function ExtendedFamily() {
    return (
        <div className="biodata-container extended-family-page">
            {/* Header */}
            <header className="header">
                <div className="decorative-border top"></div>
                <div className="header-content">
                    <div className="om-symbol">॥ श्री गणेशाय नमः ॥</div>
                    <div className="decorative-divider">
                        <span className="divider-ornament">✦</span>
                    </div>
                </div>
            </header>

            {/* Navigation */}
            <nav className="page-nav">
                <Link to="/" className="nav-link">← Back to Biodata</Link>
            </nav>

            {/* Page Title */}
            <section className="page-title-section">
                <h1 className="page-title">Extended Family</h1>
                <p className="page-subtitle">रिश्तेदार परिवार</p>
            </section>

            {/* Paternal Side */}
            <section className="section extended-section visible">
                <div className="section-header">
                    <h3><span className="icon">👨‍👧‍👦</span> Paternal Side (पिता के परिवार)</h3>
                </div>

                <div className="extended-subsection">
                    <h4 className="subsection-title">चाचाजी (Father's Brothers)</h4>
                    <div className="extended-family-grid">
                        {extendedFamilyData.paternalUncles.map((member, index) => (
                            <FamilyMemberCard key={index} member={member} icon="👨‍👩‍👧" />
                        ))}
                    </div>
                </div>

                <div className="extended-subsection">
                    <h4 className="subsection-title">बुआजी (Father's Sisters)</h4>
                    <div className="extended-family-grid">
                        {extendedFamilyData.paternalAunts.map((member, index) => (
                            <FamilyMemberCard key={index} member={member} icon="👩‍👧‍👦" />
                        ))}
                    </div>
                </div>
            </section>

            {/* Maternal Side */}
            <section className="section extended-section visible">
                <div className="section-header">
                    <h3><span className="icon">👩‍👧‍👦</span> Maternal Side (माता के परिवार)</h3>
                </div>

                <div className="extended-subsection">
                    <h4 className="subsection-title">मामाजी (Mother's Brothers)</h4>
                    <div className="extended-family-grid">
                        {extendedFamilyData.maternalUncles.map((member, index) => (
                            <FamilyMemberCard key={index} member={member} icon="👨‍👩‍👧" />
                        ))}
                    </div>
                </div>

                <div className="extended-subsection">
                    <h4 className="subsection-title">मौसीजी (Mother's Sisters)</h4>
                    <div className="extended-family-grid">
                        {extendedFamilyData.maternalAunts.map((member, index) => (
                            <FamilyMemberCard key={index} member={member} icon="👩‍👧‍👦" />
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="decorative-divider">
                    <span className="divider-ornament">✦</span>
                </div>
                <Link to="/" className="back-to-main">← Back to Main Biodata</Link>
                <div className="decorative-border bottom"></div>
            </footer>
        </div>
    )
}

export default ExtendedFamily
