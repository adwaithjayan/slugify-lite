<h1 align="center">🔤 slugify-lite</h1>

<p align="center">
  A minimal and dependency-free utility to convert strings into clean, URL-safe slugs.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/slugify-lite">
    <img src="https://img.shields.io/npm/v/slugify-lite?color=blue" />
  </a>
  <a href="./LICENSE">
    <img src="https://img.shields.io/npm/l/slugify-lite" />
  </a>
</p>

---

## 🚀 Installation

```bash
npm install slugify-lite
```

or with Bun:

```bash
bun add slugify-lite
```

## 🛠️ Usage

```bash
import { slugifyLite } from 'slugify-lite';

slugifyLite("Hello World!");
// → "hello-world"

slugifyLite(" Clean --- Slug Now ");
// → "clean-slug-now"

```

## 📄 License

MIT © aj-boss
