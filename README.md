# zhelunsun.github.io

Personal website of **Sun Zhelun (孙哲伦)** — Ph.D. candidate at Tsinghua University, working on LLM-based multi-agent systems for remote sensing analysis.

🌐 **Live site**: [https://zhelunsun.github.io](https://zhelunsun.github.io)

---

## What's here

A clean, fast, static academic portfolio built with Next.js and hosted on GitHub Pages.

- **About**: Bio, photo, and social links
- **Publications**: First-author and co-author papers with DOI links
- **Work**: Selected projects (Sheaf, URSA, Agent OS, and more)
- **Writing**: MDX blog posts on agents, remote sensing, and research workflows

## Stack

- [Next.js 16](https://nextjs.org/) — App Router, static export
- [Tailwind CSS v4](https://tailwindcss.com/) — Utility-first styling
- [MDX](https://mdxjs.com/) — Blog posts compiled at build time
- [GitHub Pages](https://pages.github.com/) — Static hosting

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export → ./out
```

Node 20+ is recommended.

## Update content

Career facts are generated into `src/generated/site-cv.json` by the private CV
repository's reviewed sync workflow. Do not edit that file by hand. The files in
`src/data/` are adapters and website-owned presentation settings:

| File | Section |
|------|---------|
| `src/data/profile.ts` | Adapter over public identity plus presentation links |
| `src/data/education.ts` | Adapter over public education |
| `src/data/publications.ts` | Adapter over public publications |
| `src/data/projects.ts` | Presentation layer with stable career IDs |
| `src/data/site-presentation.ts` | Portrait, Scholar link, and CV asset paths |
| `content/blog/*.mdx` | Blog posts |

## Deploy

Pushes to `master` trigger `.github/workflows/deploy.yml`, which builds the static export and deploys to GitHub Pages.

One-time setup (already done):
- Repo renamed to `zhelunsun.github.io`
- Settings → Pages → Source = **GitHub Actions**

## License

[MIT](./LICENSE) — feel free to fork and adapt for your own academic portfolio.
