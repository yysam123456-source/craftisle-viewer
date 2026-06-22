# Craftisle Viewer

<p align="center">
  <a href="https://viewer.craftisle.com">
    <img alt="Craftisle Viewer" src="public/logo.svg" width="120" />
  </a>
</p>

<h1 align="center">Craftisle Viewer — Free Online File Viewer</h1>

<p align="center">
  <a href="https://viewer.craftisle.com">Live Site</a> ·
  <a href="https://github.com/yysam123456-source/craftisle-viewer/issues">Issues</a> ·
  <a href="#supported-formats">Supported Formats</a>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-blue" />
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-14-black?logo=next.js" />
  <img alt="Vercel" src="https://img.shields.io/badge/Vercel-Deployed-black?logo=vercel" />
</p>

---

## 🌐 Live Site

👉 **[viewer.craftisle.com](https://viewer.craftisle.com)** — view files online for free, no upload required.

Part of the [Craftisle](https://www.craftisle.com) tool ecosystem.

---

## ✨ Features

Craftisle Viewer lets you view files directly in your browser — **100% client-side**, no server uploads, no registration.

### Supported Formats

| Category | Formats |
|----------|---------|
| **Documents** | PDF, DOCX, DOC, TXT, MD, RTF |
| **Spreadsheets** | XLSX, XLS, CSV |
| **Presentations** | PPTX, PPT |
| **Images** | PNG, JPG, GIF, WebP, SVG, BMP |
| **Data** | JSON, XML, YAML, CSV |
| **Code** | JS, TS, HTML, CSS, PY, etc. (syntax highlighting) |

### Viewer Features
- **PDF Viewer** — render PDF pages with zoom, rotate, and navigation
- **Image Viewer** — zoom, rotate, and pan images
- **Code Viewer** — syntax highlighting for 100+ languages
- **Markdown Viewer** — render Markdown with styling
- **JSON Viewer** — formatted view with collapse/expand
- **CSV Viewer** — table view for spreadsheet data
- **Drag & Drop** — open files by dragging into the window

---

## 🛠️ Tech Stack

| Technology | Description |
|------------|-------------|
| **Next.js 14** | React framework with App Router |
| **TypeScript** | Type safety |
| **PDF.js** | PDF rendering engine |
| **Monaco Editor** | Code viewer (VS Code in browser) |
| **Marked** | Markdown rendering |
| **Tailwind CSS** | Utility-first styling |
| **Vercel** | Deployment |

---

## 🚀 Getting Started (Local Development)

### Prerequisites
- Node.js 18+
- pnpm (recommended)

### Install & Run

```bash
# Clone the repo
git clone https://github.com/yysam123456-source/craftisle-viewer.git
cd craftisle-viewer

# Install dependencies
pnpm install

# Start dev server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view locally.

### Build for Production

```bash
pnpm build
pnpm start
```

---

## 📦 Deployment

Deployed on **Vercel** — push to `main` branch triggers auto-deploy.

👉 **[viewer.craftisle.com](https://viewer.craftisle.com)**

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yysam123456-source/craftisle-viewer)

---

## 📁 Project Structure

```
craftisle-viewer/
├── public/              # Static assets
├── src/
│   ├── app/           # Next.js App Router pages
│   ├── components/     # React components
│   │   ├── PDFViewer/
│   │   ├── ImageViewer/
│   │   ├── CodeViewer/
│   │   └── MarkdownViewer/
│   ├── lib/           # Utility functions
│   └── types/        # TypeScript types
├── package.json
├── next.config.js
└── tsconfig.json
```

---

## 🔗 Related Projects

| Project | URL | Description |
|---------|-----|-------------|
| **Craftisle Main** | [www.craftisle.com](https://www.craftisle.com) | Tool hub & homepage |
| **PDF Tools** | [pdf.craftisle.com](https://pdf.craftisle.com) | PDF merge, split, compress |
| **Resume Builder** | [resume.craftisle.com](https://resume.craftisle.com) | Free resume generator |
| **Whiteboard** | [draw.craftisle.com](https://draw.craftisle.com) | Online whiteboard |
| **Image Prompt** | [imgprompt.craftisle.com](https://imgprompt.craftisle.com) | AI image prompt generator |
| **Games** | [game.craftisle.com](https://game.craftisle.com) | Casual HTML5 games |

---

## 🤝 Contributing

Contributions welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

[MIT License](LICENSE) — free to use, modify, and distribute.

---

## 🔗 Links

- 🌐 **Live Site**: [viewer.craftisle.com](https://viewer.craftisle.com)
- 💻 **GitHub**: [yysam123456-source/craftisle-viewer](https://github.com/yysam123456-source/craftisle-viewer)
- 🏠 **Main Site**: [www.craftisle.com](https://www.craftisle.com)
- 🐦 **Twitter**: [@CraftisleApp](https://twitter.com/CraftisleApp)

---

<p align="center">
  Built with ❤️ by the Craftisle team ·
  <a href="https://www.craftisle.com">Visit Craftisle</a>
</p>
