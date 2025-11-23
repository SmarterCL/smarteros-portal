# 🚀 Deployment Instructions for Vercel

## Quick Deploy via Vercel Dashboard

1. **Import Repository**
   - Go to https://vercel.com/new
   - Import: `https://github.com/SmarterCL/smarteros-portal`
   - Framework: Next.js (auto-detected)

2. **Environment Variables**

Add these in Vercel Dashboard → Settings → Environment Variables:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_c2V0dGxpbmctaG9nLTk3LmNsZXJrLmFjY291bnRzLmRldiQ
CLERK_SECRET_KEY=sk_test_74O53iKBUH9ZZLkbZQuCAba3XJIxxBvwxTNY0lifPzhazlo
NEXT_PUBLIC_SUPABASE_URL=https://rjfcmmzjlguiititkmyh.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJqZmNtbXpqbGd1aWl0aXRrbXloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE5NjI2NTAsImV4cCI6MjA0NzUzODY1MH0.VD8qPYqH5xVbE7wqJH_CqGdLIFqKgPqZgPqKZgPqKZg
NEXT_PUBLIC_API_BASE_URL=https://api.smarterbot.cl
```

3. **Custom Domain**
   - Vercel Dashboard → Domains
   - Add: `app.smarterbot.cl`
   - Configure DNS in Cloudflare/Hostinger:
     ```
     Type: CNAME
     Name: app
     Value: cname.vercel-dns.com
     ```

4. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Visit: https://app.smarterbot.cl

## Clerk Configuration

Update Clerk Dashboard with production URLs:

**Allowed Redirect URLs:**
- https://app.smarterbot.cl
- https://app.smarterbot.cl/dashboard
- https://app.smarterbot.cl/sso-callback

**Allowed Origins:**
- https://app.smarterbot.cl

## Verification

Test the deployment:

```bash
curl -I https://app.smarterbot.cl
curl https://app.smarterbot.cl/api/health
```

✅ **Portal is now live at https://app.smarterbot.cl**
