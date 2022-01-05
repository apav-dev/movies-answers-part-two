# Building Modern Search with Yext - Part 1

This repo is referenced by this guide that explains how to quickly build a Search Experience with Yext. It is the React frontend for a custom Answers backend. The project
was cloned from the [Yext React Site Search Starter](https://github.com/yext/react-site-search-starter). Check out its README to learn more.

### Using this Repo
To utilze this code, you would need to be sure to build the backend described in the guide. If you have copied the configuration, replace the ```apiKey``` in ```answersHeadlessConfig.ts``` with your Answers API Key. 
It's reccomended to store your API Key in a ```.env``` file that is added to ```.gitignore``` to avoid publishing your API Key to Github. 
NOTE: If you are using a Yext production account rather than a sandbox account, remove the ```endpoints``` field.

```jsx
// answersHeadlessConfig.ts
import { AnswersHeadlessProvider } from '@yext/answers-headless-react';

type HeadlessProviderProps = Parameters<typeof AnswersHeadlessProvider>[0];

export const answersHeadlessConfig: HeadlessProviderProps = {
  apiKey: process.env.REACT_APP_ANSWERS_API_KEY as string,
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

