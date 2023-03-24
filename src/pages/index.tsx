import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import { Settings } from '../components/Settings';
import {
  ContentsContext,
  Introduction,
  Keyboard,
  ScreenReader,
  Link,
  Button,
  Form,
  ImageOfText,
} from '../components/contents';
import { publicPath } from '../utils/publicPath';

const Header = styled.header`
  padding: 1rem 4rem;
  background: #2864f0;
  @media screen and (max-width: 48rem) {
    padding: 0.5rem 1rem;
  }
`;
const HeaderTitle = styled.h1`
  font-size: 2rem;
  font-weight: normal;
  color: #fff;
  margin: 0;
  @media screen and (max-width: 48rem) {
    display: block;
    font-size: 1.2rem;
  }
`;
const Main = styled.main`
  padding: 2rem 4rem 0;
  max-width: 60rem;
  @media screen and (max-width: 48rem) {
    padding: 1rem 1rem 0;
  }
`;
const Footer = styled.footer`
  padding: 4rem 4rem 1rem;
  box-sizing: border-box;

  @media screen and (max-width: 48rem) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
const FooterP = styled.p`
  color: #6e6b6b;
  font-size: 0.75rem;
  margin: 0;
  & + & {
    margin-top: 0.5rem;
  }
`;
const FooterA = styled.a`
  color: #6e6b6b;
  transition-duration: 0.3s;
  transition-property: color;
  &:hover {
    color: #23418c;
  }
`;

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>freee Accessibility Training</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href={publicPath('favicon.ico')} />
      </Head>

      <Header>
        <HeaderTitle>freee Accessibility Training</HeaderTitle>
      </Header>
      <Settings />
      <Main>
        <ContentsContext>
          <Introduction />
          <Keyboard />
          <ScreenReader />
          <Link />
          <Button />
          <Form />
          <ImageOfText />
        </ContentsContext>
      </Main>
      <Footer>
        <FooterP>&copy; freee K.K.</FooterP>
        <FooterP>
          <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
            <img
              alt="CC BY"
              style={{ borderWidth: 0 }}
              src="https://i.creativecommons.org/l/by/4.0/88x31.png"
            />
          </a>
          <br />
          このページは
          <FooterA
            rel="license"
            href="http://creativecommons.org/licenses/by/4.0/"
          >
            クリエイティブ・コモンズ 表示 4.0 国際 ライセンス
          </FooterA>
          の下に提供されています。
        </FooterP>
      </Footer>
    </>
  );
};

export default Home;
