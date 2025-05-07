import React, { useState } from 'react';

export default function Meet() {
  const [hoveredItem, setHoveredItem] = useState(null);
  
  const teamMembers = [
    {
      id: 1,
      imageSrc: "/images/card1.png",
      text: "transcends the old world of financial city in favor of a decentralized digital store of value.",
      title: "RABBITSKY",
      subtitle: "FOUNDER",
      color: "#3b82f6" // blue-500
    },
    {
      id: 2,
      imageSrc: "/images/card2.png",
      text: "transcends the old world of financial city in favor of a decentralized digital store of value.",
      title: "JOE RABBIT",
      subtitle: "FOUNDER",
      color: "#ec4899" // pink-500
    },
    {
      id: 3,
      imageSrc: "/images/card3.png",
      text: "transcends the old world of financial city in favor of a decentralized digital store of value.",
      title: "RAT KING",
      subtitle: "FOUNDER",
      color: "#22c55e" // green-500
    },
    {
      id: 4,
      imageSrc: "/images/card4.png",
      text: "transcends the old world of financial city in favor of a decentralized digital store of value.",
      title: "ARTIST",
      subtitle: "ARTIST",
      color: "#ef4444" // red-500
    }
  ];

  // Custom CSS as an object for inline styles
  const styles = {
    container: {
      padding: '1rem',
      display: 'flex',
      justifyContent: 'center',
    },
    gridContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1rem',
      width: '100%',
      maxWidth: '1200px'
    },
    itemContainer: (isHovered) => ({
      border: '4px solid white',
      borderRadius: '0.5rem',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
      transform: isHovered ? 'scale(1.05)' : 'scale(1)',
      boxShadow: isHovered ? '0 0 20px rgba(255,255,255,0.3)' : 'none'
    }),
    imageSection: {
      height: '16rem',
      position: 'relative',
      overflow: 'hidden'
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    starOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    },
    star: (index) => ({
      position: 'absolute',
      width: '4px',
      height: '4px',
      backgroundColor: 'white',
      borderRadius: '50%',
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      opacity: 0.6 + Math.random() * 0.4,
      animation: 'pulse 2s infinite',
      animationDelay: `${Math.random() * 3}s`
    }),
    contentSection: {
      backgroundColor: 'white',
      padding: '1rem',
      textAlign: 'center'
    },
    text: {
      fontSize: '0.75rem',
      marginBottom: '0.75rem'
    },
    title: (color) => ({
      fontSize: '1.125rem',
      fontWeight: '900',
      color: color,
      marginBottom: '0.25rem',
      animation: 'pulse 2s infinite'
    }),
    subtitle: {
      fontSize: '0.875rem',
      color: '#4b5563', // gray-600
      marginBottom: '0.5rem'
    },
    // CSS animations
    '@keyframes pulse': {
      '0%': {opacity: 0.6},
      '50%': {opacity: 1},
      '100%': {opacity: 0.6}
    }
  };

  return (
    <>
    <img src="/images/skeleton1.png" alt="" className='skeleton1'/>
    <div className='text-center'>
      
      <h1 className='meet'><span><img src="/images/bitcoin.png" alt="" className='btc-meet'/></span> MEET THE TEAM </h1>
    </div>
    <div style={styles.container} className='container-fluid'>
      <div style={styles.gridContainer}>
        {teamMembers.map((member, index) => (
          <div 
            key={member.id}
            style={styles.itemContainer(hoveredItem === index)}
            onMouseEnter={() => setHoveredItem(index)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {/* Image section */}
            <div style={styles.imageSection}>
              <img 
                src={member.imageSrc}
                alt={member.title}
                style={styles.image}
              />
              
              {/* Stars animation overlay */}
              <div style={styles.starOverlay}>
                {[...Array(15)].map((_, i) => (
                  <div 
                    key={i}
                    style={{
                      ...styles.star(i),
                      animation: 'pulse 2s infinite',
                      animationDelay: `${Math.random() * 3}s`
                    }}
                  />
                ))}
              </div>
            </div>
            
            {/* Content section */}
            <div style={styles.contentSection}>
              <p style={styles.text}>
                {member.text}
              </p>
              <h5 style={{
                ...styles.title(member.color),
                animation: 'pulse 2s infinite',
                fontFamily: 'Upheavtt',
              }}>
                {member.title}
              </h5>
              <h6 style={styles.subtitle}>
                {member.subtitle}
              </h6>
            </div>
          </div>
        ))}
      </div>
      
      {/* Add keyframes for animations */}
      <style jsx>{`
        @keyframes pulse {
          0% { opacity: 0.6; }
          50% { opacity: 1; }
          100% { opacity: 0.6; }
        }
      `}</style>
    </div>
    </>
  );
}