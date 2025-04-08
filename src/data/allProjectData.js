// Import images
import Image1 from "../images/logo-dark.png";
import Image2 from "../images/logo-dark.png";
import Image3 from "../images/logo-dark.png";
import moola1 from "../images/MoolaAnalyticScreen.png";
import moola2 from "../images/MoolaNewBotModal.png";
import moola3 from "../images/moolaHomePage.jpg";
import macroVision1 from "../images/macroVisionLunch.png";
import macroVision2 from "../images/macroVisionVision.png";

// Import icons
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";
export const allProjectsData = [
  {},
  {
    id: 1,
    ProjectHeader: {
      title: "Wave Watch",
      publishDate: "Mar 2025 - Present",
      tags: "UI / Frontend",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Wave Watch Forecast UI",
        img: Image1,
      },
      {
        id: 2,
        title: "Wave Watch Mobile View",
        img: Image2,
      },
      {
        id: 3,
        title: "Wave Watch Dashboard",
        img: Image3,
      },
    ],
    ProjectInfo: {
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Design and develop a visually engaging surf forecast web application that provides users with real-time wave data and surf conditions, inspired by Surfline but with a uniquely minimalist interface.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "HTML",
            "CSS",
            "JavaScript",
            "Vue.js",
            "TailwindCSS",
            "AdobeXD",
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: 1,
          details:
            "Wave Watch is a surf-focused web app built to help surfers quickly understand local wave conditions through a modern, responsive UI. Inspired by the usability of Surfline but redesigned with my own aesthetic direction, the application features forecast summaries, swell graphs, wind info, and tide times with dynamic styling and clean typography.",
        },
        {
          id: 2,
          details:
            "I used TailwindCSS for layout and responsiveness, AdobeXD for initial mockups and prototypes, and Vue.js for component-based rendering. The forecast data is parsed and displayed in a modular layout optimized for both desktop and mobile users.",
        },
        {
          id: 3,
          details:
            "One of the biggest challenges I faced was structuring and styling complex forecast data in a way that felt clean and digestible. Surf data can be dense and hard to read, so a lot of attention went into visual hierarchy, iconography, and responsive design decisions. Debugging layout shifts between breakpoints and optimizing for fast load times on mobile devices also proved challenging during development.",
        },
        {
          id: 4,
          details:
            "This project helped refine my frontend development skills, especially with regard to working with design systems, modular components, and real-world data formatting. It also gave me deeper insight into the needs of surfers from a UI/UX perspective, combining my personal interest in surfing with my development experience.",
        },
      ],
      SocialSharingHeading: "Share This",
      SocialSharing: [
        {
          id: 1,
          name: "Twitter",
          icon: <FiTwitter />,
          url: "https://twitter.com/realstoman",
        },
        {
          id: 2,
          name: "Instagram",
          icon: <FiInstagram />,
          url: "https://instagram.com/realstoman",
        },
        {
          id: 3,
          name: "Facebook",
          icon: <FiFacebook />,
          url: "https://facebook.com/",
        },
        {
          id: 4,
          name: "LinkedIn",
          icon: <FiLinkedin />,
          url: "https://linkedin.com/",
        },
        {
          id: 5,
          name: "Youtube",
          icon: <FiYoutube />,
          url: "https://www.youtube.com/c/StomanStudio",
        },
      ],
    },
  },

  {
    id: 2,
    ProjectHeader: {
      title: "Marcovision",
      publishDate: "Mar 2025 - Present",
      tags: "AI / Full Stack",
    },
    ProjectImages: [
      { id: 1, title: "Marcovision Upload UI", img: Image1 },
      { id: 2, title: "Marcovision Nutrition Results", img: Image2 },
      { id: 3, title: "Marcovision User Dashboard", img: Image3 },
    ],
    ProjectInfo: {
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Develop a nutrition analysis platform that allows users to upload food images and receive real-time nutritional information using a custom-trained image classifier and USDA food data.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["React", "Next.js", "Supabase", "TensorFlow", "TailwindCSS"],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: 1,
          details:
            "Marcovision is a full-stack AI application that helps users understand what’s on their plate—literally. By uploading an image of a meal, users receive a breakdown of calories, macronutrients, and portion sizes powered by a custom-trained image classification model and USDA’s open food database.",
        },
        {
          id: 2,
          details:
            "The project combines React and Next.js on the frontend with Supabase for authentication and meal history tracking. TensorFlow was used to build a lightweight model capable of identifying common foods from user-submitted photos, and all nutrition data is served dynamically via API requests.",
        },
        {
          id: 3,
          details:
            "A key challenge was getting consistent, accurate classification results from user-uploaded images, especially those taken in poor lighting or at odd angles. Bridging the gap between AI model predictions and usable food entries in the USDA database required fuzzy string matching and robust error handling.",
        },
        {
          id: 4,
          details:
            "This project pushed my full-stack development skills and introduced me to practical ML deployment considerations. From training and exporting a TensorFlow model to architecting a user-friendly frontend with image preview, upload flow, and persistent logging, Marcovision taught me how to balance usability with technical complexity.",
        },
      ],
      SocialSharingHeading: "Share This",
      SocialSharing: [
        {
          id: 1,
          name: "Twitter",
          icon: <FiTwitter />,
          url: "https://twitter.com/",
        },
        {
          id: 2,
          name: "Instagram",
          icon: <FiInstagram />,
          url: "https://instagram.com/",
        },
        {
          id: 3,
          name: "Facebook",
          icon: <FiFacebook />,
          url: "https://facebook.com/",
        },
        {
          id: 4,
          name: "LinkedIn",
          icon: <FiLinkedin />,
          url: "https://linkedin.com/",
        },
        {
          id: 5,
          name: "Youtube",
          icon: <FiYoutube />,
          url: "https://youtube.com/",
        },
      ],
    },
  },

  {
    id: 3,
    ProjectHeader: {
      title: "Moola",
      publishDate: "Mar 2025 - Present",
      tags: "Finance / Frontend",
    },
    ProjectImages: [
      { id: 1, title: "Moola Dashboard", img: moola1 },
      { id: 2, title: "Moola Budget Chart", img: moola2 },
      { id: 3, title: "Moola Mobile View", img: moola3 },
    ],
    ProjectInfo: {
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Create a clean, modern budgeting and expense tracking app that empowers users to manage their personal finances with visual insights and an intuitive UI.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["React", "Firebase", "Chart.js", "TailwindCSS"],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: 1,
          details:
            "Moola is a lightweight finance tracker designed to make personal budgeting simple and visually engaging. Users can track income and expenses, categorize transactions, and view monthly trends through interactive charts and graphs.",
        },
        {
          id: 2,
          details:
            "The app features authentication via Firebase, secure real-time data storage, and responsive design powered by TailwindCSS. Chart.js was used to deliver sleek visualizations of savings, spending habits, and category distributions.",
        },
        {
          id: 3,
          details:
            "A major challenge was designing a UX flow that didn’t overwhelm users while still allowing complex features like recurring budgets, multi-month views, and tag-based filtering. Ensuring data consistency, especially with live updates and editing, also required careful Firebase schema planning.",
        },
        {
          id: 4,
          details:
            "Through Moola, I deepened my frontend experience while also learning how to work with financial logic, user-centric dashboards, and real-time UI syncing. It taught me to think more about minimalism and data integrity when building tools for everyday users.",
        },
      ],
      SocialSharingHeading: "Share This",
      SocialSharing: [
        {
          id: 1,
          name: "Twitter",
          icon: <FiTwitter />,
          url: "https://twitter.com/",
        },
        {
          id: 2,
          name: "Instagram",
          icon: <FiInstagram />,
          url: "https://instagram.com/",
        },
        {
          id: 3,
          name: "Facebook",
          icon: <FiFacebook />,
          url: "https://facebook.com/",
        },
        {
          id: 4,
          name: "LinkedIn",
          icon: <FiLinkedin />,
          url: "https://linkedin.com/",
        },
        {
          id: 5,
          name: "Youtube",
          icon: <FiYoutube />,
          url: "https://youtube.com/",
        },
      ],
    },
  },
  {
    id: 4,
    ProjectHeader: {
      title: "Club Compass",
      publishDate: "Mar 2025 - Present",
      tags: "Campus / Web App",
    },
    ProjectImages: [
      { id: 1, title: "Club Compass Home Page", img: Image1 },
      { id: 2, title: "Club Info and Reviews", img: Image2 },
      { id: 3, title: "Student Dashboard View", img: Image3 },
    ],
    ProjectInfo: {
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Design a student-centered platform where users can browse, review, and discover clubs on campus to improve engagement and transparency.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["HTML", "CSS", "JavaScript", "Node.js"],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: 1,
          details:
            "Club Compass is a review and discovery web app that lets students learn more about campus organizations, browse by category or interest, and leave feedback about their experiences with different clubs.",
        },
        {
          id: 2,
          details:
            "The frontend was built with vanilla HTML, CSS, and JavaScript, while a simple Node.js backend handles form submissions, comment storage, and club directory updates. The app includes a searchable list, club pages with ratings and comments, and a clean UI for exploration.",
        },
        {
          id: 3,
          details:
            "The biggest challenge was creating a scalable review and feedback system that encouraged honest participation without requiring full logins. Striking a balance between functionality and simplicity for college users also meant trimming features that added clutter rather than value.",
        },
        {
          id: 4,
          details:
            "This project was driven by real student feedback and built to foster deeper club involvement on campus. It was my first time developing a review-based system and taught me a lot about user trust, basic moderation systems, and responsive content layout.",
        },
      ],
      SocialSharingHeading: "Share This",
      SocialSharing: [
        {
          id: 1,
          name: "Twitter",
          icon: <FiTwitter />,
          url: "https://twitter.com/",
        },
        {
          id: 2,
          name: "Instagram",
          icon: <FiInstagram />,
          url: "https://instagram.com/",
        },
        {
          id: 3,
          name: "Facebook",
          icon: <FiFacebook />,
          url: "https://facebook.com/",
        },
        {
          id: 4,
          name: "LinkedIn",
          icon: <FiLinkedin />,
          url: "https://linkedin.com/",
        },
        {
          id: 5,
          name: "Youtube",
          icon: <FiYoutube />,
          url: "https://youtube.com/",
        },
      ],
    },
  },
];
