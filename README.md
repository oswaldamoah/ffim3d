# FFIM 3D

An interactive 3D church model for Flourishing Field International Ministries

## Features
- Multiple views (Exterior, Interior, Cutaway, and Top-down Floor Plan)
- Automatic guided tour
- Responsive controls

## Screenshots

![Exterior View](/screenshots/s1.png)

![Interior View](/screenshots/s2.png)

![Cutaway View](/screenshots/s3.png)

![Top-down Floor Plan](/screenshots/s4.png)



## Views

### Exterior
Explore the outside of the church building from any angle.

### Interior
View the complete church interior, including seating, stage, gallery, and walkways.

### Cutaway
Reveal both the interior and exterior by hiding selected walls and roof sections.

### Top-down Floor Plan
Display a bird's-eye view of the church layout for planning and visualization.



## Development

Installation Requirements: **Node.js** and **npm** 

```bash
git clone <repository-url>
cd <repository-name>
npm install
npm run dev
```

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run start
```

## Built With

- TanStack Start
- React
- TypeScript
- Three.js
- Tailwind CSS
- Vite

## Project Structure

```text
src/
├── components/
├── routes/
├── lib/
├── styles/
├── assets/
└── app.tsx
```

## Browser Support

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari
