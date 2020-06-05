/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from './views/AppPages/Index';
// import Profile from './views/examples/Profile.js';
// import Maps from './views/examples/Maps.js';
// import Tables from './views/examples/Tables.js';
import ScheduleService from './views/AppPages/ScheduleService';
import Profile from './views/AppPages/Profile';
import YourVehicle from './views/AppPages/YourVehicle';
import ServiceHistory from './views/AppPages/ServiceHistory';

var routes = [
  {
    path: '/yourvehicle',
    name: 'Your vehicle',
    icon: 'fas fa-car text-primary',
    component: YourVehicle,
    layout: '/admin'
  },
  {
    path: '/scheduleservice',
    name: 'Schedule a Service',
    icon: 'ni ni-calendar-grid-58 text-blue',
    component: ScheduleService,
    layout: '/admin'
  },
  {
    path: '/servicehistory',
    name: 'Service History',
    icon: 'fas fa-history text-orange',
    component: ServiceHistory,
    layout: '/admin'
  },
  {
    path: '/your-offer',
    name: 'Your Offers',
    icon: 'fas fa-coins text-yellow',
    component: Index,
    layout: '/admin'
  },
  {
    path: '/tables',
    name: 'Finance',
    icon: 'fas fa-money-bill text-red',
    component: Index,
    layout: '/admin'
  },
  {
    path: '/personal-info',
    name: 'Personal Info',
    icon: 'ni ni-single-02 text-yellow',
    component: Profile,
    layout: '/admin'
  },
  {
    path: '/security',
    name: 'Security',
    icon: 'fas fa-shield-alt text-primary',
    component: Index,
    layout: '/admin'
  },
  {
    path: '/loyalty-plus',
    name: 'Loyalty Plus',
    icon: 'fas fa-plus-circle text-pink',
    component: Index,
    layout: '/admin'
  },
  {
    path: '/recommended',
    name: 'Recommended For You',
    icon: 'fas fa-info-circle text-red',
    component: Index,
    layout: '/admin'
  }
];
export default routes;
