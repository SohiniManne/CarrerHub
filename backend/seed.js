const bcrypt = require('bcryptjs');
const { sequelize } = require('./config/db');
const User = require('./models/User');
const Internship = require('./models/Internship');
const Referral = require('./models/Referral');

const seed = async () => {
  try {
    // Sync tables (optional if already synced)
    await sequelize.sync({ alter: true });

    // Clear existing data (optional)
    // await Referral.destroy({ where: {} });
    // await Internship.destroy({ where: {} });
    // await User.destroy({ where: {} });

    // Seed Users
    const hashedPassword = await bcrypt.hash('password123', 10);

    const users = await User.bulkCreate([
      { name: 'Alice Student', email: 'alice@student.com', password: hashedPassword, role: 'student' },
      { name: 'Bob Employee', email: 'bob@company.com', password: hashedPassword, role: 'employee' },
      { name: 'Admin User', email: 'admin@company.com', password: hashedPassword, role: 'admin' },
    ]);

    // Seed Internships
    const internships = await Internship.bulkCreate([
      { title: 'Frontend Intern', company: 'TechCorp', domain: 'Frontend', location: 'Remote', description: 'Learn React.js' },
      { title: 'Backend Intern', company: 'TechCorp', domain: 'Backend', location: 'Remote', description: 'Learn Node.js' },
      { title: 'Fullstack Intern', company: 'Innovatech', domain: 'Fullstack', location: 'Onsite', description: 'React + Node.js' },
    ]);

    // Seed Referrals
    await Referral.bulkCreate([
      { internship_id: internships[0].id, student_id: users[0].id, referrer_id: users[1].id, status: 'pending' },
      { internship_id: internships[1].id, student_id: users[0].id, referrer_id: users[1].id, status: 'accepted' },
    ]);

    console.log('Database seeded successfully!');
    process.exit();
  } catch (err) {
    console.error('Error seeding database:', err);
    process.exit(1);
  }
};

seed();
