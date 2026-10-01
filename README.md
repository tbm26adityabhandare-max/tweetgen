# TweetGen

AI agent that researches a topic and writes 3 ready-to-post tweets in the user's voice. Powered by Claude.

Each visitor gets FREE_GENERATIONS free runs on your API key (default 2). After that they can add their own Anthropic key, or wait for the reset (QUOTA_RESET_DAYS, default 30). DAILY_SITE_CAP caps total free runs per day across the whole site.

## Deploy on Railway (recommended)
1. Push this folder to a GitHub repo.
2. railway.app > New Project > Deploy from GitHub repo > pick the repo.
3. Variables tab: add ANTHROPIC_API_KEY (and any optional variables from .env.example).
4. Settings > Networking > Generate Domain. Your site is live.

## Deploy on Vercel
1. Push this folder to a GitHub repo.
2. vercel.com > Add New Project > import the repo (Framework preset: Other).
3. Create a free Redis database at upstash.com and copy its REST URL and token.
4. Environment Variables: ANTHROPIC_API_KEY, UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN.
5. Deploy.

## Run locally
ANTHROPIC_API_KEY=sk-ant-... npm start, then open http://localhost:3000
