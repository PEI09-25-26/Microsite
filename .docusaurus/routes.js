import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Microsite/Calendar/',
    component: ComponentCreator('/Microsite/Calendar/', '350'),
    exact: true
  },
  {
    path: '/Microsite/Calendar/calendar',
    component: ComponentCreator('/Microsite/Calendar/calendar', '356'),
    exact: true
  },
  {
    path: '/Microsite/docs',
    component: ComponentCreator('/Microsite/docs', '3ac'),
    routes: [
      {
        path: '/Microsite/docs',
        component: ComponentCreator('/Microsite/docs', 'e9f'),
        routes: [
          {
            path: '/Microsite/docs',
            component: ComponentCreator('/Microsite/docs', 'e5a'),
            routes: [
              {
                path: '/Microsite/docs/category/milestone-1---inception',
                component: ComponentCreator('/Microsite/docs/category/milestone-1---inception', '15e'),
                exact: true,
                sidebar: "Milestones_Sidebar"
              },
              {
                path: '/Microsite/docs/category/milestone-2---elaboration',
                component: ComponentCreator('/Microsite/docs/category/milestone-2---elaboration', '0b2'),
                exact: true,
                sidebar: "Milestones_Sidebar"
              },
              {
                path: '/Microsite/docs/category/milestone-3---construction',
                component: ComponentCreator('/Microsite/docs/category/milestone-3---construction', '45f'),
                exact: true,
                sidebar: "Milestones_Sidebar"
              },
              {
                path: '/Microsite/docs/category/milestone-4---transition',
                component: ComponentCreator('/Microsite/docs/category/milestone-4---transition', '788'),
                exact: true,
                sidebar: "Milestones_Sidebar"
              },
              {
                path: '/Microsite/docs/Milestones/',
                component: ComponentCreator('/Microsite/docs/Milestones/', '3a1'),
                exact: true,
                sidebar: "Milestones_Sidebar"
              },
              {
                path: '/Microsite/docs/Milestones/Milestone_1-Inception/Estudo_de_apps_semelhantes',
                component: ComponentCreator('/Microsite/docs/Milestones/Milestone_1-Inception/Estudo_de_apps_semelhantes', 'e01'),
                exact: true,
                sidebar: "Milestones_Sidebar"
              },
              {
                path: '/Microsite/docs/Milestones/Milestone_1-Inception/Estudo_frameworks_frontend',
                component: ComponentCreator('/Microsite/docs/Milestones/Milestone_1-Inception/Estudo_frameworks_frontend', 'd3c'),
                exact: true,
                sidebar: "Milestones_Sidebar"
              },
              {
                path: '/Microsite/docs/Milestones/Milestone_2-Elaboration/',
                component: ComponentCreator('/Microsite/docs/Milestones/Milestone_2-Elaboration/', 'fc9'),
                exact: true,
                sidebar: "Milestones_Sidebar"
              },
              {
                path: '/Microsite/docs/Milestones/Milestone_3-Construction/',
                component: ComponentCreator('/Microsite/docs/Milestones/Milestone_3-Construction/', '6fa'),
                exact: true,
                sidebar: "Milestones_Sidebar"
              },
              {
                path: '/Microsite/docs/Milestones/Milestone_4-Transition/deploy-your-site',
                component: ComponentCreator('/Microsite/docs/Milestones/Milestone_4-Transition/deploy-your-site', '164'),
                exact: true,
                sidebar: "Milestones_Sidebar"
              },
              {
                path: '/Microsite/docs/Weeks/',
                component: ComponentCreator('/Microsite/docs/Weeks/', '512'),
                exact: true,
                sidebar: "Weeks_Sidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/Microsite/',
    component: ComponentCreator('/Microsite/', 'a4f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
