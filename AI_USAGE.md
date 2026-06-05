# AI Usage Report

## AI Tools Used

During the implementation I used AI assistance as required by the test task.

Tools used:

* ChatGPT
* Cursor

## AI Models

* ChatGPT model: GPT-5.5 Thinking
* Cursor model: Composer 2.5 Fast

If Cursor was using auto model selection during some interactions, this should be considered as Cursor automatic model selection.

## Cursor Plan and Usage

Cursor plan: Free

Cursor usage analytics:

```txt
Tokens used: not available / to be filled from Cursor dashboard if available
Estimated cost: $0
```

I used Cursor on the free plan. If exact token and cost analytics are available in the Cursor dashboard, they should be added here before final submission. If not available, the final submitted value remains:

```txt
Exact token/cost analytics were not available in my Cursor dashboard.
Cursor plan: Free
Estimated cost: $0
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

### Documentation and submission

```txt
Help me prepare README.md and AI_USAGE.md for the final test task submission. Include project description, tech stack, setup instructions, AI prompts, model information, Cursor usage and implementation flow.
```

## Implementation Flow

1. Created the project using Vite with the React + TypeScript template.
2. Installed SCSS support.
3. Created the initial project structure:

    * API layer
    * components
    * constants
    * hooks
    * pages
    * styles
    * types
    * utils
4. Added SCSS variables based on the Figma design.
5. Implemented the main Forex Server page layout.
6. Implemented the data center selector.
7. Implemented a custom purchase period dropdown.
8. Connected the API and inspected the response structure.
9. Added TypeScript types for the API response.
10. Filtered only Forex tariffs.
11. Created a mapper from API DTO to UI tariff model.
12. Added local static content for design-specific tariff information that was not available from the API.
13. Implemented tariff cards according to the Figma design.
14. Added real icons from the design assets.
15. Added loading skeletons for better UX.
16. Added tariff details dropdown.
17. Added memoization for presentational components where it made sense.
18. Tested data center switching and dynamic price updates.
19. Ran production build and lint checks.
20. Pushed the project to GitHub.

## What AI Helped With

AI helped with:

* Planning the project structure.
* Suggesting component decomposition.
* Creating TypeScript interfaces.
* Designing API mapping logic.
* Explaining React rendering behavior.
* Improving custom dropdown accessibility.
* Suggesting SCSS structure.
* Debugging TypeScript and accessibility issues.
* Preparing documentation.

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
* Pushing the final code.

## Difficulties and Decisions

* The API returns more tariffs than required, so only Forex tariffs were filtered.
* Some visual card content from the Figma design was not available from the API, so it was stored in a local static configuration.
* The Figma design includes USA as a data center, while the example API request included only `12,17,19`. Data center `21` was added to support the USA option.
* The custom dropdown needed additional handling for click outside, Escape key, focus behavior, and accessibility warnings.
* SVG icons loaded through `img` cannot be recolored with `stroke` or `color`, so hover styling was handled with CSS filter where needed.
* React StrictMode caused one development API request to appear as canceled, which is expected behavior in development mode.

## Validation

Before submission, the following commands were successfully run:

```bash
npm run build
npm run lint
```
