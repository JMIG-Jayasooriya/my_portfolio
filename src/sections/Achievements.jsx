import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { achievements } from '../data/portfolioData';
import { Trophy, Star, Users, Award, ShieldCheck } from 'lucide-react';

const iconByCategory = {
  Competition: Trophy,
  Academics: Star,
  'Volunteering & Leadership': Users,
  Leadership: ShieldCheck
};

const Achievements = () => {
  return (
    <section id="achievements" className="section section-alt">
      <div className="container">
        <SectionTitle
          subtitle="RECOGNITION & PARTICIPATION"
          title="Achievements & Activities"
          description="Honours, extracurricular milestones, team initiatives, and leadership activities."
        />

        <div className="achievements-grid">
          {achievements.map((item) => {
            const Icon = iconByCategory[item.category] || Award;
            return (
              <div key={item.id} className="achievement-card">
                <div className="achievement-icon">
                  <Icon size={22} />
                </div>
                <div className="achievement-badge">{item.category}</div>
                <h3 className="achievement-title">{item.title}</h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
                  {item.date}
                </span>
                <p className="achievement-desc">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
