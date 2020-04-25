import styled from "styled-components";

export const NavigationContainer = styled.div``;
export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: ${({ column }) => (column ? "column" : "row")};
  width: 100%;
`;
export const InfoContainer = styled.div`
  width: 100%;
  max-height: 20%;
  padding-bottom: 20px;
  border-bottom: 1px solid lightgray;
  margin-bottom: 20px;
  display: flex;
`;
export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden auto;
`;
export const LeftInfo = styled.div``;
export const RightInfo = styled.div`
  margin-left: 16px;
`;
export const UserName = styled.div``;
export const UserDescription = styled.div`
  margin-top: 10px;
  margin-bottom: 5px;
`;
export const Title = styled.h2`
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
  margin: 0;
`;
export const Paragraph = styled.p`
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
  margin: 0;
`;
export const Span = styled.span`
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
`;
export const TextLink = styled.a`
  color: ${({ color }) => color};
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
`;

export const List = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`;
export const ListItem = styled.div`
  margin-bottom: 12px;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 16px;

  &:hover {
  }
`;
