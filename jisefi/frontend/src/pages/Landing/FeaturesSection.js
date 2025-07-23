import React from 'react';

const FeaturesSection = () => {
    return (
        <section id="features">
            <h2>Features</h2>
            <div className="features-list">
                <div className="feature-item">
                    <h3>Feature 1</h3>
                    <p>Description of feature 1.</p>
                </div>
                <div className="feature-item">
                    <h3>Feature 2</h3>
                    <p>Description of feature 2.</p>
                </div>
                <div className="feature-item">
                    <h3>Feature 3</h3>
                    <p>Description of feature 3.</p>
                </div>
                {/* Add more features as needed */}
            </div>
        </section>
    );
};

export default FeaturesSection;