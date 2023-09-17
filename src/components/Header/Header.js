import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { QUERIES, COLORS, BREAKPOINTS } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <UserWrapper>
                <User size={24} />
              </UserWrapper>
              <SubscribeGroupWrapper>
                <Button>subscribe</Button>
                <AnchorWrapper> Already a subscriber?</AnchorWrapper>
              </SubscribeGroupWrapper>
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <Logo />
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
  @media (${QUERIES.laptopAndUp}) {
    background-color: ${COLORS.gray[100]};
    padding: 32px 0;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
  height: 100px;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;
  @media (${QUERIES.laptopAndUp}) {
    color: ${COLORS.offblack};
  }

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
  @media (${QUERIES.laptopAndUp}) {
    margin-top: -10%;
  }
`;
const UserWrapper = styled.div`
  @media (${QUERIES.laptopAndUp}) {
    display: none;
  }
`;
const SubscribeGroupWrapper = styled.div`
  @media (max-width: ${BREAKPOINTS.laptopMin}px) {
    display: none;
  }
  display: flex;
  flex-direction: column;
  align-items: center;

`;
const AnchorWrapper = styled.a`
  font-family: var(--font-family-serif);
  text-decoration: underline;
  font-style: italic;
  color: var(--color-gray-900);
  justify-content: flex-end;

`;
export default Header;
