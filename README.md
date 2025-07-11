# Christ University IoT Lab Website

A comprehensive web application for the Advanced Research Industrial IoT (ARIIOT) Lab at Christ University. This project is built with Next.js 14, TypeScript, Tailwind CSS, and MongoDB, providing a modern and responsive platform for showcasing research activities, faculty information, and collaborative projects.

## 🌟 Features

- **Modern UI/UX**: Built with React 18, TypeScript, and Tailwind CSS
- **Responsive Design**: Mobile-first approach with responsive layouts
- **Database Integration**: MongoDB integration for dynamic content management
- **Component Library**: Custom UI components built with Radix UI
- **Dark Mode Support**: Theme switching capabilities
- **Form Handling**: Advanced form management with React Hook Form
- **Animation**: Smooth animations and transitions

## 🚀 Tech Stack

### Frontend

- **Framework**: Next.js 14.2.16
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4.17
- **UI Components**: Radix UI, Custom components
- **State Management**: React Hooks
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Animations**: Tailwind CSS animations

### Backend

- **Database**: MongoDB Atlas
- **ORM**: Native MongoDB driver
- **API**: Next.js API Routes

### Development Tools

- **Package Manager**: npm
- **Linting**: ESLint
- **Type Checking**: TypeScript
- **Build Tool**: Next.js built-in bundler

## 📁 Project Structure

```
christ-university-iot/
├── app/                          # Next.js App Router directory
│   ├── api/                      # API routes
│   │   ├── director/             # Director information API
│   │   │   ├── director.json     # Director data
│   │   │   └── route.js          # GET endpoint for director
│   │   └── faculties/            # Faculty information API
│   │       ├── faculties.json    # Faculty data
│   │       └── route.js          # GET endpoint for faculties
│   ├── about/                    # About page
│   ├── collaboration/            # Collaboration projects page
│   ├── consultation/             # Consultation services page
│   ├── faculty/                  # Faculty information page
│   ├── fetched/                  # Data fetching demonstration page
│   ├── home/                     # Home page (alternative route)
│   ├── student/                  # Student information page
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout component
│   └── page.tsx                  # Home page component
├── components/                   # Reusable React components
│   ├── ui/                       # UI component library
│   ├── Footer.tsx                # Footer component
│   └── Header.tsx                # Header component
├── hooks/                        # Custom React hooks
├── lib/                          # Utility libraries
│   ├── dbConnect.js              # MongoDB connection utility
│   └── utils.ts                  # General utilities
├── public/                       # Static assets
├── styles/                       # Additional stylesheets
├── .env                          # Environment variables
├── next.config.mjs               # Next.js configuration
├── tailwind.config.js            # Tailwind CSS configuration
└── tsconfig.json                 # TypeScript configuration
```

## 🛣️ Routes and Functionality

### Main Application Routes

| Route            | Description        | Features                                                                                                                  |
| ---------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| `/`              | Home Page          | - Research highlights<br>- Laboratory showcase<br>- Interactive hero section<br>- Progress indicators<br>- Tabbed content |
| `/about`         | About Page         | - University information<br>- Lab overview<br>- Mission and vision<br>- Contact details                                   |
| `/faculty`       | Faculty Page       | - Faculty profiles<br>- Research interests<br>- Publications<br>- Contact information                                     |
| `/collaboration` | Collaboration Page | - Industry partnerships<br>- Research projects<br>- Collaboration opportunities<br>- Success stories                      |
| `/consultation`  | Consultation Page  | - Consultation services<br>- Contact form<br>- Service offerings<br>- Booking system                                      |
| `/student`       | Student Page       | - Class information<br>- Student resources<br>- Alumni network<br>- External links to spreadsheets                        |
| `/fetched`       | Data Demo Page     | - Faculty data fetching<br>- Dynamic content display<br>- Database integration demo                                       |

### API Endpoints

| Endpoint         | Method | Description                               | Response                          |
| ---------------- | ------ | ----------------------------------------- | --------------------------------- |
| `/api/director`  | GET    | Fetches director information from MongoDB | JSON object with director details |
| `/api/faculties` | GET    | Fetches all faculty members from MongoDB  | JSON array of faculty objects     |

### Data Structure

#### Faculty Data Model

```typescript
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
```

## 🎨 UI Components

