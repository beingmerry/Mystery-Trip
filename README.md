# Mystery Trip

Initialization at 13:36 EST, 2023-02-04 -- Ben Merryman

Initialization (again) at 11:08 EST, 2023-02-10 -- Ben Merryman

# Frontend Info

- [x] -- Cool Sign up / Demo Gif / Login front splash page
- [ ] -- Login that will allow access
  - [ ] -- to trip creation
    - [ ] -- to trip editing (if ROLE=CREATOR)
    - [ ] -- to trip deleting (if ROLE=CREATOR)
    - [ ] -- to trip viewing (if ROLE=INVITED, CREATOR, PUBLIC)
  - [ ] -- to trip invitation
  - [ ] -- to trip invitation

# Backend Info

💎 Ruby version - 3.2.0 || 🚂 Rails version - 7.0.4

📂 Database - PostgreSQL 14 || 💫 Hosted database - ???

## Deploy!

"I would really like to deploy the web site first, then build." - Ben Merryman on the first day of the project
# Frontend ToDo / Status
- [x] -- `npx degit git@github.com:huibizhang/template-vite-react-tailwind-v3.git client`
- [x] -- Translate TypeScript files to JavaScript (jsx)
- [x] -- Add back favicon.ico behavior
  - [x] -- Using svg from https://openmoji.org/library/emoji-1F52E/
- [x] -- Re deployed new JSX based app to Vercel
- [x] -- Login page roughed out
  - [ ] -- Login page interacting with Rails
  
- [x] -- Build router and top bar links
- [ ] -- Build basic fetches and interactions for Friday MVP
- [ ] -- 2 roles Trip Taker or Trip Builder
  - [ ] -- Trip builder puts together all the trip parts and event triggers for emails / SMS messages
    - [ ] -- Build in event triggers
    - [ ] -- Build in Emails
    - [ ] -- Build in SMS messages
  - [ ] -- Trip take can observe trips they've taken, or see "certain" parts (dependent on Trip Builder's configuration of trip)
    - [ ] -- Build own trips if they "subscribe" to the service

# Backend ToDo / Status

- [x] -- `rails new MysteryTrip --api --database=postgresql`
- [ ] -- Get user sessions working FIRST
- [ ] -- Get trips existing under users and showing when logged in
- [ ] -- Have Sample DEMO session when clicking on DEMO option to login as demo user (limits access to demo, no create)

## STRETCHING

- [ ] -- Hook up AWS S3 Image Uploader to vercel app https://vercel.com/templates/next.js/aws-s3-image-upload-nextjs