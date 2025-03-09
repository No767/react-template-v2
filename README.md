# react-template-v2

Performance-oriented React template for MLH Hackathons

## Prerequisites

You will need access or have installed [Node.js](https://nodejs.org) on your machine. It is strongly recommended to use Node v22 or higher for this template.

> [!TIP]
> In order to ease management of Node.js versions, it is recommended to use tools such as [fnm](https://github.com/Schniz/fnm) or [Volta](https://volta.sh/). Choose one and read their respective documentation to get started.

## Setup

### Step 1 - Set up environment variables

In order to allow for the usage of our custom values, such as secrets during development, we need to supply a `.env.local` environment file. Note the extension `*.local`, as Vite uses this to determine whether it should be ignored by Git or not. Details surrounding this mechanism can be found here: <https://vite.dev/guide/env-and-mode#env-files>.

Luckily, we already have a template that we can use. Run the following below:

```bash
cp .env.example .env.local
```

### Step 2 - Modify as appropriate

The `.env.example` template contains one environment variable that can be removed once the proper values are supplied. Modify the newly created `.env.local` file as necessary.

Note that Vite will not load any environment variables that are not prefixed with`VITE_`. This is to prevent leakage of secrets, which more information can be found [here](https://vite.dev/guide/env-and-mode#env-variables).

### Step 3 - Install the dependencies

The dependencies that will be used can be installed as such:

```bash
npm install --save-dev --save-exact
```

### Step 4 - Run the development server

Vite allows us to run a development server in order to test, and reiterate on our code. This server also allows for [Hot Module Reload (HMR)](https://webpack.js.org/concepts/hot-module-replacement/) to work. In short, if we save a file when we are developing, then the changes will be reflected on the development server as well.

To run such a feature, use the following below:

```bash
npm run dev
```

## Details

This template uses several components that will be explained below.

- [shadcn/ui](#shadcnui)
- [Tanstack Query](#tanstack-query)

### shadcn/ui

shadcn/ui isn't another UI component library, but rather it's the library to build UI components. shadcn/ui explains the rationale perfectly:

> Often, you end up wrapping library components, writing workarounds to override styles, or mixing components from different libraries with incompatible APIs.

In short, combined with the deep coupling between `shadcn/ui` and TailwindCSS, development can be done much faster than before. We don't need to put more resources into shimming library components, but directly integrate them into our app.

> [!TIP]
> If you want to read more, the information can be found here: <https://ui.shadcn.com/docs>

### Tanstack Query

One of the main struggles that happens a lot (personally from QWER Hacks and AthenaHacks), is that the frontend does not get coupled with the backend in time. It's critical that is the case, so this template integrates [TanStack Query](https://tanstack.com/query/latest), replacing both [Axios](https://axios-http.com/) and [Redux](https://redux.js.org/).

By learning one library designed to handle the features that is required, such as state management, time and capital spent on attempting to understand how to implement the confusing mess of both Axios and Redux combined. Also, time is saved by not asking AI for spaghetti code and realizing that it doesn't work.

### Resources

Some of these resources linked below might be helpful during hackathons.

- [Mesh Graident](https://meshgradient.com/)
- [Haikei](https://haikei.app)
- [RealFaviconGenerator](https://realfavicongenerator.net/)

### Inspiration

This template is inspired by a lot of current and past projects, including [ACM @ UC Merced's Website](https://github.com/UCMercedACM/Chapter-Website), past hackathons projects (namely [Soteria](https://devpost.com/software/soteria-i1on52)), and many others.

### License

[MIT License](./LICENSE)
