// Faculty modal functionality for Industrial IoT Lab Static Site

// Faculty data
const facultyData = {
    director: {
        name: "Dr. Vandana Reddy",
        title: "Director (ARIIOT)",
        cabin: "First Floor, Block III",
        email: "vandana.reddy@christuniversity.in",
        image: "images/2178.png",
        education: ["PhD in CSE", "M.Tech in CSE", "B.E in CSE"],
        research: [
            "Energy Efficiency through Data Scheduling for Plantation System",
            "Development of AI machine for Sex identification of Pupa and Cocoon Cutting to foster Women empowerment in sericulture",
            "Energy efficiency through data scheduling in smart plantation system"
        ],
        publications: [
            "Reddy, V., & Prathap, B. R. (2024). From text to action: NLP techniques for washing machine manual processing. Procedia Computer Science, 235, 1903–1919.",
            "Shamanth, N., Fuhad, Mx., George, S. K., Elappila, M., Reddy, V., Krishna, A. V. N., & Jose, S. M. (2024). Cost-effective and energy-efficient drip irrigation system for IoT-enabled smart agriculture. Lecture Notes in Networks and Systems, 199–210.",
            "Thomas, J., Reddy, V., Kumari, K., & Su, A. (2023). Gender identification of silkworm pupa and automated cocoon cutting machine for benefiting the sericulture grainages in Karnataka. Lecture Notes in Networks and Systems, 372–381.",
            "Sujatha, A. K., Reddy, V., & Balachandran, K. (2023). Optimal shortest path routing over wireless sensor networks using constrained genetic firefly optimization algorithm. Lecture Notes in Networks and Systems, 608(1), 643–654.",
            "Naik, P., Reddy, V., & Shettigar, R. (2020). Pain track analysis during gestation using machine learning techniques. International Journal of Electrical and Computer Engineering, 11(3), 2128–2133.",
            "Reddy, V., & Gayathri, P. (2020). Redefined vector-based glowworm swarm optimization (R-VBGSO) to improve the node lifetime in WSN. Journal of Green Engineering, 10(11), 11047–11061.",
            "Reddy, V., & Gayathri, P. (2020). Revised beaconing glowworm swarm optimization ant colony optimization (RB-GSOACO) algorithm to localize nodes and optimize the energy consumed by nodes in WSN. Concurrency Computation: Practice and Experience.",
            "Reddy, V., & Gayathri, P. (2020). Energy efficient data transmission in WSN thru compressive slender penetrative etiquette. Journal of Ambient Intelligence and Humanized Computing, 11(3), 1345–1359.",
            "Reddy, V., & Gayathri, P. (2020). Highly efficient particle swarm optimization for energy efficiency in wireless sensor network WSN using energy capping and predictive energy allocation (EC-PEA). International Journal of Biomedical Engineering and Technology.",
            "Reddy, V., & Gayathri, P. (2019). Integration of internet of things with wireless sensor network. International Journal of Electrical and Computer Engineering, 9(1), 439–444.",
            "Reddy, V., & Gayathri, P. (2018). A review on energy optimization techniques used in WSN. ARPN Journal of Engineering and Applied Sciences, 13(14), 4351–4359."
        ]
    },
    faculty1: {
        name: "Dr. Rakoth Kandan Sambandam",
        title: "(Dept of CSE)",
        cabin: "220/10,FIRST Floor,BLOCK II",
        email: "rakoth.kandan@christuniversity.in",
        image: "images/Screenshot 2025-03-17 214716.png",
        education: ["PhD from Annamalai University", "M.Tech in CSE", "BE in ECE"],
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
            "Sambandam, R. K., & Jayaraman, S. (2016). Self-adaptive dragonfly based optimal thresholding for multilevel segmentation of digital images. Journal of King Saud University - Computer and Information Sciences, 30(4), 449–461."
        ]
    },
    faculty2: {
        name: "Dr. Shamanth N",
        title: "(Dept of CSE)",
        cabin: "51,GROUND Floor,BLOCK III",
        email: "shamanth.n@christuniversity.in",
        image: "https://kp.christuniversity.in/KnowledgePro/images/EmployeePhotos/E5581.jpg",
        education: ["PhD from BITS Pilani", "M.Tech in Computer Network Engineering", "B.Tech in CSE"],
        research: ["Development of AI Enabled Contactless Remote Health Monitoring System for Neonatal care"],
        publications: [
            "Fuhad, M., George, S. K., Elappila, M., Nagaraju, S., Reddy, V., Krishna, A. V. N., & Jose, S. M. (2024). Cost effective and energy efficient drip irrigation system for IoT enabled smart agriculture. In Lecture notes in networks and systems (pp. 199–210).",
            "Aswanth, M., Amal, N., Alok, C., Nagaraju, S., & Elappila, M. (2024). Augmented Reality based Navigation for Indoor Environment using Unity Platform. In Lecture notes in networks and systems (pp. 199–207).",
            "Nagaraju, S., Gudino, L. J., Kadam, B. V., Khairnar, V. V., Rodriguez, J. X., & Ramesha, C. K. (2023). Energy-Efficient Long-Range sectored antenna for directional sensor network applications. IETE Journal of Research, 70(5), 4442–4452.",
            "Elappila, M., Nagaraju, S., Vivek, K. S., & Gopinath, A. (2023). Dynamic channel allocation in wireless personal area networks for industrial IoT applications. In Cognitive science and technology (pp. 1077–1090).",
            "Nagaraju, S., V, S., Gudino, L. J., Kadam, B. V., K, R. C., & Rodrigues, J. (2019). Hybrid area exploration–based mobility‐assisted localization with sectored antenna in wireless sensor networks. International Journal of Communication Systems, 33(4).",
            "Nagaraju, S., Gudino, L. J., Tripathi, N., V, S., & CK, R. (2018). Mobility assisted localization for mission critical Wireless Sensor Network applications using hybrid area exploration approach. Journal of King Saud University - Computer and Information Sciences, 33(5), 608–618.",
            "Kadam, B. V., Gudino, L. J., Ramesha, C., & Nagaraju, S. (2016). A band-notched ultra-wideband compact Planar Monopole antenna with U-shaped parasitic element. Procedia Computer Science, 93, 101–107."
        ]
    },
    faculty3: {
        name: "Dr. Manu Elappila",
        title: "(Dept of CSE)",
        cabin: "250/34,THIRD Floor,BLOCK II",
        email: "manu.elappila@christuniversity.in",
        image: "images/Screenshot 2025-03-17 214828.png",
        education: ["Ph.D from NIT Rourkela", "M.Tech in CSE", "B.Tech in IT"],
        research: ["Development of AI Enabled Contactless Remote Health Monitoring System for Neonatal care"],
        publications: [
            "Fuhad, M., George, S. K., Elappila, M., Nagaraju, S., Reddy, V., Krishna, A. V. N., & Jose, S. M. (2024b). Cost effective and energy efficient drip irrigation system for IoT enabled smart agriculture. In Lecture notes in networks and systems (pp. 199–210).",
            "Aswanth, M., Amal, N., Alok, C., Nagaraju, S., & Elappila, M. (2024b). Augmented Reality based Navigation for Indoor Environment using Unity Platform. In Lecture notes in networks and systems (pp. 199–207).",
            "Elappila, M., & Chinara, S. (2023). Implementation of survivability aware protocols in WSN for IoT applications using Contiki-OS and hardware testbed evaluation. Microprocessors and Microsystems, 104, 104988.",
            "Elappila, M., Nagaraju, S., Vivek, K. S., & Gopinath, A. (2023b). Dynamic channel allocation in wireless personal area networks for industrial IoT applications. In Cognitive science and technology (pp. 1077–1090).",
            "Elappila, M., Chinara, S., & Parhi, D. R. (2019). Survivability Aware Channel Allocation in WSN for IoT applications. Pervasive and Mobile Computing, 61, 101107.",
            "Elappila, M., Chinara, S., & Parhi, D. R. (2017). Survivable Path Routing in WSN for IoT applications. Pervasive and Mobile Computing, 43, 49–63."
        ]
    },
    faculty4: {
        name: "Dr. Venkataswamy R",
        title: "(Dept of EEE)",
        cabin: "88,THIRD Floor,BLOCK III",
        email: "venkataswamy.r@christuniversity.in",
        image: "https://kp.christuniversity.in/KnowledgePro/images/EmployeePhotos/E1737.jpg",
        education: ["Ph.D from Visvesvaraya Technological University", "M.Tech in Control and Computing", "B.E in EEE"],
        research: ["Retrofitting of conventional CNC Milling Machine to digitalized transformation for smart manufacturing"],
        publications: [
            "Venkataswamy, R., Janamala, V., & Chowdary, C. R. (2023). Realization of humanoid doctor and real-time diagnostics of disease using Internet of Things, Edge Impulse platform, and ChatGPT. Annals of Biomedical Engineering, 51(8), 1–3",
            "Venkataswamy, R., Rao, U., & Meena, P. (2022). Transformer performance enhancement by optimized charging strategy for electric vehicles. Archives of Electrical Engineering, 71(1), 37–56",
            "Venkataswamy, R., Rao, K. U., & Meena, P. (2020). Internet of things based metaheuristic reliability centered maintenance of distribution transformers. IOP Conference Series Earth and Environmental Science, 463(1), 012047.",
            "Venkataswamy, R., Rao, K. U., & Meena, P. (2019). Development of Internet of Things Platform and its application in remote monitoring and control of transformer operation. In Lecture notes in networks and systems (pp. 165–183).",
            "Venkataswamy, R., & Joseph, T. M. (2019). Optimal charging strategy for spatially distributed electric vehicles in power system by remote analyser. In Lecture notes in networks and systems (pp. 400–412).",
            "Venkataswamy, R., Paul, R., & Jogy, J. (2019). Internet of Things based Autonomous Borewell Management System. In Lecture notes in networks and systems (pp. 229–243)."
        ]
    },
    faculty5: {
        name: "Prof. Sharon Roji Priya C",
        title: "(Dept of CSE)",
        cabin: "48,GROUND Floor,BLOCK III",
        email: "sharon.roji@christuniversity.in",
        image: "images/Screenshot 2025-03-17 214932.png",
        education: ["M.E CSE", "B.E CSE"],
        research: [],
        publications: [
            "Vatambeti, R., Damera, V. K., H, K., M, M., C, S. R. P., & Mekala, M. S. (2023). Classification of HHO-based Machine learning techniques for clone attack detection in WSN. International Journal of Computer Network and Information Security, 15(6), 1–15"
        ]
    },
    faculty6: {
        name: "Prof. Shruti Jalapur",
        title: "(Dept of CSE)",
        cabin: "636,193,Fourth Floor,BLOCK VI",
        email: "shruti.jalapur@christuniversity.in",
        image: "https://kp.christuniversity.in/KnowledgePro/images/EmployeePhotos/E6692.jpg",
        education: ["M.Tech in CSE", "B.E in CSE"],
        research: [],
        publications: [
            "Jalapur, S., Yogish, D., Mithun, B. N., & Anoop, G. L. (2024). An integrated scalable healthcare management system using IOT. In Lecture notes in networks and systems (pp. 165–178)",
            "Yogish, D., Jalapur, S., Yogisha, H. K., & Mithun, B. N. (2024). Text summarization techniques for Kannada Language. In Lecture notes in networks and systems (pp. 107–117)"
        ]
    },
    faculty7: {
        name: "Dr. Praghash K",
        title: "(Dept of ECE)",
        cabin: "19,GROUND Floor,DEVADAN BLOCK",
        email: "praghash.k@christuniversity.in",
        image: "images/Screenshot 2025-03-17 215036.png",
        education: ["Ph.D from Anna University", "M.Tech in Communication Systems", "B.E in ECE"],
        research: [
            "VRSMT Steiner Minimum Tree based routing protocol to mitigate the bottleneck in WSN",
            "Indian Road Safety Enhancement using Adaptive Driver Assistance and Communication System"
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
            "Shobana, S., Praghash, K., Ramya, G., Rajakumar, B. R., & Binu, D. (2022). Integrating renewable energy in electric V2G : Improved optimization assisting dispatch model. International Journal of Energy Research, 46(6), 7917–7934.",
            "Peter, G., Praghash, K., Sherine, A., & Ganji, V. (2022). A combined PWM and AEM-Based AC voltage controller for resistive loads. Mathematical Problems in Engineering, 2022, 1–11.",
            "Yuvaraj, N., Praghash, K., & Karthikeyan, T. (2021). Data privacy preservation and trade-off balance between privacy and utility using deep adaptive clustering and Elliptic curve digital signature algorithm. Wireless Personal Communications, 124(1), 655–670.",
            "Yuvaraj, N., Raja, R. A., Karthikeyan, T., & Praghash, K. (2021). Improved authentication in secured Multicast Wireless Sensor Network (MWSN) using opposition frog leaping algorithm to resist Man-in-Middle attack. Wireless Personal Communications, 123(2), 1715–1731.",
            "Yuvaraj, N., Praghash, K., Raja, R. A., & Karthikeyan, T. (2021). An Investigation of Garbage Disposal Electric Vehicles (GDEVs) Integrated with Deep Neural Networking (DNN) and Intelligent Transportation System (ITS) in Smart City Management System (SCMS). Wireless Personal Communications, 123(2), 1733–1752."
        ]
    }
};

