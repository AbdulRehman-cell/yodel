# Deploying Your Static Site to Render (Under 5 Minutes)

This project contains a zero-dependencies, high-performance configuration to deploy your plain HTML/CSS/JS portfolio to production using Docker and Nginx on Render.

## Prerequisites
- A [Render Account](https://render.com) (Free tier)
- [GitHub](https://github.com) account

---

## ⚡ Deployment in 3 Simple Steps

### Step 1: Push Your Code to GitHub
Create a GitHub repository and push your local files:
```bash
git init
git add .
git commit -m "chore: setup production configs for Render"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### Step 2: Import into Render
1. Go to the [Render Dashboard](https://dashboard.render.com).
2. Click **New +** and select **Blueprint**.
3. Connect your GitHub repository.
4. Render will auto-detect the `render.yaml` file. Click **Approve** to deploy.

### Step 3: Configure CI/CD Auto-Deploys (Optional but Recommended)
To set up automatic GitHub Action deployments:
1. Go to **Account Settings** on Render and copy your **API Key**.
2. Go to your Web Service dashboard, copy the **Service ID** (found in the URL: `srv-xxxxxxxxxxxxxxxxxxxx`).
3. In your GitHub repository, go to **Settings > Secrets and variables > Actions** and add:
   - `RENDER_API_KEY`: Paste your Render API Key.
   - `RENDER_SERVICE_ID`: Paste your Render Service ID.

---

## 🛠️ Local Development & Testing
To preview the production-grade Nginx build locally on your machine:
```bash
# Build and run the container locally
docker-compose up --build -d

# Verify it is running healthy
docker ps
```
The site will be running at [http://localhost:8080](http://localhost:8080).