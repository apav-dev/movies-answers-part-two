# Building Modern Search with Yext - Part 2

This repo contains the final version of the project described in [Building Modern Search with Yext: Part 2 - Expanding Search Capabilities](https://dev.to/yext/building-modern-search-with-yext-part-2-expanding-search-capabilities-3clf) 

The ```main``` branch contains the completed project while the ```webinar``` branch contains the code used at the beginning of the [Getting Started with Answers for Developers](https://www.youtube.com/watch?v=HLWLbJICgiI) webinar from 2/24/2022.

### Cloning this Project

If you want to clone this project you will need a Yext account with the same Knowledge Graph and Answers Experience used in the blog and webinar. Follow the steps below to copy the account template into your Yext account.

#### 1. Apply the Account Template
```bash
yext init 
yext resources apply account-template/
```
NOTE: use ```yext init -u sandbox``` if using a playground/sandbox account.

These commands require the Yext CLI, which you can install with:
```bash
brew install yext
```

#### 2. Add your Answers Experience Information
Once you have copied the source account, replace the ```apiKey``` in ```answersHeadlessConfig.ts``` with your Answers API Key. 
NOTE: If you are using a Yext sandbox account rather than a sandbox account, add the ```endpoints``` field with the sandbox endpoints.

```jsx
// answersHeadlessConfig.ts
import { AnswersHeadlessProvider } from '@yext/answers-headless-react';

type HeadlessProviderProps = Parameters<typeof AnswersHeadlessProvider>[0];

export const answersHeadlessConfig: HeadlessProviderProps = {
  apiKey: 'YOUR_API_KEY',
  experienceKey: 'movies-search',
  locale: 'en',
  sessionTrackingEnabled: true,
  endpoints: {
    universalSearch:
      "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/query?someparam=blah",
    verticalSearch:
      "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/vertical/query",
    questionSubmission:
      "https://liveapi-sandbox.yext.com/v2/accounts/me/createQuestion",
    status: "https://answersstatus.pagescdn.com",
    universalAutocomplete:
      "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/autocomplete",
    verticalAutocomplete:
      "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/vertical/autocomplete",
    filterSearch:
      "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/filtersearch",
  },
};
```

#### 3. Run the app
- Install the dependencies by running `npm i`
- To run the app in development mode, run `npm start`

