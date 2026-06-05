# Cloud Forex Servers

React + TypeScript implementation of the Cloud Forex Servers tariff block based on the provided Figma design.

The project includes tariff cards, data center switching, purchase period switching, dynamic price updates, API integration, Forex tariff filtering, responsive SCSS styling, loading skeletons, and custom dropdown interactions.

## Demo

* GitHub repository: https://github.com/YuriiDzoma/cloud-forex-servers
* Deploy: https://cloud-forex-servers.netlify.app*

## Tech Stackgit add README.md AI_USAGE.md

* React
* TypeScript
* SCSS / SCSS Modules
* Vite
* ESLint

## Features

* Fetches tariff data from the provided API.
* Filters only Forex tariffs from the API response.
* Supports data center switching.
* Updates displayed tariffs based on the selected data center.
* Supports purchase period switching.
* Dynamically updates prices based on the selected period.
* Buy button contains the unique tariff order ID in the URL.
* Custom period dropdown matching the Figma design.
* Custom tariff details dropdown.
* Loading skeletons for better UX.
* Memoized presentational components where appropriate.
* Accessible states for dropdowns, buttons, loading and error states.

## API

Tariffs are loaded from:

```txt
https://api.zomrodev.online/v1/api/proxy/
```

Request body:

```txt
func: v2.instances.order.pricelist
out: json
lang: en
page: 1
page_size: 999
datacenter: 12,17,19,21
```

The original task example included data centers `12,17,19`. The Figma design also contains USA, so data center `21` was added to support the USA option.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the project locally:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run lint:

```bash
npm run lint
```

## Project Structure

```txt
src/
  api/                  API requests
  assets/               Icons and images
  components/           UI components
  constants/            Data centers, periods, static tariff content
  hooks/                Custom React hooks
  pages/                Page-level components
  styles/               Global SCSS styles and variables
  types/                TypeScript types
  utils/                Data mapping, filtering and formatting helpers
```

## Notes

Some data is received from the API: tariff ID, order ID, title, data center, prices, currency and technical details.

Some marketing content is stored locally in configuration because it is part of the Figma design and is not fully provided by the API: feature lists, tags, terminal counts, best choice badge, and UI-specific text.
