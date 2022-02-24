# Building Modern Search with Yext - Part 2

This repo is used for the Coding Clinic: Getting Started With Answers for Developers webinar on 2/24/22. The ```main``` branch contains the completed project while the ```webinar``` branch contains the code used at the beginning of the webinar.

### Using this Repo
To utilze this code, you would need to be sure to build the backend described in the guide. If you have copied the configuration, replace the ```apiKey``` in ```answersHeadlessConfig.ts``` with your Answers API Key. 
NOTE: If you are using a Yext production account rather than a sandbox account, remove the ```endpoints``` field.

```jsx
// answersHeadlessConfig.ts
import { AnswersHeadlessProvider } from '@yext/answers-headless-react';

type HeadlessProviderProps = Parameters<typeof AnswersHeadlessProvider>[0];

export const answersHeadlessConfig: HeadlessProviderProps = {
  apiKey: 'cb8b942209662817e117b4d037e85f6c',
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

### Run the app
- Install the dependencies by running `npm i`
- To run the app in development mode, run `npm start`

