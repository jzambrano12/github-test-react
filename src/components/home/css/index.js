import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
`;
export const Container = styled.div`
  width: ${({ profile }) => (profile ? "20%" : "80%")};
  padding: ${({ profile }) => (profile ? "16px" : "0px")};
  height: 80%;
  overflow: auto;
  margin-bottom: 16px;
  box-shadow: ${({ noData }) =>
    noData ? "none" : "0px 0px 20px rgba(0, 0, 0, 0.16)"};
`;

export const DirectionRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const LoadingContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TableText = styled.span`
  font-weight: 500;
  margin-left: 12px;
`;
