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
