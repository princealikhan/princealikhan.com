import { Icons } from "@/components/icons";
import { BriefcaseBusiness, Contact, HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Prince Ali Khan",
  initials: "PAK",
  url: "https://princealikhan.com",
  location: "Bengaluru, India",
  locationLink: "https://www.google.com/maps/place/bengaluru",
  description: "Co-founder, Product and Design",
  summary:
    "Product leader and co-founder with 8+ years of experience building user-centric, scalable products using modern technologies. I specialize in full-stack development with Golang, Python, and AI technologies, combining technical expertise with product strategy. My expertise spans from single-handedly building startups to scaling successful SaaS platforms, with a proven track record in agentic AI, vector databases, and full DevOps implementation. I bridge technical implementation and product management to deliver impactful solutions that drive user engagement and fuel business growth.",
  avatarUrl: "/me.jpg",
  // resume: "/Profile.pdf",
  skills: [
    "Strategic Thinking",
    "Team Leadership",
    "Product Lifecycle Management",
    "Product Development & Design",
    "Product Requirement Documents (PRDs)",
    "Agile & Scrum Methodologies",
    "Technology Integration & Adoption",
    "Stakeholder Management",
    "Competitive Analysis",
    "User Metrics & Data Analysis",
    "UI/UX Design",
    "Usability Testing",
    "User Research",
    "Design Systems",
    "Prototyping",
    "Responsive Design",
    "JavaScript",
    "PHP",
    "Laravel",
    "React Native",
    "CSS3",
    "MySQL",
    "API Development",
    "Full Stack Development",
    "Software Architecture",
    "A/B Testing",
    "Customer Journey Mapping",
    "Product Roadmapping",
    "Go-to-Market Strategy",
    "Business Model Development",
    "Golang",
    "Python",
    "Agentic AI",
    "Vector Database",
    "Full DevOps",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "Cloud Infrastructure",
    "Microservices Architecture",
  ],
  featuredSkills: [
    {
      category: "Product Management", 
      list: [
        {
          name: "Product Strategy",
          proficiency: 95
        },
        {
          name: "Team Leadership",
          proficiency: 92
        },
        {
          name: "Entrepreneurship",
          proficiency: 90
        },
        {
          name: "Stakeholder Management",
          proficiency: 88
        }
      ]
    },
    {
      category: "Software Development", 
      list: [
        {
          name: "Golang",
          proficiency: 90
        },
        {
          name: "Python",
          proficiency: 88
        },
        {
          name: "JavaScript",
          proficiency: 85
        },
        {
          name: "Full Stack Development",
          proficiency: 92
        }
      ]
    },
    {
      category: "AI & DevOps", 
      list: [
        {
          name: "Agentic AI",
          proficiency: 85
        },
        {
          name: "Vector Database",
          proficiency: 80
        },
        {
          name: "Full DevOps",
          proficiency: 88
        },
        {
          name: "Cloud Infrastructure",
          proficiency: 85
        }
      ]
    }
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/work", icon: BriefcaseBusiness, label: "Work" },
    // { href: "/contact", icon: Contact, label: "Contact Me" },
  ],
  contact: {
    email: "hello@princealikhan.com",
    tel: "+1 (415) 555-0123",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/princealikhan",
        icon: Icons.linkedin,
        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/princealikhan",
        icon: Icons.github,
        navbar: false,
      },
      X: {
        name: "X (Twitter)",
        url: "https://twitter.com/princealikhan",
        icon: Icons.x,
        navbar: false,
      },
    },
  },
  work: [
    {
      title: "Co-Founder",
      company: "WarpAI",
      location: "Bengaluru, Karnataka, India",
      href: "https://warpai.com",
      badges: ["Co-Founder", "AI", "Sales Automation"],
      logoUrl: "/warp.jpeg",
      start: "Mar 2025",
      descriptions: [
        "Co-founded WarpAI, an AI agent that automates sales execution to help sales representatives focus on selling rather than administrative tasks.",
        "Built AI-powered solutions using Python, Golang, and vector databases for crafting personalized follow-ups, ROI business cases, and CRM updates.",
        "Implemented full DevOps pipeline with Docker, Kubernetes, and CI/CD for scalable deployment and monitoring.",
        "Developed agentic AI systems that handle back-office tasks to drive deals forward and improve sales team efficiency."
      ],
      highlight: {
        "type": "Key Focus:",
        "message": "AI-powered sales automation platform built with modern tech stack including Python, Golang, vector databases, and full DevOps infrastructure."
      }
    },
    {
      title: "Co-Founder",
      company: "OneJam.io",
      location: "Bengaluru, Karnataka, India",
      href: "https://onejam.io",
      badges: ["Co-Founder", "Product Development"],
      logoUrl: "/onejam.png",
      start: "Jul 2023",
      end: "Jun 2025",
      descriptions: [
        "Co-founded OneJam.io, leading product development and strategic initiatives for the platform.",
        "Built scalable microservices architecture using Golang and Python for high-performance backend systems.",
        "Implemented comprehensive DevOps practices including containerization, orchestration, and automated deployment pipelines.",
        "Established go-to-market strategies and business development partnerships while maintaining technical excellence."
      ],
      highlight: {
        "type": "Key Achievement:",
        "message": "Successfully co-founded and led product development for OneJam.io over a 2-year period with modern tech stack and DevOps practices."
      }
    },
    {
      title: "Founder",
      company: "Stackin",
      location: "Bengaluru, Karnataka, India",
      href: "https://stackin.com",
      badges: ["Founder", "Product Leadership"],
      logoUrl: "/stackin.jpeg",
      start: "May 2022",
      end: "Jul 2023",
      descriptions: [
        "Founded and led Stackin, taking full responsibility for product vision, development, and business strategy.",
        "Built the entire platform single-handedly using modern technologies including Python, Golang, and cloud infrastructure.",
        "Implemented full-stack development with microservices architecture and containerized deployment.",
        "Established product-market fit through extensive user research and iterative development."
      ],
      highlight: {
        "type": "Key Achievement:",
        "message": "Successfully founded and built Stackin single-handedly for 1 year 3 months, demonstrating full-stack development and entrepreneurial skills."
      }
    },
    {
      title: "Senior Software Developer",
      company: "RoundGlass",
      location: "Bengaluru, Karnataka, India",
      href: "https://round.glass",
      badges: ["Senior Developer", "Software Engineering"],
      logoUrl: "/roundglass.jpeg",
      start: "Jun 2020",
      end: "May 2022",
      descriptions: [
        "Led development of complex software solutions and mentored junior developers in best practices and technical implementation.",
        "Architected and implemented scalable software solutions using modern technologies and frameworks.",
        "Collaborated with cross-functional teams to deliver high-quality software products that meet business requirements.",
        "Contributed to technical decision-making and helped establish coding standards and development processes."
      ],
      highlight: {
        "type": "Key Achievement:",
        "message": "Successfully progressed from Software Developer to Senior Software Developer, demonstrating technical growth and leadership capabilities."
      }
    },
    {
      title: "Software Engineer",
      company: "zoojoo.BE",
      location: "Bengaluru Area, India",
      href: "https://zoojoo.be",
      badges: ["Software Engineering", "Acquired"],
      logoUrl: "/zoojoobe.png",
      start: "Oct 2015",
      end: "Jun 2018",
      descriptions: [
        "Developed web and mobile applications for habit formation, incorporating user research and usability testing findings.",
        "Built scalable software solutions that were successfully adopted by major corporations including HP, Accenture, Tesco, Bayer, and JLL.",
        "Contributed to the platform's growth to over 500,000 registered users and 52 corporate clients.",
        "Played a key role in the company's successful acquisition by RoundGlass in 2018."
      ],
      highlight: {
        "type": "Key Achievement:",
        "message": "Contributed to platform growth with 500,000+ users and 52 corporate clients, leading to successful acquisition by RoundGlass in 2018."
      }
    },
    {
      title: "Co-Founder",
      company: "Edumob E-learning",
      location: "Bengaluru Area, India",
      href: "#",
      badges: ["Co-Founder", "E-learning"],
      logoUrl: "/edumob.jpeg",
      start: "Mar 2014",
      end: "Jun 2017",
      descriptions: [
        "Co-founded Edumob E-learning, an educational technology platform focused on providing innovative learning solutions.",
        "Led product development and business strategy for the e-learning platform, ensuring successful market positioning.",
        "Managed cross-functional teams and established partnerships with educational institutions and content providers.",
        "Developed comprehensive business models and growth strategies for the e-learning market."
      ],
      highlight: {
        "type": "Key Achievement:",
        "message": "Successfully co-founded and led Edumob E-learning for 3 years 4 months, demonstrating early entrepreneurial and product leadership skills."
      }
    },
  ],
  education: [
    {
      school: "Hindustan University Chennai",
      href: "https://hindustanuniv.ac.in",
      degree: "Computer Science",
      description: "Computer Science",
      logoUrl: "/hindustan.png",
      start: "2012",
      end: "2016",
    },
  ],
  projects: [
    {
      title: "AI-Powered Sales Automation Platform",
      href: "https://github.com/princealikhan/warpai",
      active: true,
      description:
        "Built a comprehensive AI agent platform using Python, Golang, and vector databases for automating sales execution and CRM management.",
      technologies: [
        "Python",
        "Golang",
        "Vector Database",
        "Agentic AI",
        "Docker",
        "Kubernetes",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/princealikhan/warpai",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/warp.jpeg",
    },
    {
      title: "Microservices Architecture Platform",
      href: "https://github.com/princealikhan/onejam",
      active: false,
      description:
        "Developed a scalable microservices platform using Golang and Python with full DevOps implementation including CI/CD pipelines.",
      technologies: [
        "Golang",
        "Python",
        "Microservices",
        "Docker",
        "Kubernetes",
        "CI/CD",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/princealikhan/onejam",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/onejam.png",
    },
    {
      title: "Elegant UI Kit",
      href: "https://github.com/princealikhan/elegant-ui-kit",
      active: true,
      description:
        "Modern CSS framework based on flexbox & grid, providing a comprehensive set of reusable UI components for web development.",
      technologies: [
        "CSS3",
        "Flexbox",
        "CSS Grid",
        "JavaScript",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/princealikhan/elegant-ui-kit",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/elegant-ui-kit.png",
    },
    {
      title: "Mautic API for Laravel/Lumen",
      href: "https://github.com/princealikhan/mautic-api-laravel",
      active: false,
      description:
        "Free and Open Source Marketing Automation API for Laravel/Lumen framework, providing seamless integration with Mautic marketing automation platform.",
      technologies: [
        "PHP",
        "Laravel",
        "Lumen",
        "Mautic",
        "API Development",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/princealikhan/mautic-api-laravel",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/mautic-api.png",
    },
    {
      title: "Paytm Payment Library For Laravel 5",
      href: "https://github.com/princealikhan/paytm-laravel",
      active: false,
      description:
        "Simplifies the payment flow with defined methods. You can pay through Paytm just by writing a few lines of code, streamlining the payment integration process.",
      technologies: [
        "PHP",
        "Laravel 5",
        "Paytm API",
        "Payment Integration",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/princealikhan/paytm-laravel",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/paytm-laravel.png",
    },
    {
      title: "E-Library",
      href: "https://github.com/princealikhan/e-Library",
      active: false,
      description:
        "Web-based library transaction management system where students can pre-reserve books without going to the library. After booking, students can collect their books using the generated booking ID.",
      technologies: [
        "PHP 5",
        "MySQL",
        "Web Development",
        "Database Management",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/princealikhan/e-Library",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/e-library.png",
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
  certifications: [
    {
      name: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "Oct 2018",
      url: "https://www.freecodecamp.org/certification/princealikhan/javascript-algorithms-and-data-structures",
    },
    {
      name: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "Jul 2018",
      url: "https://www.freecodecamp.org/certification/princealikhan/responsive-web-design",
    },
    {
      name: "Google Science Fair 2012",
      issuer: "Google",
      date: "Jun 2012",
      url: "#",
    },
    {
      name: "Google Code-in 2014",
      issuer: "Google",
      date: "2014",
      url: "#",
    },
    {
      name: "Hackfest",
      issuer: "Indian Institute of Technology, Madras",
      date: "2014",
      url: "#",
    },
  ],
  languages: [
    {
      name: "English",
      proficiency: "Professional working proficiency",
    },
    {
      name: "Hindi",
      proficiency: "Native or bilingual proficiency",
    },
    {
      name: "Tamil",
      proficiency: "Limited working proficiency",
    },
  ],
  volunteer: [
    {
      title: "Mentor",
      organization: "Hindustan University",
      location: "Chennai, India",
      start: "Dec 2014",
      end: "Mar 2015",
      description: "Taught students how to contribute to Free and Open Source Software (FOSS) projects, helping them understand open source development practices and community contribution.",
    },
  ],
} as const;
