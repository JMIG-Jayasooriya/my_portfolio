import React from 'react';

const SectionTitle = ({ subtitle, title, description, align = 'center' }) => {
  return (
    <div className="section-header" style={{ textAlign: align, marginLeft: align === 'left' ? 0 : 'auto', marginRight: align === 'left' ? 'auto' : 'auto' }}>
      {subtitle && <span className="section-subtitle">{subtitle}</span>}
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
};

export default SectionTitle;
