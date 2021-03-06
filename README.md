<br />
<p align="center">
    <h3 align="center">React Interview Project</h3>
    <h4 align="center">Demo: <a href="https://react-interview-project.vercel.app/">https://react-interview-project.vercel.app/</a></h4>
    <p align="center">
    A small web application that fetches data from <a href="https://jsonplaceholder.typicode.com/">typicode</a>
    <br />
    <br />
    <a href="https://twitter.com/iamGimiga">Contact me</a>
    ·
    <a href="https://github.com/zidanegimiga/react-interview-project/issues">Report Bug</a>
    ·
    <a href="https://github.com/zidanegimiga/react-interview-project/issues">Request Feature</a>
  </p>
</p>

  <!-- TABLE OF CONTENTS -->
  ## Table of Contents

  - [About the Project](#about-the-project)
  - [Specifications](#Specifications)
  - [Rules](#Rules)

  <!-- ABOUT THE PROJECT -->
  ## About The Project
  This project was assigned by Savannah Informatics to assess my React technical skills. The goal of this small project is to create a small webApp displaying users and their related posts.

  ### Specifications
  - Add the option to fetch each user posts on <a href="https://jsonplaceholder.typicode.com/">jsonplaceholder</a> and display them with their user.
  - The name of each user should be editable, and should send the update to the server (note that the update is faked on jsonplaceholder).
  - Display the number of users living in an Appt, and in a Suite (field address.suite).

  ### Design
  Figma Link: https://www.figma.com/file/lh04De0iBAplQCcl9eUP1M/React-Project-Interview?node-id=0%3A1
  
  ![image](https://user-images.githubusercontent.com/33351058/166953718-0e97bf55-4d93-4312-adeb-1b6838a5879d.png)
  
  ![image](https://user-images.githubusercontent.com/33351058/166953815-c195c4a0-2c37-48a7-b81e-13ba0c73ff1a.png)
  
  ![image](https://user-images.githubusercontent.com/33351058/166953901-dbad9b9b-ae19-400d-97fe-05234a753929.png)
  
  ![image](https://user-images.githubusercontent.com/33351058/166960854-2c7e4963-8c8d-46e2-8c61-a8177ab0f1d4.png)
  
  ![image](https://user-images.githubusercontent.com/33351058/166960929-4e5f0e8d-8561-4843-a11c-d4d078f00b22.png)
  
  ![image](https://user-images.githubusercontent.com/33351058/166961009-1ec36a9f-92f0-4164-a10d-6751500b7d97.png)



  ### Rules
  - Add spinners while information is loading
  - Use open-sourced tools
  - Utilize any css method (sass, less, css modules, bootstrap, MUI, ...)
  - Use Redux or any modern state management module.
  - Split the application into different pages.
  - Add tools typically used in a development environment (linters, code formatter, ...).

  ## Screenshots

  <!-- GETTING STARTED -->
  ## Getting Started

  ### Prerequisites
  - [Node.js](https://nodejs.org/en/) version 14.x or later
  - [Git](https://git-scm.com/) (I used 2.33.1.windows.1)

  ### Installation

  1. Clone the repo and change the directory

  ```sh
  git clone https://github.com/anilsenay/next-e-commerce.git
  cd next-e-commerce
  ```

  2. Install yarn packages

  ```sh
  yarn install
  ```

  3. Run in development mode
  
  ```sh
  npm run dev
  ```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

