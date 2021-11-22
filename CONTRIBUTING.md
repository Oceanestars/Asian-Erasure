# Contributing to Asian Erasure

:computer: Thank you for taking the time to contribute!:+1:

The following is a set of guidelines for contributing to Asian Erasure. Feel free to propose changes to this document in a pull request.

## Table Of Contents

- [Reporting Bugs](#reporting-bugs)
- [Suggesting Enhancements](#suggesting-enhancements)
- [Your First Code Contribution](#your-first-code-contribution)
- [Pull Requests](#pull-requests)
- [Organization](#organization)
- [Available Scripts](#available-scripts)

### Reporting Bugs

Before creating bug reports, please check [this list](#before-submitting-a-bug-report) as you might find out that you don't need to create one. When you are creating a bug report, please [include as many details as possible](#how-do-i-submit-a-good-bug-report).

> **Note:** If you find a **Closed** issue that seems like it is the same thing that you're experiencing, open a new issue and include a link to the original issue in the body of your new one.

#### Before Submitting A Bug Report

- **Check the issue isn't already filled:** [https://github.com/issues?utf8=%E2%9C%93&q=is%3Aissue+user%3Aatom](https://github.com/issues?utf8=%E2%9C%93&q=is%3Aissue+user%3AAsian-Erasure)

#### How Do I Submit A (Good) Bug Report?

Bugs are tracked as [GitHub issues](https://guides.github.com/features/issues/). Create an issue and provide the following information.

Explain the problem and include additional details to help maintainers reproduce the problem:

- **Use a clear and descriptive title** for the issue to identify the problem.
- **Describe the exact steps which reproduce the problem** in as many details as possible. When listing steps, **don't just say what you did, but explain how you did it**. For example, if you are checking for accessibility, what tool did you user or what keyboard key did you use?
- **Provide specific examples to demonstrate the steps**. Include links to files or GitHub projects, or copy/pasteable snippets, which you use in those examples. If you're providing snippets in the issue, use [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
- **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior.
- **Explain which behavior you expected to see instead and why.**
- **Include screenshots and animated GIFs** which show you following the described steps and clearly demonstrate the problem. If you use the keyboard while following the steps, **record the GIF with the [Keybinding Resolver](https://github.com/atom/keybinding-resolver) shown**. You can use [this tool](https://www.cockos.com/licecap/) to record GIFs on macOS and Windows, and [this tool](https://github.com/colinkeenan/silentcast) or [this tool](https://github.com/GNOME/byzanz) on Linux.

### Suggesting Enhancements

Before creating enhancement suggestions, please check this isn't a pending enhancements that already exist. When you are creating an enhancement suggestion, please [include as many details as possible](#how-do-i-submit-a-good-enhancement-suggestion).

#### How Do I Submit A (Good) Enhancement Suggestion?

Enhancement suggestions are tracked as [GitHub issues](https://guides.github.com/features/issues/). Create an issue on that repository and provide the following information:

- **Use a clear and descriptive title** for the issue to identify the suggestion.
- **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
- **Provide specific examples to demonstrate the steps**. Include copy/pasteable snippets which you use in those examples, as [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
- **Describe the current behavior** and **explain which behavior you expected to see instead** and why.
- **Include screenshots and animated GIFs** which help you demonstrate the steps or point out the part of Asian Erasure which the suggestion is related to. You can use [this tool](https://www.cockos.com/licecap/) to record GIFs on macOS and Windows, and [this tool](https://github.com/colinkeenan/silentcast) or [this tool](https://github.com/GNOME/byzanz) on Linux.
- **Explain why this enhancement would be useful** to most users.
- **Specify the name and version of the OS you're using.**

### Your First Code Contribution

Unsure where to begin contributing to Asian Erasure? You can start by looking through these `beginner` and `help-wanted` issues:

- [Beginner issues][beginner] - issues which should only require a few lines of code, and a test or two.
- [Help wanted issues][help-wanted] - issues which should be a bit more involved than `beginner` issues.

Both issue lists are sorted by total number of comments. While not perfect, number of comments is a reasonable proxy for impact a given change will have.

### Local development

First thing first, Fork Asian Erasure.

#### Running the App

```bash
git clone https://yourforkedversion.git
npm ci
npm run dev
```

Make sure to do `git pull` periodically!

### Pull Requests

The process described here has several goals:

- Maintain Asian Erasure's quality
- Fix problems that are important to users
- Engage the community in working toward the best possible website
- Enable a sustainable system for Asian Erasure's maintainers to review contributions

Please follow these steps to have your contribution considered by the maintainers:

1. Follow all instructions in [the template](#pull-request-template)
2. Follow the [naming convention](#naming-convention)
3. After you submit your pull request, verify that all [status checks](https://help.github.com/articles/about-status-checks/) are passing <details><summary>What if the status checks are failing?</summary>If a status check is failing, and you believe that the failure is unrelated to your change, please leave a comment on the pull request explaining why you believe the failure is unrelated. A maintainer will re-run the status check for you. If we conclude that the failure was a false positive, then we will open an issue to track that problem with our status check suite.</details>

While the prerequisites above must be satisfied prior to having your pull request reviewed, the reviewer(s) may ask you to complete additional design work, tests, or other changes before your pull request can be ultimately accepted.

#### Pull Request Template

##### PR Type

What kind of change does this PR introduce?

```
[ ] Bugfix
[ ] Feature
[ ] Code style update (formatting, local variables)
[ ] Refactoring (no functional changes, no api changes)
[ ] Build related changes
[ ] CI related changes
[ ] Documentation content changes
[ ] Tests
[ ] Other
```

##### What's new?

-

##### Screenshots

N/A

## Organization

### Folder structure

```
--- components/
    --- These a our react components that our pages uses
--- pages/
    --- Each of our pages is like our nav item in the nav bar
--- public/
    --- Assets
        - Currently old asset folder before conversion to Next.JS
    --- Images
    --- Static
        - Data
--- styles/
    - We have CSS module and SASS is installed so if you'd like to do sass just change the css file to end with scss (like the global file)
    - The underscore means it's a partial file (SASS), if you have css file being repeated across files, please use a partials file
    - If you are new to SASS please read [the sass guide](https://sass-lang.com/guide)


```

### Naming Convention

- Filename: Lower case
  `navbar.js`
- Component Name: PascalCase
  ```
  function Navbar(props) {
      return (
          <ul>
              <li>Home</li>
              <li>About Us</li>
          </ul>
      );
  }
  ```
- Reference Naming: PascalCase
  ```
  import Navbar from './navbar';
  ```
- Props: camelCase
  `<Navbar selectedTab="Home" />`
  Additionally, using prettier setting to auto format files.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

next build(aka npn run build) creates an optimized production build of your application. The output displays information about each route.

Size – The number of assets downloaded when navigating to the page client-side. The size for each route only includes its dependencies.
First Load JS – The number of assets downloaded when visiting the page from the server. The amount of JS shared by all is shown as a separate metric.

### `npm run start`

next start(npm run start will do the build and start command) starts the application in production mode. The application should be compiled with next build first.

The application will start at http://localhost:3000 by default. The default port can be changed with -p, like so:

`npx next start -p 4000`

*This document was built off the Atom contributing file
