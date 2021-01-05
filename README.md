# Todo_Backend

Shema Todo Backend

![Node.js CI](https://github.com/ShemaM/Todo_Backend/workflows/Node.js%20CI/badge.svg)
[![Maintainability](https://api.codeclimate.com/v1/badges/8ab608a1715a3aaeafa4/maintainability)](https://codeclimate.com/github/ShemaM/Todo_Backend/maintainability)

# API Endpoints included

### User

- **POST /register:** Create an account
- **POST /login:** Log into your account

### Blog

- **POST /tasks:** Create a Task
- **GET /tasks/:Id:** Fetch one Task
- **PATCH /tasks/:Id:** Update a single Task
- **DELETE /tasks/:Id:** Delete a task

# [Documentation](https://shema-todoapp.herokuapp.com/documentation/)

# Installation and Environment Setup

**Clone the repository from [Github](https://github.com/ShemaM/todo_backend).**

( You will need **Git** for this if you are running a Windows PC, Get it [HERE](https://git-scm.com/) )

```
git clone https://github.com/ShemaM/My-Brand.git
```

**To Install all dependencies:**

```
npm install
```

**To run the test:**

```
npm run test OR npm run cover
```

**Now to start the app:**

```
npm run start
```

**To start the app in development mode:**

( You need **nodemon** installed for this, run `npm i -g nodemon` to install it )

```
npm run dev
```

# Tools used

- Server-Side Framework: **Node/Express**
- Testing framework: **Mocha/Chai**

# More Tools

- Continuous integration: **[Travis-Ci](travis-ci.org)**
- ES6 Transpiler: **[Babel](babeljs.io)**
- Test coverage: **[nyc](https://www.npmjs.com/package/nyc)**
- Maintainability: **[Code climate](https://codeclimate.com)**
- Deployment: **[Heroku](https://www.heroku.com)** and **[Netlify](https://www.netlify.com/)**

# Deployments

- The API is hosted on Heroku at https://shema-todoapp.herokuapp.com/

# Author:

**Shema Mugisha Christian**
