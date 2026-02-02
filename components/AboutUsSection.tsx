import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Zap, Award } from 'lucide-react';

const teamMembers = [
  {
    name: "Rajesh Khanna",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200",
    bio: "Former casting director with 15 years in Bollywood."
  },
  {
    name: "Priya Desai",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
    bio: "Managed production for 3 award-winning indie films."
  },
  {
    name: "Arjun Rampal",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    bio: "Renowned cinematographer passionate about education."
  }
];

const AboutUsSection: React.FC = () => {
  return (
    <section id="about-us" className="py-24 relative overflow-hidden bg-cinematic-black">
      {/* Decorative large text background */}
      <div className="absolute top-20 right-0 text-[10rem] font-display font-bold text-white/[0.02] leading-none pointer-events-none select-none">
        VISION
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Mission / Vision Split */}
        <div className="flex flex-col lg:flex-row gap-16 mb-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-1 bg-cinematic-gold rounded-full" />
              <span className="text-cinematic-gold font-bold uppercase tracking-widest text-sm">Our Story</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight">
              Democratizing the <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cinematic-gold via-white to-cinematic-gold">Silver Screen</span>
            </h2>
            <div className="space-y-6 text-lg text-cinematic-textBody leading-relaxed">
              <p>
                DHAARI was born from a simple observation: Talent is universal, but opportunity is not. We realized that thousands of brilliant storytellers, actors, and technicians never get their break simply because they lack the "right network".
              </p>
              <p>
                We are building the digital infrastructure for the Indian film industry. A place where merit shines brighter than connections.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cinematic-charcoal rounded-lg border border-white/10 text-cinematic-gold">
                  <Target />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Our Mission</h4>
                  <p className="text-sm text-cinematic-textMuted">To bridge the gap between raw talent and industry professionals.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cinematic-charcoal rounded-lg border border-white/10 text-cinematic-gold">
                  <Heart />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Our Values</h4>
                  <p className="text-sm text-cinematic-textMuted">Transparency, Meritocracy, and Creative Freedom.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://plus.unsplash.com/premium_photo-1683141123730-04fd4b1a57c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDYzfHx8ZW58MHx8fHx8" 
                alt="Filmmaking Crew on Set" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                <div>
                  <p className="text-cinematic-gold font-bold text-2xl">1000+</p>
                  <p className="text-white">Artists Empowered</p>
                </div>
              </div>
            </div>
            {/* Background Accent */}
            <div className="absolute -top-10 -right-10 w-full h-full border-2 border-cinematic-gold/20 rounded-2xl z-0 hidden md:block" />
          </motion.div>
        </div>

        {/* Team Section */}
        <div className="border-t border-white/5 pt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-display font-bold text-white mb-2">Meet the Visionaries</h3>
            <p className="text-cinematic-textMuted">The people making it happen.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-cinematic-charcoal/50 border border-white/5 p-6 rounded-xl text-center group hover:border-cinematic-gold/30 transition-colors"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-cinematic-gold/50 p-1">
                  <img src={member.image} alt={member.name} className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <h4 className="text-lg font-bold text-white">{member.name}</h4>
                <p className="text-cinematic-gold text-sm uppercase tracking-wide mb-3">{member.role}</p>
                <p className="text-sm text-cinematic-textMuted">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUsSection;