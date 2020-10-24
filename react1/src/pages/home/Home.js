import React from 'react';
import { withRedditApi } from 'hooks/useRedditApi';


class Home extends React.Component {
  state = {
    fetchData: null,
  }

  getRedditData = async (subreddit = '/r/react') => {
    const { fetchReddit } = this.props;
    const redditData = await fetchReddit(`${subreddit}/hot?limit=10`).then(res => res.json());
    console.log(redditData);
    
    const fetchTitle = await fetchReddit(`${subreddit}/about`).then(res => res.json());
    this.setState({ fetchData: redditData.data.children});
  }

  componentDidMount() {
    this.getRedditData();
  }

  // getDataSubreddits = async (subreddit) => {
  //   const { fetchReddit } = this.props;
  //   const dataSubreddits = await fetchReddit(`/subreddits/search?q=${subreddit}/limit=10`).then(res => res.json());
  //   this.setState({ renderData: dataSubreddits.data.children });
  // }

  render() {
    const {fetchData} = this.state;

    if (!fetchData) {
      return (
        <p>Loading...</p>
      );
    }
    else {
      return (
        <section>
         
        </section>
      );
    }
  }
}

export default withRedditApi(Home);
