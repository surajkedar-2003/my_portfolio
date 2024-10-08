import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Redux', 'TypeScript', 'Tailwind CSS'];
    const totalSkills = skills.length;
    const radius = 200; // Radius for the circular path of skills

    return (
        <section id="skills" className="h-screen flex flex-col items-center justify-around gap-4 border">
            <h2 className="font-semibold text-4xl text-center">Skills</h2>
            <motion.div
                className="relative flex items-center justify-center rounded-full bg-circularLight h-[300px] w-[300px]"
                animate={{
                    rotate: 360, // Rotate the entire div
                }}
                transition={{
                    repeat: Infinity, // Infinite rotation
                    duration: 20, // Duration of one rotation (seconds)
                    ease: 'linear', // Smooth linear rotation
                }}
            >
                <div className="absolute flex items-center justify-center rounded-full bg-white text-black h-[120px] w-[120px]">
                    <h3 className="text-center text-sm font-bold">Main Skills</h3>
                </div>
                {skills.map((skill, index) => {
                    // Calculate the angle for each skill
                    const angle = (index / totalSkills) * 2 * Math.PI;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;

                    return (
                        <div
                            key={index}
                            className="absolute flex items-center justify-center rounded-full bg-primary text-white h-[80px] w-[80px]"
                            style={{
                                transform: `translate(${x}px, ${y}px)`,
                                left: '50%',
                                top: '50%',
                                marginLeft: '-40px', // Half of skill circle width for proper alignment
                                marginTop: '-40px', // Half of skill circle height for proper alignment
                            }}
                        >
                            {skill}
                        </div>
                    );
                })}
            </motion.div>
        </section>
    );
};

export default Skills;
