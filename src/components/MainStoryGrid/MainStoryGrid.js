import React from "react";
import styled from "styled-components/macro";
import { QUERIES, COLORS } from "../../constants";

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from "../../data";

import SectionTitle from "../SectionTitle";
import MainStory from "../MainStory";
import SecondaryStory from "../SecondaryStory";
import OpinionStory from "../OpinionStory";
import Advertisement from "../Advertisement/Advertisement";

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
  grid-area: opinion;
  @media (${QUERIES.tabletAndUp}) {
    & div:nth-of-type(2) {
      display: flex;
      gap: 0 4rem;
    }
  }

  @media(${QUERIES.desktopAndUp}){
    padding-left: 1rem;
    & div:nth-of-type(2) {
      flex-direction: column;
      gap: 1rem;
      
      & a :not(:last-of-type){
        padding-bottom: 1rem;
        border-bottom: 1px solid ${COLORS.gray[300]};
      }
    }
  
  }
`;

const Wrapper = styled.div`
  display: grid;
  gap: 48px;
  margin-bottom: 48px;
  grid-template-areas:
    "main"
    "secondary"
    "opinion"
    "ad";
  // tablet size and up styles
  @media (${QUERIES.tabletAndUp}) {
    grid-template-areas:
      "main main secondary"
      "ad ad ad"
      "opinion opinion opinion";
    gap: 0;
  }
  //laptop size and up styles
  @media (${QUERIES.desktopAndUp}) {
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: repeat(3, minmax(100px, auto));
    grid-template-areas:
      "main main main main secondary secondary secondary opinion opinion"
      "main main main main secondary secondary secondary opinion opinion"
      "main main main main ad ad ad ad ad";
  }
`;

const MainStorySection = styled.section`
  grid-area: main;
  @media (${QUERIES.tabletAndUp}) {
    padding: 0 16px;
    border-right: 1px solid ${COLORS.gray[300]};
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary;
  @media (${QUERIES.tabletAndUp}) {
    padding: 0 16px;
    & div a:not(:last-of-type) article {
      border-bottom: 1px solid ${COLORS.gray[300]};
    }
    & div a:not(:first-of-type) article {
      padding-top: 1rem;
    }
  }

  @media(${QUERIES.desktopAndUp}) {
    border-right: 1px solid ${COLORS.gray[300]};
  }
`;

const StoryList = styled.div``;

const AdvertisementSection = styled.section`
  grid-area: ad;
 
`;

export default MainStoryGrid;
