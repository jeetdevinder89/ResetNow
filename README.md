# PassGuard

A modern, user-friendly password reset link aggregator for 48+ popular platforms. Find and reset your forgotten passwords quickly without searching through each platform's login page.

![PassGuard](https://img.shields.io/badge/License-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-5.4.21-646CFF?logo=vite)

## 🌟 Features

- **48+ Platform Support**: Direct password reset links for major platforms including Facebook, Instagram, Google, GitHub, PayPal, Amazon, and more
- **Live Link Validation**: Client-side validation to verify password reset links are working before you click
- **Recovery Guidance**: Step-by-step recovery instructions tailored to each platform
- **SEO-Optimized Pages**: Individual guide pages for each platform with structured data markup
- **Smart Search & Filter**: Filter platforms by category (Social Media, Finance, Productivity, Development, etc.)
- **Broken Link Reporting**: Report broken links directly to help maintain accuracy
- **No Tracking**: Your privacy is protected - no analytics or tracking
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/jeetdevinder89/PassGuard.git

# Navigate to project directory
cd PassGuard

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will open at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist/` directory.

## 📋 Usage

1. **Search**: Use the search bar to find a specific platform
2. **Filter**: Click category pills to filter by platform category
3. **Validate**: Click "Validate Link" to check if the password reset link is working
4. **View Recovery Steps**: Click "View Recovery Steps" to see platform-specific guidance
5. **Reset Password**: Click the reset link to go directly to the platform's password reset page
6. **Report Issues**: Click "Broken link?" to report any non-functional links

## 🏗️ Project Structure

```
PassGuard/
├── src/
│   ├── components/           # Reusable React components
│   │   ├── SiteCard.jsx      # Individual platform card with actions
│   │   ├── SearchBar.jsx     # Search and category filtering
│   │   ├── ResultsGrid.jsx   # Grid layout for platform cards
│   │   ├── PlatformDrawer.jsx # Recovery steps and validation drawer
│   │   ├── Navbar.jsx        # Navigation header
│   │   ├── Toast.jsx         # Notification system
│   │   └── [other components]
│   ├── pages/
│   │   └── PlatformSeoPage.jsx # SEO-optimized platform guide pages
│   ├── data/
│   │   ├── services.js       # Database of 48+ platforms with reset URLs
│   │   └── recoverySteps.js  # Platform-specific recovery guidance
│   ├── App.jsx               # Main app container with routing and validation
│   ├── main.jsx              # React Router configuration
│   ├── index.css             # Global styles and design tokens
│   └── [other files]
├── index.html                # HTML entry point
├── package.json              # Dependencies and scripts
└── vite.config.js            # Vite configuration
```

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.2.0
- **Build Tool**: Vite 5.4.21
- **Routing**: React Router DOM 7.15.1
- **Icons**: React Icons (Simple Icons) 5.6.0
- **Styling**: CSS Modules
- **Package Manager**: npm

## 🔍 Supported Platforms

ResetNow supports password reset for 48+ platforms across categories:

- **Social Media**: Facebook, Instagram, Twitter/X, TikTok, Snapchat, LinkedIn, Pinterest, Reddit, and more
- **Finance**: PayPal, Stripe, Square, Robinhood, E*TRADE, and more
- **Productivity**: Slack, Asana, Notion, Trello, Monday.com, and more
- **Development**: GitHub, GitLab, Bitbucket, CodePen, and more
- **Cloud Storage**: Google Drive, OneDrive, Dropbox, iCloud, and more
- **Entertainment**: Netflix, Spotify, Discord, Twitch, and more
- **E-commerce**: Amazon, eBay, Shopify, Etsy, and more
- **Email**: Gmail, Outlook, Yahoo Mail, ProtonMail, and more

## 🔐 Privacy & Security

- ✅ All password reset links are verified before being added to PassGuard
- ✅ No data is stored on our servers
- ✅ No tracking or analytics
- ✅ No cookies
- ✅ Open source for transparency

## 🤝 Contributing

We welcome contributions! To help improve PassGuard:

1. **Report a Bug**: Open an issue describing the problem
2. **Add a Platform**: Submit a PR with a new platform's reset URL
3. **Improve Recovery Steps**: Help us add better guidance for platforms
4. **Report Broken Links**: Use the in-app "Broken link?" feature

### Development Workflow

```bash
# Create a feature branch
git checkout -b feature/your-feature-name

# Make your changes and test
npm run dev

# Commit with clear message
git commit -m "feat: describe your changes"

# Push and create a Pull Request
git push origin feature/your-feature-name
```

## 📝 Database Format

Password reset links and recovery steps are stored in:

- `src/data/services.js` - Platform registry with reset URLs and metadata
- `src/data/recoverySteps.js` - Step-by-step recovery guidance per platform

To add a new platform:

1. Add entry to `services.js` with:
   - `id`: Unique identifier
   - `name`: Platform name
   - `category`: Platform category
   - `icon`: Icon name from react-icons/si
   - `color`: Brand color hex code
   - `pwUrl`: URL to password reset page

2. (Optional) Add recovery steps to `recoverySteps.js`

## 🐛 Known Issues

- Bundle size is ~5.1MB (due to react-icons/si package) - optimization in progress
- Regional URL variants not yet supported
- Some enterprise platforms may have additional authentication steps

## 📈 Performance

- **Build Size**: ~5.1MB uncompressed JS, ~2MB gzipped
- **Load Time**: <2s on 4G connection
- **Link Validation**: <9s per platform check

## 📄 License

MIT License - feel free to use ResetNow in your own projects

## 🙋 Support

Found a bug or have a feature request? [Open an issue on GitHub](https://github.com/jeetdevinder89/PassGuard/issues)

---

**Made with ❤️ by [jeetdevinder89](https://github.com/jeetdevinder89)**

Last Updated: May 2026
