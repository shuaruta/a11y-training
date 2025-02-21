import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Heading = styled.h2`
  font-size: 1rem;
  font-weight: bold;
  color: #6e6b6b;
  padding: 0 1rem 0 1.5rem;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0 1rem;
`;

const NavLink = styled.a.attrs(({ current }: { current: boolean }) => ({
  current,
}))`
  display: block;
  padding: 0.25rem 0.5rem;
  color: #285ac8;
  text-decoration: none;
  transition: background-color 0.2s;
  border-radius: 0.25rem;
  margin-top: 0.5rem;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    right: calc(100% + 0.25rem);
    top: calc(50% - 0.25rem);
    border-top: 0.25rem solid transparent;
    border-bottom: 0.25rem solid transparent;
    border-left: 0.5rem solid
      ${({ current }) => (current ? '#aac8ff' : 'transparent')};
    transition: border-color 0.2s;
  }

  &:hover {
    background-color: #ebf3ff;
    color: #2864f0;
  }
`;
const NavigationData = [
  { title: 'ホーム', pathname: '/' },
  { title: 'キーボードで操作してみよう', pathname: '/keyboard/' },
  { title: 'スクリーンリーダーを使ってみよう', pathname: '/screen-reader/' },
  { title: '画像', pathname: '/image/' },
  { title: 'リンク', pathname: '/link/' },
  { title: 'ボタン', pathname: '/button/' },
  { title: 'フォーム', pathname: '/form/' },
  { title: '見出し', pathname: '/heading/' },
];

export const NavigationContent = ({
  pathname,
}: {
  pathname: string;
}): JSX.Element => (
  <>
    <Heading>メニュー</Heading>
    <NavList>
      {NavigationData.map((n) => {
        const current = pathname.replace(/\/?$/, '/') === n.pathname;
        return (
          <li key={n.pathname}>
            <Link href={n.pathname} passHref>
              <NavLink
                href={n.pathname}
                aria-current={current ? 'page' : undefined}
                current={current}
              >
                {n.title}
              </NavLink>
            </Link>
          </li>
        );
      })}
    </NavList>
  </>
);
