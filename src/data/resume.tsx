import { Icons } from "@/components/icons";
import { BriefcaseBusiness, Contact, HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Prince Ali Khan",
  initials: "PS",
  url: "https://princealikhan.com",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description: "Co-founder, Product and Design",
  summary:
    "I’m a product designer turned product leader and co- founder with 7+ years of experience building user-centric, scalable products. I specialise in UX design and product strategy, combining creative problem-solving with data- driven decision-making. My ability to bridge design and product management ensures impactful solutions that drive user engagement to fuel business growth.",
  avatarUrl: "/me.png",
  resume: "/resume.pdf",
  skills: [
    "Strategic Thinking",
    "Team Building",
    "Product Life-Cycle Management",
    "Product Development & Design",
    "Product Requirement Diagrams",
    "Agile & Scrum Methodologies",
    "Technology Integration & Adoption",
    "Stakeholder Management",
    "Competitive Analysis",
    "User Metrics & Data Analysis",
    "UI/UX Design",
    "Usability Testing ",
    "User Research",
    "Illustrations and UI Graphics",
    "Prototyping",
    "Responsive Design",
  ],
  featuredSkills: [
    {
      category: "Design", 
      list: [
        {
          name: "Java Script",
          proficiency: 87  
        },
        {
          name: "Go",
          proficiency: 12  
        }
      ]
    },
    {
      category: "Programming", 
      list: [
        {
          name: "javascript",
          proficiency: 87  
        }
      ]
    }
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/resume", icon: BriefcaseBusiness, label: "Resume"},
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
    // { href: "/work", icon: BriefcaseBusiness, label: "Work" },
    // { href: "/contact", icon: Contact, label: "Contact Me" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/princealikhan",
        icon: Icons.linkedin,
        navbar: true,
      },
    },
  },
  work: [
    {
      title: "Co-Founder, Product & Design",
      company: "Retrac GmbH",
      location: "Berlin Germany",
      href: "https://www.heyresi.com",
      badges: [],
      logoUrl: "/retrac.png",
      start: "Jan 2024",
      descriptions: [
        "Led a team of 7 (Engineers & Designers) to develop and launch a SaaS-based property management platform in 1 year, managing the full product lifecycle, including roadmaps, PRDs, and sprints.",
        "Prioritized customer pain points, improving client ROI from 2.4x to 3.4x, and partnered with Hasso Plattner Institute to implement gamification strategy to reduce tenant energy consumption by 9%.",
        "Designed scalable web and mobile apps (Android/iOS) with React Native and Material UI3, improving development speed by 25% and enabling white-label customisation to reduce app launch timelines from 30 to 2 days.",
        "Conducted user research and usability testing with 50+ participants, driving a 25% increase in user engagement by simplifying workflows and optimizing user experience.",
        "Collaborated with sales and stakeholders to define go-to-market strategies, competitive analysis, and a scalable business model.",
        "Developed a business plan with clear growth metrics and KPIs, improving operational efficiency and market positioning."
      ],
      highlight: {
        "type": "Highlights:",
        "message": "Created gamification strategy with HPI, saving annually €89,000 across 2,100 apartments, directed an app development pipeline enabling multi white-label app distribution with configuration."
      }
    },

    {
      title: "Working Student",
      company: "Retrac GmbH",
      location: "Berlin Germany",
      href: "https://www.heyresi.com",
      badges: [],
      logoUrl: "/retrac.png",
      start: "Aug 2021",
      end: "Dec 2023",
      descriptions: [
       "Helped conceptualise the product, developed MVP, and crafted product and business plans."
      ],

    },
    
    {
      title: "Associate",
      company: "Roundglass H2O Pvt. Ltd.",
      location: "Bangalore, India",
      href: "https://round.glass",
      badges: [],
      logoUrl: "/rg.png",
      start: "Nov 2019",
      end: "Mar 2021",
      descriptions: [
        "Integrated key features from the Zoojoobe and Aware apps into the Roundglass Reach platform, driving seamless functionality and coherence across digital offerings.",
        "Conducted user research and translated insights into wireframes and prototypes to enhance functionality and user experience.",
        "Increased user conversion rate by 4% in close collaboration with the marketing team and retention by 8% in liaison with the product team."
      ],
      highlight: {
        "type": "Highlights:",
        "message": "Increased daily In-bound channel impressions from 150-170 to 700-800 clicks, increased user retention by 8%."
      }
    },
    {
      title: "Purchase Intern",
      company: "Kalyani Technoforge Pvt. Ltd.",
      location: "Pune, India",
      href: "#",
      badges: [],
      logoUrl: "/kalyani.png",
      start: "Jul 2019",
      end: "Sep 2019",
      descriptions: [
       "Negotiation and purchase of CapEx goods for setting up of a new plant in Baramati, India."
      ],
      highlight: {
        "type": "Highlights:",
        "message": "Saved €24,000 through cost optimisation and strategic improvements."
      }
    },
    {
      title: "Quality Assurance Intern",
      company: "GKN Sinter Metals",
      location: "Pimpri Chinchwad, India",
      href: "#",
      badges: [],
      logoUrl: "/gkn.png",
      start: "Jan 2019",
      end: "Apr 2019",
      descriptions: [
        "Integrated key features from the Zoojoobe and Aware apps into the Roundglass Reach platform, driving seamless functionality and coherence across digital offerings.",
        "Conducted user research and translated insights into wireframes and prototypes to enhance functionality and user experience.",
        "Increased user conversion rate by 4% in close collaboration with the marketing team and retention by 8% in liaison with the product team."
      ],
      highlight: {
        "type": "Highlights:",
        "message": "Led a sub-supplier upgrade for audits, updating production documents and implementing QMS tools."
      }
    },
    {
      title: "Associate",
      company: "Aware Mindful Meditation",
      location: "Bangalore, India",
      href: "https://awaremeditationapp.com",
      badges: [],
      logoUrl: "/aware.png",
      start: "Jan 2017",
      end: "July 2018",
      descriptions: [
        "Worked with the design and product team, creating UI/UX designs and conducting user research and usability testing.",
        "Collaborated closely with developers, product managers and marketing teams to ensure cohesive product development."
      ],
      highlight: {
        "type": "Highlights:",
        "message": "Achieved high user satisfaction with Google Play Store rating of 4.7 and Apple App Store rating of 4.8, with over 600,000 downloads"
      }
    },
    {
      title: "Associate Product Designer",
      company: "Zoojoo.BE",
      location: "Bangalore, India",
      href: "https://zoojoo.be",
      badges: [],
      logoUrl: "/zoojoobe.png",
      start: "Jan 2016",
      end: "July 2018",
      descriptions: [
        "Designed web and mobile application for habit formation app, incorporating user research and usability test findings.",
        "Successfully adopted by corporates like HP, Accenture, Tesco, Bayer, and JLL, with over 500,000 registered users.",
        "Contributed to the acquisition of Zoojoobe by a US-based company in 2018, with significant user base growth and corporate adoption."
      ],
      highlight: {
        "type": "Highlights:",
        "message": "Gained 52 corporates, over 500,000 registered users. Acquired by US based company in 2018."
      }
    },
  ],
  education: [
    {
      school: "Hochschule Harz",
      href: "https://www.hs-harz.de/",
      degree: "M.Sc in Technology and Innovation Management",
      description: "GPA: 1.4 of 4",
      logoUrl: "/hsharz.png",
      start: "2021",
      end: "2023",
    },
    {
      school: "Manipal Institute of Technology (Sikkim)",
      href: "https://smu.edu.in",
      degree: "B.Tech in Mechanical Engineering",
      description: "GPA: 1.69 of 4",
      logoUrl: "/smit.png",
      start: "2012",
      end: "2016",
    },
  ],
  projects: [
    {
      title: "Driving Sustainable Living Through Engagement",
      href: "/work/gamification",
      // dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "Encouraged sustainable living in the **Resi** app through gamification, tackling issues like complex onboarding, overwhelming information, and low community engagement.",
      // technologies: [
      //   "Next.js",
      //   "Typescript",
      //   "PostgreSQL",
      //   "Prisma",
      //   "TailwindCSS",
      //   "Stripe",
      //   "Shadcn UI",
      //   "Magic UI",
      // ],
      // links: [
      //   {
      //     type: "Website",
      //     href: "https://chatcollect.com",
      //     icon: <Icons.globe className="size-3" />,
      //   },
      // ],
      image: "/Gamification.png",
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Optimising & Streamling the Move-Out Process",
      href: "/work/landlord",
      // dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "Developed a move-out feature to simplify tenant experience, reduce redundancies, and minimize apartment downtime for property managers.",
      // technologies: [
      //   "Next.js",
      //   "Typescript",
      //   "PostgreSQL",
      //   "Prisma",
      //   "TailwindCSS",
      //   "Stripe",
      //   "Shadcn UI",
      //   "Magic UI",
      // ],
      // links: [
      //   {
      //     type: "Website",
      //     href: "https://chatcollect.com",
      //     icon: <Icons.globe className="size-3" />,
      //   },
      // ],
      image: "/MoveOut.png",
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Enhancing User Experience for Mental Wellness",
      href: "/work/aware",
      // dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "Redesigned the **Aware App** to boost user engagement by simplifying onboarding, improving discoverability, and creating personalized strategies.",
      // technologies: [
      //   "Next.js",
      //   "Typescript",
      //   "PostgreSQL",
      //   "Prisma",
      //   "TailwindCSS",
      //   "Stripe",
      //   "Shadcn UI",
      //   "Magic UI",
      // ],
      // links: [
      //   {
      //     type: "Website",
      //     href: "https://chatcollect.com",
      //     icon: <Icons.globe className="size-3" />,
      //   },
      // ],
      image: "/aware-cover.png",
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Boosting Workplace Wellness Through Gamification",
      href: "/work/dare",
      // dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "Created **Dares** for the **Zoojoobe app** to gamify workplace wellness, increasing user engagement with fun, trackable challenges.",
      // technologies: [
      //   "Next.js",
      //   "Typescript",
      //   "PostgreSQL",
      //   "Prisma",
      //   "TailwindCSS",
      //   "Stripe",
      //   "Shadcn UI",
      //   "Magic UI",
      // ],
      // links: [
      //   {
      //     type: "Website",
      //     href: "https://chatcollect.com",
      //     icon: <Icons.globe className="size-3" />,
      //   },
      // ],
      image: "/dare-cover.png",
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
