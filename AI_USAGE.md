# AI Usage Report

## AI Tools Used

During the implementation I used AI assistance as required by the test task.

Tools used:

* ChatGPT
* Cursor

AI was used as an assistant for planning, review, debugging, accessibility suggestions, documentation, and final pre-submission review. The final implementation decisions, Figma inspection, asset preparation, code adjustments, browser testing, GitHub setup, and Netlify deployment were completed manually.

## AI Models

* ChatGPT model: GPT-5.5 Thinking
* Cursor model: Composer 2.5 Fast

## Cursor Plan and Usage

Cursor was used on the Free plan.

Exact token and cost analytics were not available in my Cursor dashboard. I did not enable paid on-demand usage and did not add paid billing for this task.

Reported usage:

```txt
Cursor plan: Free
Cursor model: Composer 2.5 Fast
Tokens used: not available in dashboard
Paid cost: $0
```

## AI Prompts Used

Below are the main prompts and requests used during the implementation process.

### Project setup and architecture

```txt
I need to implement a React + TypeScript + SCSS test task for Cloud Forex Servers tariff cards based on a Figma design. Help me plan a modern project structure with components, pages, hooks, API layer, types, utils, and styles.
```

```txt
Review my project structure for a React + TypeScript + SCSS Vite project. Suggest improvements only, do not generate code and do not edit files.
```

### SCSS variables and design tokens

```txt
Create a modern SCSS variables file based on the known Figma colors, gradients, border colors, card background, button color, dropdown background, and border radius values. Use only values that are known from the design.
```

### Components

```txt
Help me implement a page component for the Cloud Forex Servers tariff block. It should contain the main title, data center selector, purchase period dropdown, and tariff cards area.
```

```txt
Help me implement a custom period dropdown instead of a native select. It should match the Figma design, work consistently across browsers, open smoothly, support click outside and Escape closing, and have accessible attributes.
```

```txt
Help me implement a tariff card component using React, TypeScript and SCSS Modules. The card should display tariff title, price, period, specs, terminal count, features, tags, best choice badge, buy button and cart button.
```

```txt
Help me add a loading skeleton for tariff cards while API data is loading. The skeleton should match the real card dimensions and layout.
```

```txt
Help me implement a tariff details dropdown opened by clicking the dots icon in the specs row. The dropdown should show CPU, Cores, RAM, NVMe and Speed, and match the Figma design.
```

### API integration

```txt
Help me connect the provided tariff API in a React + TypeScript project. The API endpoint is https://api.zomrodev.online/v1/api/proxy/ and the request body should include func, out, lang, page, page_size and datacenter.
```

```txt
Help me type the API response safely in TypeScript and avoid using any. The API returns more tariffs than needed, so I need to filter only Forex tariffs.
```

```txt
Help me create a mapper from the raw API tariff DTO to a UI TariffPlan model. The mapper should combine API data with local static content from the Figma design.
```

### Optimization and UX

```txt
Review whether useMemo, useCallback or memo are needed in this React page. Suggest only useful optimizations and avoid overengineering.
```

```txt
Review the current rendering behavior when switching data centers and purchase periods. Explain which components should re-render and which can be memoized.
```

### Debugging

```txt
Explain why the first API request appears as canceled in the browser Network tab during development.
```

```txt
Fix the TypeScript issue caused by using React KeyboardEvent with document.addEventListener.
```

```txt
Explain why aria-hidden warning appears when closing a custom dropdown and how to fix it properly.
```

```txt
Explain why CSS color/stroke does not change an SVG loaded through img and how to make the icon white on hover.
```

```txt
Help me debug why the Netlify deployment failed with build script returned non-zero exit code 2.
```

### Final pre-submission review

```txt
Review this React + TypeScript + SCSS test task before final submission. Check for obvious bugs, accessibility issues, unnecessary code, build/deploy risks, and whether the implementation satisfies the requirements. Do not edit files automatically; provide review comments only.
```

