import React from 'react';
import { withRedditApi } from 'hooks/useRedditApi';
import {Provider} from 'components/context';
import Header from 'components/header';
import Community from 'components/community';
import List from 'components/list';

class Home extends React.Component {

  fetchSubreddits = async (subreddit) => {
    console.log(subreddit);
    if(subreddit === '') {
      this.setState({ subreddits: null });
    } else {
      const { fetchReddit } = this.props;
      const dataSubreddits = await fetchReddit(`/subreddits/search?limit=10&q=${subreddit}`).then(res => res.json());
      this.setState({ subreddits: dataSubreddits.data.children });
    }
  }

  getRedditData = async (subreddit = 'r/react') => {
    const { fetchReddit } = this.props;
    const redditData = await fetchReddit(`/${subreddit}/hot?limit=10`).then(res => res.json());
    
    const communityTitle = await fetchReddit(`/${subreddit}/about`).then(res => res.json());

    const data = redditData.data.children;
    const community = communityTitle.data;
    this.setState({ fetchData: data, community: community, subreddits: null});
  }

  state = {
    fetchData: null,
    community: null,
    subreddits: null,
    fetchSubreddits: this.fetchSubreddits,
    getRedditData: this.getRedditData,
  }

  componentDidMount() {
    this.getRedditData();
  }

  render() {
    const {fetchData} = this.state;
    console.log(this.state);

    if (!fetchData) {
      return (
        <p>Loading...</p>
      );
    }
    else {
      return (
        <section>
         <Provider value={this.state}>
          <Header/>
          <Community/>
          <List/>
         </Provider>
        </section>
      );
    }
  }
}

export default withRedditApi(Home);
