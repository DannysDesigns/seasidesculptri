# Seaside Sculpt

The public website for Seaside Sculpt, a Narragansett, Rhode Island group fitness studio.

## Public pages

| Route | Purpose |
| --- | --- |
| `/` | Studio home page |
| `/classes/` | Indoor cycle, barre, yoga + stretch, and Spin & Sculpt |
| `/schedule/` | Directs customers to the live Mindbody schedule and reservation flow |
| `/pricing/` | Publicly advertised introductory offer, packs, and membership options |
| `/visit/` | Studio location, directions, and first-visit details |

The website's booking calls to action link to the studio's official [Mindbody listing](https://www.mindbodyonline.com/explore/locations/seaside-sculpt), which is the source of truth for live schedule, availability, account management, and purchases.

## Staff prototypes

`/closeout/` and `/host/` are static workflow prototypes only. They are not connected to customer, attendance, booking, or payment systems. Before using these routes with operational data, protect them with Cloudflare Access and implement authenticated server-side integrations.

## Local preview

From the project directory:

```powershell
python -m http.server 8000
```

Open `http://localhost:8000`.

## Cloudflare Pages

Cloudflare Pages deploys the `main` branch automatically. For a static deployment:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Framework preset | `None` |
| Build command | Leave blank |
| Build output directory | `.` |

Connect `seasidesculptri.com` and `www.seasidesculptri.com` under the Pages project's **Custom domains** settings. Keep `https://seasidesculptri.com` as the canonical public URL and permanently redirect `www` to the apex domain.