### Documentation and submission

```txt
Help me prepare README.md and AI_USAGE.md for the final test task submission. Include project description, tech stack, setup instructions, AI prompts, model information, Cursor usage and implementation flow.
```

## Implementation Flow

I started by reviewing the task requirements and the Figma design to understand the required UI states, data flow, and interactions. After that, I created a Vite project with React and TypeScript, installed SCSS support, and planned the project structure before implementing the UI.

The project structure was separated into API, components, constants, hooks, pages, styles, types, and utils. This helped keep the code organized and avoid mixing API logic, UI rendering, and data transformation in one place.

First, I created the basic page layout and SCSS variables based on the known Figma colors, gradients, borders, and border-radius values. Then I implemented the data center selector and the custom purchase period dropdown. I decided not to use a native select because the design required a custom dropdown state that should look the same across browsers.

After the base UI was ready, I connected the API and inspected the response structure in the browser. Since the API returns more tariffs than needed, I added filtering for Forex tariffs only. I also created TypeScript types for the API response and a mapper that converts raw API DTOs into a cleaner UI model.

API data is used for tariff IDs, order IDs, prices, currency, data center, and technical details. Design-specific marketing content, such as feature lists, tags, terminal counts, monitoring icon counts, and the “Best choice” badge, was stored locally because it was not fully available from the API response.

Then I implemented the tariff cards according to the Figma design: card layout, header, price, specs, terminal row, features, tags, buy button, cart button, hover states, real SVG icons, and the tariff details dropdown. I also added loading skeletons to improve the user experience while API data is loading.

After the main functionality was implemented, I reviewed rendering behavior and added memoization only where it made sense for presentational components. I also checked accessibility-related details such as button states, dropdown states, Escape closing, click outside handling, loading text, and error state.

Before submission, I ran a final AI-assisted review in Cursor. Based on that review, I fixed the dynamic price suffix, updated React keys for tariff cards, improved focus-visible behavior, finalized README and AI usage documentation, and verified that the project builds successfully.

Finally, I pushed the project to GitHub and deployed it to Netlify.

## What AI Helped With

AI helped with:

* Planning the project structure.
* Reviewing component decomposition.
* Creating and improving TypeScript interfaces.
* Designing the API mapping logic.
* Explaining React rendering behavior.
* Suggesting UX and accessibility improvements.
* Improving custom dropdown behavior.
* Debugging TypeScript issues.
* Debugging Netlify deployment issues.
* Reviewing the project before final submission.
* Preparing README and AI usage documentation.

## What Was Done Manually

Manually completed:

* Project setup in PhpStorm.
* Figma inspection.
* Extracting design values and assets.
* Creating files and folder structure.
* Writing and adjusting final code.
* Checking visual match with Figma.
* Testing interactions in the browser.
* Running build and lint commands.
* Creating the GitHub repository.
* Pushing the code to GitHub.
* Deploying the project to Netlify.
* Verifying the deployed version.

## Difficulties and Decisions

* The API returns more tariffs than required, so only Forex tariffs were filtered.
* Some visual card content from the Figma design was not available from the API, so it was stored in a local static configuration.
* The Figma design includes USA as a data center, while the example API request included only `12,17,19`. Data center `21` was added to support the USA option.
* The custom dropdown needed additional handling for click outside, Escape key, focus behavior, and accessibility.
* SVG icons loaded through `img` cannot be recolored with `stroke` or `color`, so hover styling was handled with CSS filter where needed.
* React StrictMode caused one development API request to appear as canceled, which is expected behavior in development mode.
* Netlify initially failed during deployment because a file change was not fully committed/fixed. After correcting the issue and pushing the update, deployment succeeded.
* The price suffix had to be derived from the selected purchase period instead of being hardcoded as `month`.

## Validation

Before submission, the following commands were successfully run:

```bash
npm run build
npm run lint
```

The final version was also deployed to Netlify and manually checked in the browser.
