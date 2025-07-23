import React from 'react';

const TeamSection = () => {
    const teamMembers = [
        {
            name: 'John Doe',
            role: 'Project Manager',
            image: 'path/to/image1.jpg',
            bio: 'John has over 10 years of experience in project management and has successfully led multiple projects to completion.'
        },
        {
            name: 'Jane Smith',
            role: 'Lead Developer',
            image: 'path/to/image2.jpg',
            bio: 'Jane is a full-stack developer with a passion for building scalable web applications.'
        },
        {
            name: 'Alice Johnson',
            role: 'UI/UX Designer',
            image: 'path/to/image3.jpg',
            bio: 'Alice specializes in creating user-friendly interfaces and enhancing user experiences.'
        },
        {
            name: 'Bob Brown',
            role: 'Data Scientist',
            image: 'path/to/image4.jpg',
            bio: 'Bob uses data to drive decisions and improve product features through analytics.'
        }
    ];

    return (
        <section className="team-section">
            <h2>Meet Our Team</h2>
            <div className="team-members">
                {teamMembers.map((member, index) => (
                    <div key={index} className="team-member">
                        <img src={member.image} alt={member.name} />
                        <h3>{member.name}</h3>
                        <p>{member.role}</p>
                        <p>{member.bio}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TeamSection;