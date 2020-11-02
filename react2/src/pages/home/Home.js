import React, {useState, useEffect} from 'react';
import { withRedditApi } from 'hooks/useRedditApi';
import Header from 'components/header';
import Community from 'components/community';
import List from 'components/list';
import Loader from 'components/loader';
import ContextApp from 'components/context';
import {Switch, Route, useHistory} from 'react-router-dom';
import ErrorResult from 'components/errorResult';

const Home = ({ fetchReddit }) => {
  const history = useHistory();

  const [posts, setPosts] = useState(null);
  const [postUrl, setPostUrl] = useState('r/react');
  const [community, setCommunity] = useState(null);
  const [subreddits, setSubreddits] = useState(null);
  const [inputValue, setInputValue] = useState(null);

  useEffect(() => {
    fetchPosts(postUrl);
  }, [postUrl]);
 
  useEffect(() => {
    fetchSubreddits();
  }, [inputValue]);

  const fetchPosts = async (postUrl) => {
    const redditData = await fetchReddit(`/${postUrl}/hot?limit=10`).then(res => res.json());
    
    const communityTitle = await fetchReddit(`/${postUrl}/about`).then(res => res.json());

    setPosts(redditData.data.children);
    setCommunity(communityTitle.data);
    setSubreddits(null);
    history.push('/list');
  };

  const fetchSubreddits = async () => {
    if(inputValue === '' || inputValue === null ) {
      setSubreddits(null);
    } else {
      const dataSubreddits = await fetchReddit(`/subreddits/search?limit=10&q=${inputValue}`).then(res => res.json());
      setSubreddits(dataSubreddits.data.children);
    }
    history.push('/list');
  };

    if (!posts || !community) return <Loader/>; 

    const providerValue = {
      posts,
      subreddits,
      community,
      setPostUrl,
      inputValue,
      setInputValue,
    };

    return (
      <section>
        <ContextApp.Provider value={providerValue}> 
          <Header/> 
          <Community/>

          <Switch>
            <Route path = "/error" component = {ErrorResult}/>
            <Route path = "/list" component = {List}/>
          </Switch>

        </ContextApp.Provider>
      </section>
    );
}

export default withRedditApi(Home);
