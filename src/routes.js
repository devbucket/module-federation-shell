import React, { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('./views/HomePage'));
const ProfilePage = lazy(() => import('profile/ProfilePage'));

export function HomeRoute() {
  return (
    <Suspense fallback={null}>
      <HomePage />
    </Suspense>
  );
}

export function ProfileRoute() {
  return (
    <Suspense fallback={null}>
      <ProfilePage />
    </Suspense>
  );
}
