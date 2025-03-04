<img src="./public/logo-w-text-alt.svg" alt="Home" width="400"/>

# COMING SOON, This Website Is Being Rebuilt From Scrach!

<a href="https://trade-sense-ai-sigma.vercel.app">Check It Out So Far Here
<img src="./public/linkgrey.png" alt="Home" width="20"/>
</a>

<a href="https://github.com/HaiderMalikk/Altharion">This Website Is Powered By Altharion A AI Market Analyst, Check That Out Here </br>
<img src="./public/altharion-logo.svg" alt="logo" width="250"/>
<img src="./public/linkgrey.png" alt="Home" width="42"/>
</a>

## Project Idea: TradeSenseAI

TradeSenseAI is a hybrid stock prediction system that combines social sentiment analysis with traditional financial data and advanced analytics to provide a more accurate, holistic prediction model.

## 🔥 How It Works

Instead of just using social media sentiment or just stock trends and market info, TradeSenseAI combines both to make a unique trading helper:
- It analyzes social media posts to gauge public sentiment about a company or stock while also using traditional financial data such as stock prices, trading volumes, and economic indicators to make predictions.
- It provides stock predictions and recommends actions based on the analysis of both social media and financial data.

### Key Features:
- ✅ Social sentiment trends (Twitter, Reddit, Google Trends)
- ✅ Stock market technical indicators (moving averages, RSI, volume trends)
- ✅ Fundamental analysis (company earnings, financial ratios)
- ✅ Macroeconomic factors (inflation rates, interest rates)
- ✅ Historical correlations (patterns between sentiment & price changes)

### 1️⃣ Data Collection: Multi-Source Input
TradeSenseAI gathers both financial data and social data in real time.

#### 📊 Stock Market Data (Financial Indicators)
Use Yahoo Finance API / Alpha Vantage / IEX Cloud to get:
- Historical price data (OHLC - Open, High, Low, Close prices)
- Moving averages (SMA, EMA) (trend indicators)
- Relative Strength Index (RSI) (overbought/oversold conditions)
- Trading volume (detect unusual activity)
- Earnings reports (profitability trends)

#### 📈 Social Sentiment Data (Real-Time Trends)
Use Twitter/X API, Reddit API, Google Trends API to analyze:
- Number of mentions per hour/day (trending stocks)
- Sentiment score of posts/tweets (bullish vs. bearish mood)
- Keyword analysis (e.g., "$TSLA crash" vs. "$TSLA 🚀🚀")

### 2️⃣ Feature Engineering: Combine Both Data Sources
Combine financial indicators and social sentiment into meaningful metrics for analysis.

- 📊 Stock Trend Score (based on SMA, RSI, and volume patterns)
- 🗣 Social Sentiment Score (based on Twitter/Reddit discussions)
- 📉 Market Condition Score (interest rates, inflation impact)

Weights: Default Weights (Are Adjustable)
- 50% weight on financial indicators
- 30% weight on social sentiment
- 20% weight on macroeconomic trends


### 3️⃣ Machine Learning Model: Predicting Future Prices
- 💻 Train a ML model that takes in combined scores and predicts the next price movement.

### 4️⃣ Displaying Insights: Next.js Dashboard UI
A stunning UI that:
- ✅ Shows stock charts + real-time data
- ✅ Explains WHY a stock is predicted to rise/fall
- ✅ Gives confidence scores & alerts

### 5️⃣ Bonus Features (maybe)
- 💡 🚀 Smart Stock Picks – Recommends stocks with strong financial & sentiment signals
- 💡 📅 Earnings Calendar Alerts – Detects pre-earnings stock trends
- 💡 📢 Sentiment-Based Alerts – “Tesla has 90% positive sentiment! 🚀”

### Why TradeSenseAI?
- ✅ Not just social media hype → Uses financial analysis too
- ✅ Not just price trends → Adds market psychology from social trends
- ✅ Real-world relevance → People already use sentiment for trading
- ✅ Highly monetizable → You can sell premium insights & predictions

## Tech Stack
- **Frontend:** Next.js, tailwind
- **Backend:** Node.js, Next.js
- **Database:** Firebase
- **APIs:** Yahoo Finance API, Alpha Vantage, IEX Cloud, Twitter/X API, Reddit API, Google Trends API
- **Machine Learning:** Python, scikit-learn, TensorFlow, OpenAI
- **Hosting:** Vercel, Heroku

## Why the Website Was Made
TradeSenseAI was created to provide traders with a more comprehensive tool for stock prediction by combining traditional financial data with social sentiment analysis. This approach aims to offer more accurate predictions and actionable insights, helping traders make informed decisions in the stock market.
- Please note that the webiste is still in progress and the fetures may be subject to change in the future.

## File Structure
```plaintext
/Trade-Sense-AI
├── app/
│   ├── components/
│   │   ├── AnimatedButton.tsx // Animated button component
│   │   ├── ThreeScene.tsx // Main 3D scene component using Three.js
│   │   └── styles/ // component styles
│   │       └── three-js-styles.css // CSS styles for Three.js components
│   ├── dashboard/ // (post login pages)
│   │   │── profile/
│   │   │   └── page.tsx // user profile page
│   │   │── styles/ // dashboard styles
│   │   │   └── home-page-styles.css // home page styles
│   │   ├── layout.tsx // Layout for the dashboard
│   │   └── page.tsx // home page for user
│   ├── hooks/
│   │   └── GetUserData.tsx // to fetch the user data like name email profile stuff etc
│   ├── login/
│   │   └── [[...rest]]/page.tsx // Login page
│   ├── policy/ // policy page
│   ├── licence/ // licence page
│   ├── about/ // about page
│   ├── styles/ // root app styles (pre login pages)
│   │   ├── button-styles.css // Custom button styles
│   │   ├── globals.css // Global CSS styles
│   │   ├── login-page-style.css // CSS styles for the login page
│   │   └── main-page-styles.css // CSS styles for the main page
│   ├── layout.tsx // Root layout for the website
│   └── page.tsx // Main landing page
├── favicon.ico // the favicon for web browsers
├── pages/
│   └── api/
│       ├── users.js // API endpoint for user management
│       └── clerk.js // Middleware for Clerk login
├── public/ // contains all the images for the website
├── utils/
│   ├── firebaseAdmin.js // Firebase admin initialization
│   └── firebase.js // Firebase client initialization for sending data to firebase
├── node_modules/ // node modules for the dependencies (do npm install to get these before running)
├── .next/ // final build folder (do npm build then npm start to run this)
├── README.md // Project README file
├── package.json // Project dependencies and scripts
├── .env // Environment variables
├── .gitignore // Git ignore file
├── .prettierignore // Prettier ignore file
├── .prettierrc // Prettier configuration file
├── eslist.config.mjs // eslint config
├── jsconfig.json // JavaScript configuration file
├── tsconfig.json // TypeScript configuration file
├── next.config.mjs // Next.js configuration file
├── next-env.d.ts // Next.js env
├── postcss.config.mjs // PostCSS configuration file
├── tailwind.config.mjs // Tailwind CSS configuration file
├── package.json // json file with dependencies
├── package-lock.json // json file with dependencies with versions to stay in sync everywhere
├── Licence.md // License file
└── Private_Policy.md // Privacy policy file
```

## Additional Information
- [License](Licence)
- [Policy](Private_Policy.md)
- [Altharion](https://github.com/HaiderMalikk/Altharion)
- [About-Me](https://github.com/HaiderMalikk)