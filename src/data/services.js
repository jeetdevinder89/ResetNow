// Each entry: pwUrl = verified forgot/reset password page
export const SERVICE_DB = [
  // Social Media
  { id: 'facebook',      name: 'Facebook',         category: 'Social Media',    icon: 'SiFacebook',      color: '#1877f2', pwUrl: 'https://www.facebook.com/login/identify' },
  { id: 'instagram',     name: 'Instagram',         category: 'Social Media',    icon: 'SiInstagram',     color: '#e1306c', pwUrl: 'https://www.instagram.com/accounts/password/reset/' },
  { id: 'twitter',       name: 'X / Twitter',       category: 'Social Media',    icon: 'SiX',             color: '#000000', pwUrl: 'https://twitter.com/i/flow/password_reset' },
  { id: 'linkedin',      name: 'LinkedIn',           category: 'Social Media',    icon: 'SiLinkedin',      color: '#0a66c2', pwUrl: 'https://www.linkedin.com/uas/request-password-reset' },
  { id: 'reddit',        name: 'Reddit',             category: 'Social Media',    icon: 'SiReddit',        color: '#ff4500', pwUrl: 'https://www.reddit.com/password' },
  { id: 'snapchat',      name: 'Snapchat',           category: 'Social Media',    icon: 'SiSnapchat',      color: '#f7c948', pwUrl: 'https://accounts.snapchat.com/' },
  { id: 'tiktok',        name: 'TikTok',             category: 'Social Media',    icon: 'SiTiktok',        color: '#ff0050', pwUrl: 'https://www.tiktok.com/login/' },
  { id: 'pinterest',     name: 'Pinterest',          category: 'Social Media',    icon: 'SiPinterest',     color: '#e60023', pwUrl: 'https://www.pinterest.com/password/reset/' },
  { id: 'discord',       name: 'Discord',            category: 'Social Media',    icon: 'SiDiscord',       color: '#5865f2', pwUrl: 'https://discord.com/reset' },
  { id: 'twitch',        name: 'Twitch',             category: 'Social Media',    icon: 'SiTwitch',        color: '#9146ff', pwUrl: 'https://www.twitch.tv/login' },
  // Productivity / Tech
  { id: 'google',        name: 'Google',             category: 'Productivity',    icon: 'SiGoogle',        color: '#4285f4', pwUrl: 'https://accounts.google.com/signin/recovery' },
  { id: 'microsoft',     name: 'Microsoft',          category: 'Productivity',    icon: 'SiMicrosoft',     color: '#00a4ef', pwUrl: 'https://account.live.com/ResetPassword.aspx' },
  { id: 'apple',         name: 'Apple ID',           category: 'Productivity',    icon: 'SiApple',         color: '#888888', pwUrl: 'https://iforgot.apple.com/' },
  { id: 'slack',         name: 'Slack',              category: 'Productivity',    icon: 'SiSlack',         color: '#4a154b', pwUrl: 'https://slack.com/forgot-password' },
  { id: 'notion',        name: 'Notion',             category: 'Productivity',    icon: 'SiNotion',        color: '#6366f1', pwUrl: 'https://www.notion.so/login' },
  { id: 'zoom',          name: 'Zoom',               category: 'Productivity',    icon: 'SiZoom',          color: '#2d8cff', pwUrl: 'https://zoom.us/forgot_password' },
  { id: 'dropbox',       name: 'Dropbox',            category: 'Productivity',    icon: 'SiDropbox',       color: '#0061ff', pwUrl: 'https://www.dropbox.com/forgot' },
  // Shopping
  { id: 'amazon',        name: 'Amazon',             category: 'Shopping',        icon: 'SiAmazon',        color: '#ff9900', pwUrl: 'https://www.amazon.com/ap/signin' },
  { id: 'ebay',          name: 'eBay',               category: 'Shopping',        icon: 'SiEbay',          color: '#e53238', pwUrl: 'https://signin.ebay.com/ws/eBayISAPI.dll?ForgotPassword' },
  { id: 'etsy',          name: 'Etsy',               category: 'Shopping',        icon: 'SiEtsy',          color: '#f1641e', pwUrl: 'https://www.etsy.com/forgot-password' },
  { id: 'walmart',       name: 'Walmart',            category: 'Shopping',        icon: 'SiWalmart',       color: '#0071ce', pwUrl: 'https://www.walmart.com/account/forgotpassword' },
  { id: 'aliexpress',    name: 'AliExpress',          category: 'Shopping',        icon: 'SiAliexpress',    color: '#ff6a00', pwUrl: 'https://login.aliexpress.com/' },
  // Finance
  { id: 'paypal',        name: 'PayPal',             category: 'Finance',         icon: 'SiPaypal',        color: '#003087', pwUrl: 'https://www.paypal.com/authflow/password-recovery/' },
  { id: 'coinbase',      name: 'Coinbase',            category: 'Finance',         icon: 'SiCoinbase',      color: '#0052ff', pwUrl: 'https://login.coinbase.com/forgot-password' },
  { id: 'robinhood',     name: 'Robinhood',           category: 'Finance',         icon: 'SiRobinhood',     color: '#00c805', pwUrl: 'https://robinhood.com/login' },
  // Streaming
  { id: 'netflix',       name: 'Netflix',             category: 'Streaming',       icon: 'SiNetflix',       color: '#e50914', pwUrl: 'https://www.netflix.com/loginhelp' },
  { id: 'spotify',       name: 'Spotify',             category: 'Streaming',       icon: 'SiSpotify',       color: '#1db954', pwUrl: 'https://accounts.spotify.com/password-reset' },
  { id: 'youtube',       name: 'YouTube',             category: 'Streaming',       icon: 'SiYoutube',       color: '#ff0000', pwUrl: 'https://accounts.google.com/signin/recovery' },
  { id: 'disneyplus',    name: 'Disney+',             category: 'Streaming',       icon: 'SiDisneyplus',    color: '#113ccf', pwUrl: 'https://www.disneyplus.com/login' },
  { id: 'hulu',          name: 'Hulu',                category: 'Streaming',       icon: 'SiHulu',          color: '#3dbb3d', pwUrl: 'https://auth.hulu.com/web/login' },
  // Developer
  { id: 'github',        name: 'GitHub',              category: 'Developer',       icon: 'SiGithub',        color: '#6e7681', pwUrl: 'https://github.com/password_reset' },
  { id: 'stackoverflow', name: 'Stack Overflow',      category: 'Developer',       icon: 'SiStackoverflow', color: '#f58025', pwUrl: 'https://stackoverflow.com/users/account-recovery' },
  { id: 'gitlab',        name: 'GitLab',              category: 'Developer',       icon: 'SiGitlab',        color: '#fc6d26', pwUrl: 'https://gitlab.com/users/password/new' },
  { id: 'atlassian',     name: 'Atlassian (Jira)',    category: 'Developer',       icon: 'SiJira',          color: '#0052cc', pwUrl: 'https://id.atlassian.com/login' },
  // Software / Design
  { id: 'adobe',         name: 'Adobe',               category: 'Software',        icon: 'SiAdobe',         color: '#ff0000', pwUrl: 'https://auth.services.adobe.com/en_US/index.html#/' },
  { id: 'canva',         name: 'Canva',               category: 'Software',        icon: 'SiCanva',         color: '#00c4cc', pwUrl: 'https://www.canva.com/login/' },
  // Gaming
  { id: 'steam',         name: 'Steam',               category: 'Gaming',          icon: 'SiSteam',         color: '#1b2838', pwUrl: 'https://help.steampowered.com/en/wizard/HelpWithLogin' },
  { id: 'epicgames',     name: 'Epic Games',          category: 'Gaming',          icon: 'SiEpicgames',     color: '#2d2d2d', pwUrl: 'https://www.epicgames.com/id/forgot-password' },
  { id: 'ea',            name: 'EA / Origin',         category: 'Gaming',          icon: 'SiEa',            color: '#ff4747', pwUrl: 'https://myaccount.ea.com/cp-ui/forgotPassword/index' },
  { id: 'playstation',   name: 'PlayStation',         category: 'Gaming',          icon: 'SiPlaystation',   color: '#003087', pwUrl: 'https://my.account.sony.com/central/signin/forgotPassword' },
  // Travel
  { id: 'booking',       name: 'Booking.com',         category: 'Travel',          icon: 'SiBookingdotcom', color: '#003580', pwUrl: 'https://account.booking.com/auth/lostpassword' },
  { id: 'airbnb',        name: 'Airbnb',              category: 'Travel',          icon: 'SiAirbnb',        color: '#ff5a5f', pwUrl: 'https://www.airbnb.com/forgot_password' },
  { id: 'uber',          name: 'Uber',                category: 'Travel',          icon: 'SiUber',          color: '#000000', pwUrl: 'https://auth.uber.com/v2/' },
  // Food Delivery
  { id: 'doordash',      name: 'DoorDash',            category: 'Food Delivery',   icon: 'SiDoordash',      color: '#ff3008', pwUrl: 'https://identity.doordash.com/auth/user/forgot-password' },
  { id: 'ubereats',      name: 'Uber Eats',           category: 'Food Delivery',   icon: 'SiUbereats',      color: '#06c167', pwUrl: 'https://auth.uber.com/v2/' },
  // Health / Fitness
  { id: 'myfitnesspal',  name: 'MyFitnessPal',        category: 'Health & Fitness',icon: 'SiMyfitnesspal',  color: '#00b0ff', pwUrl: 'https://www.myfitnesspal.com/forgot_password' },
  // News / Community
  { id: 'medium',        name: 'Medium',              category: 'Blogging',        icon: 'SiMedium',        color: '#000000', pwUrl: 'https://medium.com/m/signin' },
  { id: 'quora',         name: 'Quora',               category: 'Community',       icon: 'SiQuora',         color: '#b92b27', pwUrl: 'https://www.quora.com/forgot_password' },
]

export const CATEGORIES = ['All', ...Array.from(new Set(SERVICE_DB.map(s => s.category))).sort()]