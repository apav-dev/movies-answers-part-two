import PageRouter from './PageRouter';
import StandardLayout from './pages/StandardLayout';
import { AnswersHeadlessProvider } from '@yext/answers-headless-react';
import { answersHeadlessConfig } from './config/answersHeadlessConfig';
import { routeConfig } from './config/routeConfig';

export default function App() {
  return (
    <AnswersHeadlessProvider {...answersHeadlessConfig}>
      <div className='flex py-4 px-6'>
        <div className='w-full'>
          <PageRouter
            Layout={StandardLayout}
            routes={routeConfig}
          />
        </div>
      </div>
    </AnswersHeadlessProvider>
  );
}