### Custom Components

- **Header**: Navigation with responsive mobile menu
- **Footer**: Contact information and social links
- **Cards**: Research project showcases
- **Tabs**: Organized content sections
- **Progress**: Research progress indicators
- **Avatars**: Faculty profile images
- **Badges**: Technology and skill tags
- **Buttons**: Various interactive elements
- **Forms**: Contact and consultation forms

### Design System

- **Colors**: Custom color palette with university branding
- **Typography**: Inter font family
- **Spacing**: Consistent spacing scale
- **Shadows**: Subtle shadow system
- **Borders**: Rounded corners and borders
- **Animations**: Smooth transitions and hover effects

## 🗄️ Database Integration

### MongoDB Collections

1. **Director Collection**

   - Stores director profile information
   - Accessed via `/api/director`

2. **Faculties Collection**
   - Stores all faculty member profiles
   - Includes education, research, and publication data
   - Accessed via `/api/faculties`

### Database Connection

- Uses MongoDB Atlas cloud database
- Connection managed through `lib/dbConnect.js`
- Environment variable `MONGO_URI` for secure connection

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- MongoDB Atlas account

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/fennymary/christ-university-iot.git
   cd christ-university-iot
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:

   ```
   MONGO_URI=your_mongodb_connection_string
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📱 Responsive Design

The application is fully responsive with breakpoints for:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

Features:

- Mobile-first design approach
- Responsive navigation menu
- Adaptive layouts
- Touch-friendly interactions
- Optimized images

## 🔧 Configuration Files

### `next.config.mjs`

Next.js configuration for build optimization and deployment settings.

### `tailwind.config.js`

Tailwind CSS configuration with custom theme, colors, and animations.

### `tsconfig.json`

TypeScript configuration for strict type checking and path mapping.

### `components.json`

Shadcn/ui components configuration.

## 🌐 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms

- **Netlify**: Configure build command as `npm run build`
- **Railway**: Add MongoDB connection string to environment
- **Heroku**: Set up Node.js buildpack and environment variables

## 🔐 Environment Variables

| Variable          | Description                           | Required |
| ----------------- | ------------------------------------- | -------- |
| `MONGO_URI`       | MongoDB Atlas connection string       | Yes      |
| `NEXTAUTH_SECRET` | Authentication secret (if auth added) | No       |
| `NEXTAUTH_URL`    | Application URL (if auth added)       | No       |

## 🧪 Features in Detail

### Home Page

- **Hero Section**: Interactive showcase with animations
- **Research Tabs**: Organized research areas and projects
- **Progress Tracking**: Visual progress indicators for ongoing research
- **Quick Navigation**: Easy access to all sections

### Faculty System

- **Dynamic Profiles**: Faculty information loaded from database
- **Research Showcase**: Individual research interests and publications
- **Contact Integration**: Direct email and location information
- **Responsive Cards**: Adaptive layout for different screen sizes

### Collaboration Hub

- **Project Gallery**: Visual showcase of collaboration projects
- **Partner Network**: Industry and academic partnerships
- **Success Stories**: Highlighted achievements and outcomes
- **Contact Forms**: Easy partnership initiation

### Student Portal

- **Class Management**: Links to external class spreadsheets
- **Alumni Network**: Connection to graduated students
- **Resource Access**: Quick links to important documents
- **Information Hub**: Centralized student information

## 🔄 Data Flow

1. **Client Request**: User navigates to a page
2. **Server Rendering**: Next.js renders the page server-side
3. **Database Query**: API routes fetch data from MongoDB
4. **Component Rendering**: React components display the data
5. **User Interaction**: Interactive elements update the UI

## 🎯 Performance Optimizations

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for faster loads
- **SSR/SSG**: Server-side rendering and static generation
- **Lazy Loading**: Components loaded on demand
- **Minification**: Production builds are minified and optimized

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

**Christ University IoT Lab**

- **Website**: [IoT Lab Website](https://your-domain.com)
- **Email**: contact@christuniversity.in
- **Location**: Christ University, Bangalore, India

## 🙏 Acknowledgments

- Christ University for providing the research platform
- ARIIOT Lab team for their contributions
- Open source community for the amazing tools and libraries
- Faculty and students for their continuous support

---

**Built with ❤️ by the Christ University IoT Lab Team**
