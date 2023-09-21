import React from "react";
import styled from "styled-components/macro";

import { MARKET_DATA, SPORTS_STORIES } from "../../data";

import MarketCard from "../MarketCard";
import SectionTitle from "../SectionTitle";
import MiniStory from "../MiniStory";
import { COLORS, QUERIES } from "../../constants";

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: "/markets",
            content: "Visit Markets data »",
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: "/sports",
            content: "Visit Sports page »",
          }}
        >
          Sports
        </SectionTitle>
        <SportsStoriesWrapper>
          <SportsStories>
            {SPORTS_STORIES.map((data) => (
              <MiniStory key={data.id} {...data} />
            ))}
          </SportsStories>
        </SportsStoriesWrapper>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @media (${QUERIES.desktopAndUp}) {
    display: flex;
    gap: 1rem;
  }
`;

const MarketsSection = styled.section`
  margin-bottom: 48px;
  @media (${QUERIES.desktopAndUp}) {
    & > div:first-of-type {
      padding: 0 16px;
    }
  }
`;
const MarketCards = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.75rem;
  @media (${QUERIES.desktopAndUp}) {
    grid-template-columns: repeat(3, 1fr);
    height: 70%;
    padding-right: revert;
    padding-right: revert;
  }
`;

const SportsSection = styled.section`
  @media (${QUERIES.desktopAndUp}) {
    max-width: 50%;
    border-left: 1px solid ${COLORS.gray[300]};
    padding-left: 1.25rem;
  }
`;

const SportsStoriesWrapper = styled.div`
  max-width: 100%;
  overflow-x: scroll;
`;

const SportsStories = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export default SpecialtyStoryGrid;
