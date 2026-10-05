# Self-hosting

Live at **https://todo.mycodedojo.com**, self-hosted on Michael's homelab (moved off Netlify/Vercel in October 2026).

The homelab builds it from this repo with the `Dockerfile` here and serves the output from a shared nginx container (`portfolio-static`) in the `portfolio-projects` stack (`~/portfolio-projects`, visible in Portainer), behind Caddy.

**Redeploy after pushing to `main`:**

```bash
ssh mcooper@192.168.68.75 '~/portfolio-projects/deploy.sh todo'
```

**Run locally (standalone nginx image):**

```bash
docker build -t todo .
docker run -p 8080:80 todo
```
