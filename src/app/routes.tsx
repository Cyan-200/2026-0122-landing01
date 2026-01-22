import { RouteObject } from 'react-router-dom'
import { RootLayout } from './RootLayout'
import HomePage from '@/pages/home'
import CollectionPage from '@/pages/collection'
import TechnologyPage from '@/pages/technology'
import AboutPage from '@/pages/about'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'collection', element: <CollectionPage /> },
      { path: 'technology', element: <TechnologyPage /> },
      { path: 'about', element: <AboutPage /> },
    ],
  },
]
