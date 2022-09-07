# Minimal blog with tags

<img width="990" alt="Astro minimal blog with tags" src="https://user-images.githubusercontent.com/17107309/188873735-975a2012-2a59-43a5-b96b-688903600f5d.png">

Features:

- Minimal styling
- Tailwind integrated
- Sitemap support
- Robots.txt support
- RSS Feed support
- Markdown support
- Webmanifest for PWA support
- Compress support
- Icons support
- Tags for posts
- 404 page integrated
- TypeScript support
- Dark mode support

Used astro integrations:

- [Astro mdx](https://docs.astro.build/en/guides/integrations-guide/mdx/)
- [Astro sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
- [Astro tailwind](https://docs.astro.build/en/guides/integrations-guide/tailwind/)
- [Astro compress](https://github.com/Playform/astro-compress)
- [Astro robots txt](https://github.com/alextim/astro-lib/tree/main/packages/astro-robots-txt)
- [Astro icon](https://github.com/natemoo-re/astro-icon)

## Project Structure

Inside this project you can find the following folder and file structure

```
├── public/
├── src/
│   ├── components/
│   ├── layouts/
│   └── pages/
│   └── styles/
│   └── types/
│   └── utils/
├── astro.config.mjs
├── README.md
├── package.json
├── tailwind.config.cjs
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

Any static assets, like images, can be placed in the `public/` directory.

## Commands

All commands need to be run from the root of the project. The project is setup with `yarn`. You can as well set it up using `npm`.

```bash
# install dependencies
$ yarn
# start local dev server
$ yarn dev
# build production site
$ yarn build
# preview build locally
$ yarn preview
```

## Adding new tags

For adding new tags to posts you need to add the new tag in the array to the post located in `src/pages/blog`. For example `tags: ["general", "tech", "nature", "new-tag"]`.

After adding this new tag you need to add this tag into the `[tag].astro` file that the dynamic route is created and when building the site. Here you need to add the new tag as a param in the `getStaticPaths` method.

```javascript
export function getStaticPaths() {
  return [
    { params: { tag: "general" } },
    { params: { tag: "tech" } },
    { params: { tag: "food" } },
    { params: { tag: "nature" } },
    { params: { tag: "astro" } },
    // added this new-tag
    { params: { tag: "new-tag" } },
  ];
}
```

The tags will be read out of all posts dynamically using the `findTags` method in `src/utils/post.utils`.

## Credit

This theme is developed based on the [Astro blog theme](https://github.com/withastro/astro/tree/main/examples/blog).
