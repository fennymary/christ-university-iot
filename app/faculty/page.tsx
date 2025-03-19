  "use client";
  import React, { useState, useEffect, useRef } from "react";
  import {
    MapPin,
    Mail,
    Cpu,
    X,
    BookOpen,
    Award,
    FileText,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    MapPin as LocationIcon,
    Phone,
    AtSign,
  } from "lucide-react";
  import directorImage from "../assets/2178.png";
  interface Faculty {
    id: number;
    name: string;
    title: string;
    cabin: string;
    email: string;
    image: string;
    education: string[];
    research: string[];
    publications: string[];
  }

  function App() {
    const [selectedFaculty, setSelectedFaculty] = useState<Faculty | null>(null);
    const modalRef = useRef<HTMLDivElement>(null);
    const [activeNavItem, setActiveNavItem] = useState<string>("faculty");

    // Add or remove overflow: hidden from the body based on modal state
    useEffect(() => {
      if (selectedFaculty) {
        document.body.classList.add("no-scrollbar");
        document.body.style.overflow = "hidden"; // Disable scrolling
      } else {
        document.body.classList.remove("no-scrollbar");
        document.body.style.overflow = "auto"; // Enable scrolling
      }

      // Cleanup function to reset overflow when the component unmounts
      return () => {
        document.body.classList.remove("no-scrollbar");
        document.body.style.overflow = "auto";
      };
    }, [selectedFaculty]);

    // Handle click outside modal
    useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        if (
          modalRef.current &&
          !modalRef.current.contains(event.target as Node)
        ) {
          setSelectedFaculty(null);
        }
      }

      // Add event listener if modal is open
      if (selectedFaculty) {
        document.addEventListener("mousedown", handleClickOutside);
      }

      // Clean up event listener
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [selectedFaculty]);

    const facultyMembers: Faculty[] = [
      {
        id: 1,
        name: "Dr. Rakoth Kandan Sambandam",
        title: "(Dept of CSE)",
        cabin: "220/10,FIRST Floor,BLOCK II",
        email: "rakoth.kandan@christuniversity.in",
        image: "/Screenshot 2025-03-17 214716.png",
        education: [
          "PhD from Annamalai University",
          "M.Tech in CSE",
          "BE in ECE",
        ],
        research: ["AI Based Placement Bot"],
        publications: [
          "Vetriveeran, D., Sambandam, R. K., Sekar, T., & Venkatachalam, A. (2025). Optimized Multi‐Scale Attention Convolutional neural network for Micro‐Grid energy management system employing in internet of things. Optimal Control Applications and Methods.",
          "Sambandam, R. K., & John, S. P. (2024). A comprehensive review of small building detection in collapsed images: Advancements and applications of machine learning algorithms. Lecture Notes in Networks and Systems, 1121(0), 429–438",
          "Thaiyalnayaki, S., Sambandam, R. K., KVidhyalakshmi, M., Shanthi, S., Jenefa, J., & Vetriveeran, D. (n.d.). Smart Air Pollution Monitoring System Using Arduino Based on Wireless Sensor Networks. Lecture Notes in Networks and Systems, 497–504.",
          "Jenefa, J., Anita, E. a. M., Divya, V., Kandan, S. R., & Vinodha, D. (2024). Secure identity based authentication for emergency communications. In Lecture notes in networks and systems (pp. 129–140).",
          "Sambandam, R. K., Daniel, D., Gokulapriya, R., Vetriveeran, D., Jenefa, J., & Anuneshwar, N. (2024). Comparison of Machine Learning-Based Intrusion Detection Systems using UNSW-NB15 dataset. In Lecture notes in networks and systems (pp. 311–324).",
          "Sajitha, I., Sambandam, R. K., & John, S. P. (2023). Review on Image Processing-Based Building Damage Assessment Techniques. In Lecture notes in networks and systems (pp. 863–882).",
          "Aruna, S. K., Sambandam, R. K., Thaiyalnayaki, S., & Vetriveeran, D. (2023). An Advanced and Ideal Method for Tumor Detection and Classification from MRI Image Using Gamma Distribution and Support Vector Machine. In Smart innovation, systems and technologies (pp. 439–447).",
          "Thaiyalnayaki, S., Sambandam, R. K., Reddy, T. H. S., Reddy, A. H. V., Sai, K. N., & Srinivas, V. (2023). Applications of classification and recommendation techniques to analyze soil data and water using IOT. In Smart innovation, systems and technologies (pp. 215–223).",
          "Sri, R. L., Vetriveeran, D., & Sambandam, R. K. (2023). 3D CNN-Based classification of severity in COVID-19 using CT images. In Lecture notes in networks and systems (pp. 301–312).",
          "Sambandam, R. K., Thaiyalnayaki, S., Aruna, S. K., & Prabusankar, N. (2022). Security issues in intrusion detection - Review. Mathematical Statistician and Engineering Applications.",
          "Sambandam, R. K., Thaiyalnayaki, S., Aruna, S. K., & Prabusankar, N. (2022). Security issues in intrusion detection - Review. Mathematical Statistician and Engineering Applications, 71(3s2), 47–58",
          "Sambandam, R. K., & Jayaraman, S. (2016). Self-adaptive dragonfly based optimal thresholding for multilevel segmentation of digital images. Journal of King Saud University - Computer and Information Sciences, 30(4), 449–461.",
        ],
      },
      {
        id: 2,
        name: "Dr. Shamanth N",
        title: "(Dept of CSE)",
        cabin: "51,GROUND Floor,BLOCK III",
        email: "shamanth.n@christuniversity.in",
        image:
          "https://kp.christuniversity.in/KnowledgePro/images/EmployeePhotos/E5581.jpg",
        education: [
          "PhD from BITS Pilani",
          "M.Tech in Computer Network Engineering",
          "B.Tech in CSE",
        ],
        research: [
          "Development of AI Enabled Contactless Remote Health Monitoring System for Neonatal care",
        ],
        publications: [
          "Fuhad, M., George, S. K., Elappila, M., Nagaraju, S., Reddy, V., Krishna, A. V. N., & Jose, S. M. (2024). Cost effective and energy efficient drip irrigation system for IoT enabled smart agriculture. In Lecture notes in networks and systems (pp. 199–210).",
          "Aswanth, M., Amal, N., Alok, C., Nagaraju, S., & Elappila, M. (2024). Augmented Reality based Navigation for Indoor Environment using Unity Platform. In Lecture notes in networks and systems (pp. 199–207).",
          "Nagaraju, S., Gudino, L. J., Kadam, B. V., Khairnar, V. V., Rodriguez, J. X., & Ramesha, C. K. (2023). Energy-Efficient Long-Range sectored antenna for directional sensor network applications. IETE Journal of Research, 70(5), 4442–4452.",
          "Elappila, M., Nagaraju, S., Vivek, K. S., & Gopinath, A. (2023). Dynamic channel allocation in wireless personal area networks for industrial IoT applications. In Cognitive science and technology (pp. 1077–1090).",
          "Nagaraju, S., V, S., Gudino, L. J., Kadam, B. V., K, R. C., & Rodrigues, J. (2019). Hybrid area exploration–based mobility‐assisted localization with sectored antenna in wireless sensor networks. International Journal of Communication Systems, 33(4).",
          "Nagaraju, S., Gudino, L. J., Tripathi, N., V, S., & CK, R. (2018). Mobility assisted localization for mission critical Wireless Sensor Network applications using hybrid area exploration approach. Journal of King Saud University - Computer and Information Sciences, 33(5), 608–618.",
          "Kadam, B. V., Gudino, L. J., Ramesha, C., & Nagaraju, S. (2016). A band-notched ultra-wideband compact Planar Monopole antenna with U-shaped parasitic element. Procedia Computer Science, 93, 101–107.",
        ],
      },
      {
        id: 3,
        name: "Dr. Manu Elappila",
        title: "(Dept of CSE)",
        cabin: "250/34,THIRD Floor,BLOCK II",
        email: "manu.elappila@christuniversity.in",
        image: "/Screenshot 2025-03-17 214828.png",
        education: ["Ph.D from NIT Rourkela", "M.Tech in CSE", "B.Tech in IT"],
        research: [
          "Development of AI Enabled Contactless Remote Health Monitoring System for Neonatal care",
        ],
        publications: [
          "Fuhad, M., George, S. K., Elappila, M., Nagaraju, S., Reddy, V., Krishna, A. V. N., & Jose, S. M. (2024b). Cost effective and energy efficient drip irrigation system for IoT enabled smart agriculture. In Lecture notes in networks and systems (pp. 199–210).",
          "Aswanth, M., Amal, N., Alok, C., Nagaraju, S., & Elappila, M. (2024b). Augmented Reality based Navigation for Indoor Environment using Unity Platform. In Lecture notes in networks and systems (pp. 199–207).",
          "Elappila, M., & Chinara, S. (2023). Implementation of survivability aware protocols in WSN for IoT applications using Contiki-OS and hardware testbed evaluation. Microprocessors and Microsystems, 104, 104988.",
          "Elappila, M., Nagaraju, S., Vivek, K. S., & Gopinath, A. (2023b). Dynamic channel allocation in wireless personal area networks for industrial IoT applications. In Cognitive science and technology (pp. 1077–1090).",
          "Elappila, M., Chinara, S., & Parhi, D. R. (2019). Survivability Aware Channel Allocation in WSN for IoT applications. Pervasive and Mobile Computing, 61, 101107.",
          "Elappila, M., Chinara, S., & Parhi, D. R. (2017). Survivable Path Routing in WSN for IoT applications. Pervasive and Mobile Computing, 43, 49–63.",
        ],
      },
      // Moving Dr. Venkataswamy R (the last faculty) to the middle position
      {
        id: 6,
        name: "Dr. Venkataswamy R",
        title: "(Dept of EEE)",
        cabin: "88,THIRD Floor,BLOCK III",
        email: "venkataswamy.r@christuniversity.in",
        image:
          "https://kp.christuniversity.in/KnowledgePro/images/EmployeePhotos/E1737.jpg",
        education: [
          "Ph.D from Visvesvaraya Technological University",
          "M.Tech in Control and Computing",
          "B.E in EEE",
        ],
        research: [
          "Retrofitting of conventional CNC Milling Machine to digitalized transformation for smart manufacturing",
        ],
        publications: [
          "Venkataswamy, R., Janamala, V., & Chowdary, C. R. (2023). Realization of humanoid doctor and real-time diagnostics of disease using Internet of Things, Edge Impulse platform, and ChatGPT. Annals of Biomedical Engineering, 51(8), 1–3",
          "Venkataswamy, R., Rao, U., & Meena, P. (2022). Transformer performance enhancement by optimized charging strategy for electric vehicles. Archives of Electrical Engineering, 71(1), 37–56",
          "Venkataswamy, R., Rao, K. U., & Meena, P. (2020). Internet of things based metaheuristic reliability centered maintenance of distribution transformers. IOP Conference Series Earth and Environmental Science, 463(1), 012047.",
          "Venkataswamy, R., Rao, K. U., & Meena, P. (2019). Development of Internet of Things Platform and its application in remote monitoring and control of transformer operation. In Lecture notes in networks and systems (pp. 165–183).",
          "Venkataswamy, R., & Joseph, T. M. (2019). Optimal charging strategy for spatially distributed electric vehicles in power system by remote analyser. In Lecture notes in networks and systems (pp. 400–412).",
          "Venkataswamy, R., Paul, R., & Jogy, J. (2019). Internet of Things based Autonomous Borewell Management System. In Lecture notes in networks and systems (pp. 229–243).",
        ],
      },
      {
        id: 4,
        name: "Prof. Sharon Roji Priya C",
        title: "(Dept of CSE)",
        cabin: "48,GROUND Floor,BLOCK III",
        email: "sharon.roji@christuniversity.in",
        image: "/Screenshot 2025-03-17 214932.png",
        education: ["M.E CSE", "B.E CSE"],
        research: [],
        publications: [
          "Vatambeti, R., Damera, V. K., H, K., M, M., C, S. R. P., & Mekala, M. S. (2023). Classification of HHO-based Machine learning techniques for clone attack detection in WSN. International Journal of Computer Network and Information Security, 15(6), 1–15",
        ],
      },
      {
        id: 5,
        name: "Prof. Shruti Jalapur",
        title: "(Dept of CSE)",
        cabin: "636,193,Fourth Floor,BLOCK VI",
        email: "shruti.jalapur@christuniversity.in",
        image:
          "https://kp.christuniversity.in/KnowledgePro/images/EmployeePhotos/E6692.jpg",
        education: ["M.Tech in CSE", "B.E in CSE"],
        research: [],
        publications: [
          "Jalapur, S., Yogish, D., Mithun, B. N., & Anoop, G. L. (2024). An integrated scalable healthcare management system using IOT. In Lecture notes in networks and systems (pp. 165–178)",
          "Yogish, D., Jalapur, S., Yogisha, H. K., & Mithun, B. N. (2024). Text summarization techniques for Kannada Language. In Lecture notes in networks and systems (pp. 107–117)",
        ],
      },
      {
        id: 7,
        name: "Dr. Praghash K",
        title: "(Dept of ECE)",
        cabin: "19,GROUND Floor,DEVADAN BLOCK",
        email: "praghash.k@christuniversity.in",
        image: "/Screenshot 2025-03-17 215036.png",
        education: [
          "Ph.D from Anna University",
          "M.Tech in Communication Systems",
          "B.E in ECE",
        ],
        research: [
          "VRSMT Steiner Minimum Tree based routing protocol to mitigate the bottleneck in WSN",
          "Indian Road Safety Enhancement using Adaptive Driver Assistance and Communication System",
        ],
        publications: [
          "Cr, S., Mani, G., Stonier, A. A., Peter, G., Kumaresan, P., & Ganji, V. (2023). An extensive critique on expert system control in solar photovoltaic dominated microgrids. IET Renewable Power Generation.",
          "Sherine, A., Peter, G., Stonier, A. A., Ping, D. W. L., Praghash, K., & Ganji, V. (2022). Development of an efficient and secured E-Voting mobile application using Android. Mobile Information Systems, 2022, 1–11.",
          "Vijayakumar, A., Stonier, A. A., Peter, G., Kumaresan, P., & Reyes, E. M. (2022). A Modified Seven-Level Inverter with Inverted Sine Wave Carrier for PWM Control. International Transactions on Electrical Energy Systems, 2022, 1–12.",
          "Iderus, S., Peter, G., Praghash, K., & Vadde, A. R. (2022). Optimization and design of a sustainable industrial grid system. Mathematical Problems in Engineering, 2022, 1–12.",
          "Praghash, K., Metha, S. A., Tanuja, B. S., Preethi, K., & Chandana, N. P. N. S. (2022). Implementation and investigation of an optimal full adder design for low power and reduced delay conditions. Wireless Personal Communications, 126(4), 3041–3069.",
          "Praghash, K., Muduli, A., Bhaskar, M. a. V. S. S., Baig, S. M. A., Dhatri, V. S. L., & Parvez, M. M. (2022). An efficient MIMO cognitive radio (CR) model for mid-band 5G applications. AIP Conference Proceedings, 2393, 020070.",
          "Sathiyan, S. P., Pratap, C. B., Stonier, A. A., Peter, G., Sherine, A., Praghash, K., & Ganji, V. (2022). Comprehensive assessment of electric vehicle development, deployment, and policy initiatives to reduce GHG emissions: opportunities and challenges. IEEE Access, 10, 53614–53639.",
          "Sherine, A., Peter, G., Stonier, A. A., Praghash, K., & Ganji, V. (2022). CMY Color Spaced-Based Visual Cryptography Scheme for secret sharing of data. Wireless Communications and Mobile Computing, 2022, 1–12.",
          "Shobana, S., Praghash, K., Ramya, G., Rajakumar, B. R., & Binu, D. (2022). Integrating renewable energy in electric V2G : Improved optimization assisting dispatch model. International Journal of Energy Research, 46(6), 7917–7934.",
          "Peter, G., Praghash, K., Sherine, A., & Ganji, V. (2022). A combined PWM and AEM-Based AC voltage controller for resistive loads. Mathematical Problems in Engineering, 2022, 1–11.",
          "Yuvaraj, N., Praghash, K., & Karthikeyan, T. (2021). Data privacy preservation and trade-off balance between privacy and utility using deep adaptive clustering and Elliptic curve digital signature algorithm. Wireless Personal Communications, 124(1), 655–670.",
          "Yuvaraj, N., Raja, R. A., Karthikeyan, T., & Praghash, K. (2021). Improved authentication in secured Multicast Wireless Sensor Network (MWSN) using opposition frog leaping algorithm to resist Man-in-Middle attack. Wireless Personal Communications, 123(2), 1715–1731.",
          "Yuvaraj, N., Praghash, K., Raja, R. A., & Karthikeyan, T. (2021). An Investigation of Garbage Disposal Electric Vehicles (GDEVs) Integrated with Deep Neural Networking (DNN) and Intelligent Transportation System (ITS) in Smart City Management System (SCMS). Wireless Personal Communications, 123(2), 1733–1752.",
        ],
      },
    ];
    const directorIIIC = {
      id: 2,
      name: "Dr. Cherukuri Ravindranath Chowdary",
      title: "Director (IIIC)",
      cabin: "Third Floor, Block V",
      email: "cherukuri.ravindranath@christuniversity.in",
      image: "/Screenshot 2025-03-17 214353.png",
      education: ["PhD", "M-Tech", "B-Tech"],
      research: [],
      publications: [
        "Mohanty, A., & Cherukuri, R. C. (2024). Whispered Speech Emotion Recognition with Gender Detection using BiLSTM and DCNN. Journal of Information Systems and Telecommunication (JIST), 12(46), 152–161",
        "Boppuru, P. R., Kukatlapalli, P. K., Chowdary, C. R., & Hussain, J. (2023). AI-based YOLO V4 Intelligent Traffic Light Control System. Journal of Automation Mobile Robotics & Intelligent Systems, 53–61",
        "Venkataswamy, R., Janamala, V., & Chowdary, C. R. (2023). Realization of humanoid doctor and real-time diagnostics of disease using Internet of Things, Edge Impulse platform, and ChatGPT. Annals of Biomedical Engineering, 51(8), 1–3",
        "Boppuru, P. R., Kukatlapalli, P. K., Kukatlapalli, P. K., & Chowdary, C. R. (2023). Machine learning and artificial intelligence techniques for detecting driver drowsiness. Journal of Automation Mobile Robotics & Intelligent Systems, 64–73",
        "Kumar, K. P., Chowdary, C. R., Pillai, V. J., Sarathchandra, K., & Prathap, B. R. (2021). Symbiotic view of provenance in cyber infrastructure and information security. Turkish Journal of Computer and Mathematics Education, 12(2), 3261–3267",
        "Kumar, K. P., Pillai, V. J., Chandra, K. S., & Chowdary, C. R. (2021). Disaster recovery and risk management over private networks using data provenance: Cyber security perspective. Indian Journal of Science and Technology, 14(8), 725–737",
        "Kumar, K. P., & Chowdary, C. R. (2020). Design of new access control approach for provenance based on digital consortium decision making via secret sharing. Journal of Computational and Theoretical Nanoscience, 17(9), 4172–4178",
        "Kumar, K. P., & Cherukuri, R. C. (2019). Secure provenance-based communication using visual encryption. International Journal of Innovative Computing and Applications, 10(3/4), 194",
      ],
    };

    const directorARIOT = {
      id: 3,
      name: "Dr. Vandana Reddy",
      title: "Director (ARIIOT)",
      cabin: "First Floor, Block III",
      email: "vandana.reddy@christuniversity.in",
      image: "/2178.png",
      education: ["PhD in CSE", "M.Tech in CSE", "B.E in CSE"],
      research: [
        "Energy Efficiency through Data Scheduling for Plantation System",
        "Development of AI machine for Sex identification of Pupa and Cocoon Cutting to foster Women empowerment in sericulture",
        "	Energy efficiency through data scheduling in smart plantation system",
      ],
      publications: [
        "Reddy, V., & Prathap, B. R. (2024). From text to action: NLP techniques for washing machine manual processing. *Procedia Computer Science, 235*, 1903–1919.",
        "Shamanth, N., Fuhad, M., George, S. K., Elappila, M., Reddy, V., Krishna, A. V. N., & Jose, S. M. (2024). Cost-effective and energy-efficient drip irrigation system for IoT-enabled smart agriculture. *Lecture Notes in Networks and Systems*, 199–210.",
        "Thomas, J., Reddy, V., Kumari, K., & Su, A. (2023). Gender identification of silkworm pupa and automated cocoon cutting machine for benefiting the sericulture grainages in Karnataka. *Lecture Notes in Networks and Systems*, 372–381.",
        "Sujatha, A. K., Reddy, V., & Balachandran, K. (2023). Optimal shortest path routing over wireless sensor networks using constrained genetic firefly optimization algorithm. *Lecture Notes in Networks and Systems, 608*(1), 643–654.",
        "Naik, P., Reddy, V., & Shettigar, R. (2020). Pain track analysis during gestation using machine learning techniques. *International Journal of Electrical and Computer Engineering, 11*(3), 2128–2133.",
        "Reddy, V., & Gayathri, P. (2020). Redefined vector-based glowworm swarm optimization (R-VBGSO) to improve the node lifetime in WSN. *Journal of Green Engineering, 10*(11), 11047–11061.",
        "Reddy, V., & Gayathri, P. (2020). Revised beaconing glowworm swarm optimization ant colony optimization (RB-GSOACO) algorithm to localize nodes and optimize the energy consumed by nodes in WSN. *Concurrency Computation: Practice and Experience*.",
        "Reddy, V., & Gayathri, P. (2020). Energy efficient data transmission in WSN thru compressive slender penetrative etiquette. *Journal of Ambient Intelligence and Humanized Computing, 11*(3), 1345–1359.",
        "Reddy, V., & Gayathri, P. (2020). Highly efficient particle swarm optimization for energy efficiency in wireless sensor network WSN using energy capping and predictive energy allocation (EC-PEA). *International Journal of Biomedical Engineering and Technology*.",
        "Reddy, V., & Gayathri, P. (2019). Integration of internet of things with wireless sensor network. *International Journal of Electrical and Computer Engineering, 9*(1), 439–444.",
        "Reddy, V., & Gayathri, P. (2018). A review on energy optimization techniques used in WSN. *ARPN Journal of Engineering and Applied Sciences, 13*(14), 4351–4359.",
      ],
    };

    // Function to handle navigation
    const navigateTo = (path: string) => {
      // Use window.location for navigation
      window.location.href = path;
    };

    // Function to handle nav item hover
    const handleNavHover = (item: string) => {
      setActiveNavItem(item);
    };

    return (
      <div className="min-h-screen bg-slate-200">
        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-[#1e2949] mb-2">
              Advanced Research For Industrial IoT
            </h1>
            <p className="text-[#7f8899] max-w-2xl mb-8">
              Pioneering innovative solutions at the intersection of IoT, AI, and
              industrial applications to transform the future of smart
              manufacturing.
            </p>
          </div>
          <h2 className="text-3xl font-bold text-[#1e2949] mb-8">
            Director (IIIC)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-12">
            <div className="md:col-start-2 md:col-end-3">
              <div className="bg-white rounded-3xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="bg-slate-100 p-8 flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-sm">
                    <img
                      src={directorIIIC.image}
                      alt={directorIIIC.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="mt-4 font-bold text-[#1e2949] text-xl">
                    {directorIIIC.name}
                  </h3>
                  <p className="text-[#7f8899]">{directorIIIC.title}</p>
                </div>

                <div className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <MapPin className="w-5 h-5 text-[#1e2949] mt-0.5 flex-shrink-0" />
                    <p className="text-[#7f8899] text-sm">{directorIIIC.cabin}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#1e2949] flex-shrink-0" />
                    <a
                      href={`mailto:${directorIIIC.email}`}
                      className="text-[#1e2949] hover:underline text-sm"
                    >
                      {directorIIIC.email}
                    </a>
                  </div>
                  <div className="mt-5 flex justify-center">
                    <button
                      className="text-[#1e2949] hover:text-[#1e2949]/80 text-sm font-medium"
                      onClick={() => setSelectedFaculty(directorIIIC)}
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-[#1e2949] mb-8">
            Director (ARIIOT)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-12">
            <div className="md:col-start-2 md:col-end-3">
              <div className="bg-white rounded-3xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="bg-slate-100 p-8 flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-sm">
                    <img
                      src={directorARIOT.image}
                      alt={directorARIOT.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="mt-4 font-bold text-[#1e2949] text-xl">
                    {directorARIOT.name}
                  </h3>
                  <p className="text-[#7f8899]">{directorARIOT.title}</p>
                </div>

                <div className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <MapPin className="w-5 h-5 text-[#1e2949] mt-0.5 flex-shrink-0" />
                    <p className="text-[#7f8899] text-sm">
                      {directorARIOT.cabin}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#1e2949] flex-shrink-0" />
                    <a
                      href={`mailto:${directorARIOT.email}`}
                      className="text-[#1e2949] hover:underline text-sm"
                    >
                      {directorARIOT.email}
                    </a>
                  </div>
                  <div className="mt-5 flex justify-center">
                    <button
                      className="text-[#1e2949] hover:text-[#1e2949]/80 text-sm font-medium"
                      onClick={() => setSelectedFaculty(directorARIOT)}
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-[#1e2949] mb-8">
            Faculty Members
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facultyMembers.map((faculty, index) => (
              <div
                key={faculty.id}
                className={`
          bg-white rounded-3xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300
          ${index === 6 ? "md:col-start-2 md:col-end-3" : ""} // Add this line
        `}
              >
                {/* Card content remains the same */}
                <div className="bg-slate-100 p-8 flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-sm">
                    <img
                      src={faculty.image}
                      alt={faculty.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="mt-4 font-bold text-[#1e2949] text-xl">
                    {faculty.name}
                  </h3>
                  <p className="text-[#7f8899]">{faculty.title}</p>
                </div>

                <div className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <MapPin className="w-5 h-5 text-[#1e2949] mt-0.5 flex-shrink-0" />
                    <p className="text-[#7f8899] text-sm">{faculty.cabin}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#1e2949] flex-shrink-0" />
                    <a
                      href={`mailto:${faculty.email}`}
                      className="text-[#1e2949] hover:underline text-sm"
                    >
                      {faculty.email}
                    </a>
                  </div>
                  <div className="mt-5 flex justify-center">
                    <button
                      className="text-[#1e2949] hover:text-[#1e2949]/80 text-sm font-medium"
                      onClick={() => setSelectedFaculty(faculty)}
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* Faculty Profile Modal */}
        {selectedFaculty && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div
              ref={modalRef}
              className="bg-white rounded-3xl shadow-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto"
              style={{ scrollbarWidth: "none" }} /* Firefox */
            >
              {/* Add this style to hide the scrollbar in webkit browsers */}
              <style jsx>{`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>

              <div className="relative h-full">
                <button
                  className="absolute top-4 right-4 bg-white rounded-full p-1 shadow-md hover:bg-gray-100 z-10"
                  onClick={() => setSelectedFaculty(null)}
                >
                  <X className="h-6 w-6 text-[#1e2949]" />
                </button>

                <div className="bg-[#d8dee3] p-8 flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-sm">
                    <img
                      src={selectedFaculty.image}
                      alt={selectedFaculty.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="mt-4 font-bold text-[#1e2949] text-2xl">
                    {selectedFaculty.name}
                  </h2>
                  <p className="text-[#7f8899]">{selectedFaculty.title}</p>
                </div>

                <div className="p-8">
                  <div className="flex items-start gap-3 mb-4">
                    <MapPin className="w-5 h-5 text-[#1e2949] mt-0.5 flex-shrink-0" />
                    <p className="text-[#7f8899]">{selectedFaculty.cabin}</p>
                  </div>
                  <div className="flex items-center gap-3 mb-8">
                    <Mail className="w-5 h-5 text-[#1e2949] flex-shrink-0" />
                    <a
                      href={`mailto:${selectedFaculty.email}`}
                      className="text-[#1e2949] hover:underline"
                    >
                      {selectedFaculty.email}
                    </a>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen className="w-5 h-5 text-[#1e2949]" />
                      <h3 className="font-bold text-[#1e2949] text-lg">
                        Education
                      </h3>
                    </div>
                    <ul className="list-disc pl-10 space-y-1">
                      {selectedFaculty.education.map(
                        (edu: string, index: number) => (
                          <li key={index} className="text-[#7f8899]">
                            {edu}
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  {/* Only show Research Project section if there are research items */}
                  {selectedFaculty.research.length > 0 && (
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Award className="w-5 h-5 text-[#1e2949]" />
                        <h3 className="font-bold text-[#1e2949] text-lg">
                          Research Project
                        </h3>
                      </div>
                      <ul className="list-disc pl-10 space-y-1">
                        {selectedFaculty.research.map(
                          (research: string, index: number) => (
                            <li key={index} className="text-[#7f8899]">
                              {research}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  )}

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <FileText className="w-5 h-5 text-[#1e2949]" />
                      <h3 className="font-bold text-[#1e2949] text-lg">
                        Publications
                      </h3>
                    </div>
                    <ul className="list-disc pl-10 space-y-2">
                      {selectedFaculty.publications.map(
                        (pub: string, index: number) => (
                          <li key={index} className="text-[#7f8899]">
                            {pub}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  export default App;
