import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer XYBx7i9EfMzdNNY5a2FlrdKvybV5lu55EEVcOXqhtd1FnApGthmm_QEtURjYAwDlcVl5o8MJKnyu2VWkRUxHp_x8AZEixbseA9hH_doKwarOBaMp9tJ32FWdgkLqY3Yx'
  }
})