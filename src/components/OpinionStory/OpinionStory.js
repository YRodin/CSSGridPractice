import React from "react";
import styled from "styled-components/macro";
import { QUERIES } from "../../constants";

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <a href={`/story/${id}`}>
      <Wrapper>
          <Avatar alt="" src={avatar} />
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
      </Wrapper>
    </a>
  );
};

const Wrapper = styled.article`
  color: var(--color-gray-900);
  @media (${QUERIES.tabletAndUp}) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  @media (${QUERIES.desktopAndUp}) {
    display: grid;
    grid-template-areas: 
    "authName avatar"
    "articleTitle avatar"
    ;
  }
`;

const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  @media (${QUERIES.desktopAndUp}) {
    grid-area: avatar;
  }
`;

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
  @media (${QUERIES.desktopAndUp}) {
    grid-area: authName;
  }
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
  @media (${QUERIES.desktopAndUp}) {
    grid-area: articleTitle;
  }
`;

export default OpinionStory;
