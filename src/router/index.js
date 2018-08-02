import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'

import Movie from '@/page/movie/index'
import MovieDetail from '@/page/movie/detail'
import MovieVideo from '@/page/movie/detail/video'
import MovieArtist from '@/page/movie/detail/artist'
import MovieAlbum from '@/page/movie/detail/album'
import MovieSeat from '@/page/movie/seat'
import MovieCity from '@/page/movie/city'
import Cinema from '@/page/cinema/index'
import CinemaDetail from '@/page/cinema/detail'
import CinemaActivity from '@/page/cinema/activity'
import CinemaIntro from '@/page/cinema/intro'
import User from '@/page/user/index'
import UserTicket from '@/page/user/ticket'


Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/movie',
      component: Movie
    },
    {
      path: '/movie/city',
      component: MovieCity
    },
    {
      path: '/movie/detail',
      component: MovieDetail
    },
    {
      path: '/movie/detail/video',
      component: MovieVideo
    },
    {
      path: '/movie/detail/artist',
      component: MovieArtist
    },
    {
      path: '/movie/detail/album',
      component: MovieAlbum
    },
    {
      path: '/movie/seat',
      component: MovieSeat
    },
    {
      path: '/cinema',
      component: Cinema
    },
    {
      path: '/cinema/detail',
      component: CinemaDetail
    },
    {
      path: '/cinema/activity',
      component: CinemaActivity
    },
    {
      path: '/cinema/intro',
      component: CinemaIntro
    },
    {
      path: '/user',
      component: User
    },
    {
      path: '/user/ticket',
      component: UserTicket
    }
  ]
})
