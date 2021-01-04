module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('Users', [
      {
        firstName: 'test1',
        lastName: 'test1 ',
        email: 'test1@gmail.com',
        password:
          '$2a$10$cqr3lawLxN6RC9g9FbozgOn7kvTYhZIbAX5faN/7NpoaMKr1HaTrO',
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        firstName: 'test2',
        lastName: 'test2b',
        email: 'test2@gmail.com',
        password:
          '$2a$10$TNvFsNkK92ZhEi/jkXikU.CC73qjYYcZw.tDI.WxFWABu70WzuVuW',
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        firstName: 'test3',
        lastName: 'test3b',
        email: 'test3@gmail.com',
        password:
          '$2a$10$2PEonMojuvJx.X4OKd88Fe7xA0ajpJq67WESjaZ.TQaIcuhFcMOq2',
        updatedAt: new Date(),
        createdAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Users', null, {});
  },
};
