/*!

=========================================================
* Argon Dashboard React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import UserList from "views/examples/UserList";
import UserHarcamaGeçmiş from "views/examples/UserHarcamaGeçmiş";
import UserİzinGeçmiş from "views/examples/UserİzinGeçmiş";
import addHarcama from "views/examples/addHarcama.js";
import addİzin from "views/examples/addİzin";


var routes = [
  {
    path: "/index",
    name: "Ana Sayfa",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },

  {
    path: "/user-profile",
    name: "Kullanıcı Kaydet",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin"
  },
  {
    path: "/list-profile",
    name: "Kullanıcıları Lıstele",
    icon: "ni ni-single-02 box-2",
    component: UserList,
    layout: "/admin"
  },
  {
    path: "/user-harcama",
    name: "Harcama Kaydet",
    icon: "fa fa-user-circle" ,
    component: addHarcama,
    layout: "/admin"
  },
  {
    path: "/gecmis-islemlerim",
    name: " Harcama Gecmişi Islemlerim",
    icon: "ni ni-calendar-grid-58",
    component:UserHarcamaGeçmiş,
    layout: "/admin"
  },
  {
    path: "/user-izi",
    name: "İzin Kaydet",
    icon: "fa fa-user-circle" ,
    component: addİzin,
    layout: "/admin"
  },
  {
    path: "/izin-gecmis-islemlerim",
    name: "İzin Gecmişi Islemlerim",
    icon: "ni ni-calendar-grid-58",
    component:UserİzinGeçmiş,
    layout: "/admin"
  },
 

 
];
export default routes;
