import React, { Component } from 'react';
import axiosInst from './index';
import Layout from '../components/Layout';
import Loader from '../components/CustomCompent/Loader';

export class API extends Component {

  constructor(props: Props) {
    super(props);
    this.state = {
      loding: true,
    }
  }

  componentDidMount() {
    localStorage.clear();
    if (!(JSON.parse(localStorage.getItem('albums')))) {
      this.alubumAPI();
    } else {
      this.setState({
        albumsAPISuccess: true
      })
    }
    if (!(JSON.parse(localStorage.getItem('SongList')))) {
      this.songsAPI();
    } else {
      this.setState({
        photoAPISuccess: true
      })
    }
  }

  alubumAPI = async () => {
    try {
      this.setState({
        loding: true
      })
      await axiosInst.get('/albums').then((res) => {
        localStorage.setItem('albums', JSON.stringify(res.data));
      });
    } catch (err) {
      console.log(err);
    } finally {
      this.setState({
        loding: false
      })
    }
  };

  songsAPI = async () => {
    try {
      await axiosInst.get('/photos').then((res) => {
        this.setState({
          allSongsData: res.data
        })
        localStorage.setItem("SongList", JSON.stringify(res.data));
      });
    } catch (err) {
      console.log(err);
    } finally {
      this.setState({
        loding: false
      })
    }
  };

  render() {
    return (
      <>
        {(JSON.parse(localStorage.getItem('albums')) && JSON.parse(localStorage.getItem('SongList'))) ? <Layout /> : <Loader />}
      </>
    )
  }
}

export default API