// Modal functions
function openModal(facultyId) {
    const faculty = facultyData[facultyId];
    if (!faculty) return;

    const modal = document.getElementById('facultyModal');
    
    // Populate modal content
    document.getElementById('modalImage').src = faculty.image;
    document.getElementById('modalImage').alt = faculty.name;
    document.getElementById('modalName').textContent = faculty.name;
    document.getElementById('modalTitle').textContent = faculty.title;
    document.getElementById('modalCabin').textContent = faculty.cabin;
    document.getElementById('modalEmail').href = `mailto:${faculty.email}`;
    document.getElementById('modalEmail').textContent = faculty.email;

    // Populate education
    const educationList = document.getElementById('modalEducation');
    educationList.innerHTML = '';
    faculty.education.forEach(edu => {
        const li = document.createElement('li');
        li.className = 'text-[#7f8899]';
        li.textContent = edu;
        educationList.appendChild(li);
    });

    // Populate research (only show if there are research items)
    const researchSection = document.getElementById('modalResearchSection');
    const researchList = document.getElementById('modalResearch');
    if (faculty.research.length > 0) {
        researchSection.style.display = 'block';
        researchList.innerHTML = '';
        faculty.research.forEach(research => {
            const li = document.createElement('li');
            li.className = 'text-[#7f8899]';
            li.textContent = research;
            researchList.appendChild(li);
        });
    } else {
        researchSection.style.display = 'none';
    }

    // Populate publications
    const publicationsList = document.getElementById('modalPublications');
    publicationsList.innerHTML = '';
    faculty.publications.forEach(pub => {
        const li = document.createElement('li');
        li.className = 'text-[#7f8899]';
        li.textContent = pub;
        publicationsList.appendChild(li);
    });

    // Show modal
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    // Re-initialize Lucide icons for the modal
    lucide.createIcons();
}

function closeModal() {
    const modal = document.getElementById('facultyModal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    const modal = document.getElementById('facultyModal');
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});
