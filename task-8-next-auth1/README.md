# Job Posting App

This is a job listing application built with Next.js, NextAuth.js, Tailwind CSS, and TypeScript. It allows users to sign up, log in, and view job listings. Only authenticated users can access the job posts and their details.

## Features

1. User registration and authentication using NextAuth.js
2. Verify user email
3. Secure server-side rendering (SSR) with user sessions
4. Job listing display
5. Job details page with additional information
6. Bookmark functionality to save and view favorite job postings

## Getting Started

### Prerequisites

Node.js (version 12 or later)
npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/ynanati45/task-8-next-auth.git
```

2. Install the dependencies:

```bash
cd job-listing-app
npm install
```

or

```bash
yarn install
```

3. Set up the environment variables:

```bash
NEXTAUTH_URL=http://localhost:3000
GOOGLE_ID=your-github-client-id
GOOGLE_SECRET=your-github-client-secret
```

4. Start the development server:

```bash
npm run dev
# or
yarn dev
```

### Usage

1. Go to the link provided http://localhost:3000
2. Fill all the credentials and click on the signup button
3. Verification code will be sent to you so copy and paste that to the input and it will redirect you to the next page
4. if you're already signed up click the login link and enter yoour email and password

5. Once signed in, you can view the list of job postings and click on a job to see its details.
6. Bookmarking Jobs:
   Click the bookmark icon next to a job listing to save it to your bookmarks.
   Navigate to the Bookmarks page to view and manage your bookmarked jobs.

### Screenshots

Signup page
![signup]('public/assets/signup.png')
Login page
![login]('public/assets/login.png')
Posts page
![posts]('public/assets/posts.png')
Bookmarks page
![bookmarks]('public/assets/bookmarks.png')
