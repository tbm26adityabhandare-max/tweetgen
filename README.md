# TweetGen

AI agent that researches a topic and writes 3 ready-to-post tweets in the user's voice. Runs on Groq (free) with optional Tavily web research (free plan).

Each visitor gets FREE_GENERATIONS free runs on your key (default 2). After that they can add their own free Groq key, or wait for the reset (QUOTA_RESET_DAYS, default 30). DAILY_SITE_CAP caps total free runs per day across the whole site.

## Deploy on Railway (recommended)
1. Push this folder to a GitHub repo.
2. railway.app > New Project > Deploy from GitHub repo > pick the repo.
3. Variables tab: add GROQ_API_KEY, and TAVILY_API_KEY for live research.
4. Settings > Networking > Generate Domain. Your site is live.

## Deploy on Vercel
1. Push this folder to a GitHub repo.
2. vercel.com > Add New Project > import the repo (Framework preset: Other).
3. Create a free Redis database at upstash.com and copy its REST URL and token.
4. Environment Variables: GROQ_API_KEY, TAVILY_API_KEY, UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN.
5. Deploy.

## Run locally
GROQ_API_KEY=gsk_... npm start, then open http://localhost:3000
