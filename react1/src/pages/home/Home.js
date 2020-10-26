import React from 'react';
import { withRedditApi } from 'hooks/useRedditApi';
import {Provider} from 'components/context';
import Header from 'components/header';
import Community from 'components/community';
import List from 'components/list';
import Loader from 'components/loader';

class Home extends React.Component {

  setInputValue = (inputValue) => {
    this.setState({inputValue: inputValue});
  }

  setPostUrl = (url) => {
    this.setState({postUrl: url});
  }

  state = {
    posts: null,
    postUrl: null,
    community: null,
    subreddits: null,
    inputValue: null,
    setInputValue: this.setInputValue,
    setPostUrl: this.setPostUrl,
  }

  componentDidMount() {
    this.fetchPosts();
  }

  componentDidUpdate(prevProps, prevState) {
    const {inputValue, postUrl} = this.state;
    if(prevState.inputValue !== inputValue) {
      this.fetchSubreddits(inputValue);
    }
    if(prevState.postUrl !== postUrl) {
      this.fetchPosts(postUrl);
    }
  }

  fetchPosts = async (subreddit = 'r/react') => {
    const { fetchReddit } = this.props;
    const redditData = await fetchReddit(`/${subreddit}/hot?limit=10`).then(res => res.json());
    
    const communityTitle = await fetchReddit(`/${subreddit}/about`).then(res => res.json());

    const data = redditData.data.children;
    const community = communityTitle.data;
    this.setState({ posts: data, community: community, subreddits: null});
  }

  fetchSubreddits = async (subreddit) => {
    if(subreddit === '') {
      this.setState({ subreddits: null });
    } else {
      const { fetchReddit } = this.props;
      const dataSubreddits = await fetchReddit(`/subreddits/search?limit=10&q=${subreddit}`).then(res => res.json());
      this.setState({ subreddits: dataSubreddits.data.children });
    }
  }

  render() {
    const {posts, community, subreddits} = this.state;

    if (!posts && !community && !subreddits) return <Loader/>;

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

export default withRedditApi(Home);
