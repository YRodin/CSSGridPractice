import React from 'react';
import styled from 'styled-components/macro';
import { QUERIES } from '../../constants';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </StoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};


const OpinionSection = styled.section`
  grid-area: opinion-stories;
  & div:nth-of-type(2) {
    display: flex;
    gap: 0 4rem;
  }
`;

const Wrapper = styled.div`
  display: grid;
  gap: 48px;
  margin-bottom: 48px;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  // tablet size and up styles
  @media (${QUERIES.tabletAndUp}) {
    grid-template-areas:
    'main-story main-story secondary-stories'
    'advertisement advertisement advertisement'
    'opinion-stories opinion-stories opinion-stories'
    ;
  }
  //laptop size and up styles
`;

const MainStorySection = styled.section`
  grid-area: main-story;
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
`;

const StoryList = styled.div`
  /* display: flex; */
  
  /* flex-direction: column;  */
`;


const AdvertisementSection = styled.section`
  grid-area: advertisement;
`;

export default MainStoryGrid;
