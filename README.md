# Seaside Sculpt RI

The website prototype for Seaside Sculpt RI, a Narragansett, Rhode Island fitness studio.

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Public home page |
| `/classes/` | Class descriptions |
| `/schedule/` | Example class schedule |
| `/pricing/` | Example passes and memberships |
| `/closeout/` | Staff daily-closeout prototype |
| `/host/` | Staff welcome-desk prototype |

The schedule, pricing, roster, payments, and contact details are demonstration content. Confirm and replace these details before launch.

## Local preview

From the project folder, run:

```powershell
python -m http.server 8000
```

Open `http://localhost:8000` in a browser.

## Deploy with Cloudflare Pages

1. In Cloudflare, open **Workers & Pages**, then select **Create application** and **Pages**.
2. Connect the `DannysDesigns/seasidesculptri` repository.
3. Use `main` as the production branch, select the `None` framework preset, leave the build command blank, and set the build output directory to `/`.
4. Deploy and confirm the generated `pages.dev` URL.
5. Add `seasidesculptri.com` and `www.seasidesculptri.com` in the Pages project's **Custom domains** settings.
6. Configure a permanent redirect from the apex domain to the preferred `www` address and enable HTTPS in Cloudflare.

Before staff workflows use actual customer, financial, or attendance data, protect `/closeout/` and `/host/` with Cloudflare Access and connect those pages to authenticated server-side services.
