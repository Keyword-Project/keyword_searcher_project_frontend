import styled from "styled-components";
import SearchMethodTab from "components/feature/filter/mainFilter/SearchMethodTab";
import { ReactNode } from "react";
import media from "styles/media";
interface LayoutProps {
  children: ReactNode;
}

const LayoutBox = styled.div`
  padding: 50px 20% 5% 20%;
  background-color: #f5f8fb;
  ${media.mobile`
  padding: 50px 2rem 5% 2rem;
  `}
`;

const Header = styled.div`
  width: 100%;
  height: 16rem ;
  border-bottom: 1px solid #f0f0f0;
  background: #fcfcfc;
`;

const Title = styled.p`
  color: var(--Orange500);
  text-shadow: 2px 4px 6px rgba(37, 36, 62, 0.15);
  font-size: var(--font-size-title);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  font-family: PaytoneOne;
  margin-top: 2rem;
  ${media.mobile`
  font-size: var(--font-size-large);
  `}
`;

const Subtitle = styled.p`
  color: #35231f;
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
  ${media.mobile`
  font-size: var(--font-size-small);
  `}
`;

const Footer = styled.div`
  width: 100%;
  height: 10rem;
  background: var(--white-color-400);
`;

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header>
        <SearchMethodTab />
        <Title>Diggggle</Title>
        <Subtitle>
          쿠팡 리뷰 수 기반으로 쉽고 똑똑하게 판매아이템 발굴하자!
        </Subtitle>
      </Header>
      <LayoutBox>{children}</LayoutBox>
      <Footer />
    </>
  );
}
