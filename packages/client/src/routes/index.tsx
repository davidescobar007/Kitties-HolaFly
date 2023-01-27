import {
  JSXElementConstructor,
  lazy,
  LazyExoticComponent,
  ReactElement,
  Suspense,
} from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Loader from '../components/loader';

type LazyElement = LazyExoticComponent<
  () => ReactElement<any, string | JSXElementConstructor<any>>
>;

const Home: LazyElement = lazy(() => import('../pages/home'));
const CatProfile: LazyElement = lazy(() => import('../pages/cat'));

export default function Router(): ReactElement {
  return (
    <main className="bg-slate-100 px-5 pt-5">
      <Routes>
        <Route element={<Navigate to="/cats" />} path="/" />
        <Route
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          }
          path="/cats"
        />
        <Route
          element={
            <Suspense fallback={<Loader />}>
              <CatProfile />
            </Suspense>
          }
          path="/cat/profile/:id"
        />
      </Routes>
    </main>
  );
}
