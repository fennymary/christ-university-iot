# Industrial IoT Lab - Static Version

This is the static HTML/CSS/JS version of the Industrial IoT Lab website, converted from the original Next.js application.

## Files Structure

```
static/
├── index.html          # Main landing page (converted from app/page.tsx)
├── home.html           # Events and announcements page (converted from app/home/page.tsx)
├── about.html          # About page (converted from app/about/page.tsx)
├── student.html        # Student information page (converted from app/student/page.tsx)
├── faculty.html        # Faculty profiles page (converted from app/faculty/page.tsx)
├── collaboration.html  # Collaboration page (converted from app/collaboration/page.tsx)
├── consultation.html   # Consultation page (converted from app/consultation/page.tsx)
├── css/
│   └── styles.css      # All custom styles and animations
├── js/
│   ├── main.js         # Main JavaScript functionality
│   ├── swiper-init.js  # Swiper carousel initialization
│   ├── faculty-modal.js # Faculty profile modal functionality
│   ├── consultation-form.js # Consultation form handling
│   └── header-footer.js # Header and footer functionality
├── images/             # Lab images and faculty photos copied from public folder
│   ├── labimg1.jpg - labimg78.jpg
│   ├── jos.png         # Student profile image
│   ├── 2178.png        # Director image
│   └── Screenshot*.png # Faculty profile images
└── README.md           # This file
```

## Features Converted

### Header & Footer (All Pages)
- ✅ Responsive navigation with mobile menu
- ✅ ARIIOT and Christ University logos
- ✅ Active page highlighting
- ✅ Mobile hamburger menu with smooth animations
- ✅ Social media links in footer
- ✅ Contact information and quick links
- ✅ Scroll-to-top button
- ✅ Header backdrop blur on scroll
- ✅ Auto-hide header on scroll down

### Index Page (index.html)
- ✅ Hero section with animated background shapes
- ✅ Navigation cards to other pages
- ✅ Interactive tabs (Research, Projects, Partners)
- ✅ Technology focus circles with hover effects
- ✅ Research impact statistics
- ✅ Lab venue information
- ✅ Responsive design maintained

### Home Page (home.html)
- ✅ Hero section with decorative elements
- ✅ Announcement details section
- ✅ Lab images carousel (Swiper.js)
- ✅ Event details with interactive cards
- ✅ Testing images carousel
- ✅ All hover effects and animations

### Student Page (student.html)
- ✅ Featured student profile section
- ✅ Registration call-to-action with external link
- ✅ Student list table with class information
- ✅ External links to Google Sheets
- ✅ Responsive design and hover effects

### Faculty Page (faculty.html)
- ✅ Director profile section (centered layout)
- ✅ Faculty member grid layout
- ✅ Interactive profile modals with detailed information
- ✅ Education, research, and publications sections
- ✅ Email links and contact information
- ✅ Modal functionality with backdrop blur and animations

### Collaboration Page (collaboration.html)
- ✅ Hero section with Devic Earth company information
- ✅ Statistics section with key metrics
- ✅ Pure Skies technology overview with feature list
- ✅ Featured collaborative projects grid
- ✅ Key partner section (Advantech)
- ✅ Contact call-to-action linking to consultation page

### About Page (about.html)
- ✅ Hero section with research initiative badge
- ✅ About Laboratory comprehensive description
- ✅ Three main domains (Healthcare, Video Analytics, Cold Chain)
- ✅ Ongoing research projects with detailed descriptions
- ✅ Advisory Board tables (University, Advantech, Industry experts)
- ✅ Responsive table layouts
- ✅ Professional academic styling

### Consultation Page (consultation.html)
- ✅ Hero section with lab description
- ✅ Consultation approach explanation with images
- ✅ Working contact form with Web3Forms integration
- ✅ Consultation areas overview (IoT, AI/ML, Research)
- ✅ Benefits section with detailed list
- ✅ Form validation and error handling
- ✅ Success/error message display

## External Dependencies

The static version uses the following CDN resources:

1. **Tailwind CSS** - For styling (maintains exact same appearance)
2. **Lucide Icons** - For all icons used in the original
3. **Swiper.js** - For image carousels (replaces React Swiper)

## How to Use

1. **Local Development**: 
   - Simply open `index.html` or `home.html` in a web browser
   - All external dependencies are loaded via CDN

2. **Web Server**: 
   - Upload the entire `static` folder to your web server
   - Ensure all file paths are accessible
   - No server-side processing required

3. **GitHub Pages / Static Hosting**:
   - The files are ready for deployment to any static hosting service
   - No build process required

## Browser Compatibility

- ✅ Modern browsers (Chrome, Firefox, Safari, Edge)
- ✅ Mobile responsive design
- ✅ Touch-friendly interactions
- ✅ Keyboard navigation support

## Customization

### Colors
The main color scheme is defined in CSS custom properties:
- Primary: `#0f1e45` (Navy blue)
- Secondary: `#d3b77b` (Gold/Bronze)
- Light: `#e9f0f2` (Light blue-gray)

### Animations
All animations are defined in `css/styles.css`:
- Background shape floating animations
- Hover effects for cards and buttons
- Tab transitions
- Carousel animations

### Content Updates
- Edit HTML files directly to update content
- Image paths in `images/` folder
- Update links in navigation elements

## Performance Optimizations

- ✅ Lazy loading for images
- ✅ Debounced resize handlers
- ✅ Optimized animations with CSS transforms
- ✅ Minimal JavaScript footprint
- ✅ CDN resources for faster loading

## Accessibility Features

- ✅ Keyboard navigation support
- ✅ Focus indicators
- ✅ Alt text for images
- ✅ Semantic HTML structure
- ✅ ARIA labels where needed

## Notes

- Header and Footer components were intentionally excluded as requested
- All functionality from the original Next.js pages has been preserved
- Links to other pages (about, collaboration, faculty, etc.) are included but those pages would need to be created separately
- The styling and appearance exactly match the original Next.js version

## Future Enhancements

To add more pages:
1. Create new HTML files following the same structure
2. Update navigation links in existing files
3. Add any new styles to `css/styles.css`
4. Include any additional JavaScript in `js/main.js`

## Support

This static version maintains all the visual design and functionality of the original Next.js application while being completely self-contained and deployable to any static hosting service.
