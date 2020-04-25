import React from "react";
import {
  NavigationContainer,
  InfoContainer,
  ListContainer,
  LeftInfo,
  RightInfo,
  UserName,
  UserDescription,
  Title,
  Span,
  Paragraph,
  LoadingContainer,
  List,
  ListItem,
} from "./css";

//React router
import { useParams, Link } from "react-router-dom";

//Parse date
import { format } from "date-fns";

//Custom Hooks
import { useGetAGist, useGetUserGists } from "../../data/hooks/gists";

// Material Ui
import Button from "@material-ui/core/Button";
import ArrowBack from "@material-ui/icons/ArrowBack";
import LinkIcon from "@material-ui/icons/Link";
import GitHub from "@material-ui/icons/GitHub";
import Avatar from "@material-ui/core/Avatar";
import Skeleton from "@material-ui/lab/Skeleton";

import { Wrapper, Container } from "../home/css";

const UserInfo = () => {
  const { username, gistId } = useParams();
  const { data: gistData, status: gistStatus } = useGetAGist(gistId);
  const { data: userGistsData, status: userGistsStatus } = useGetUserGists(
    username
  );
  return (
    <Wrapper>
      <Container profile>
        <InfoContainer>
          {gistStatus === "loading" ? (
            <LoadingContainer>
              <LeftInfo>
                <Skeleton variant="circle" width={80} height={80} />
              </LeftInfo>
              <RightInfo>
                <Skeleton variant="text" width={50} height={20} />
                <Skeleton variant="text" width={30} height={12} />
                <Skeleton variant="text" width={70} height={14} />
              </RightInfo>
            </LoadingContainer>
          ) : (
            <>
              <LeftInfo>
                <Avatar
                  style={{ width: 80, height: 80 }}
                  src={gistData.owner ? gistData.owner.avatar_url : ""}
                />
              </LeftInfo>
              <RightInfo>
                <UserName>
                  <Title size="20px" weight="600">
                    {gistData.owner ? gistData.owner.login : "Anonymous"}
                  </Title>
                  <Span size="12px" weight="200">
                    {format(new Date(gistData.created_at), "dd-MM-yyyy")}
                  </Span>
                </UserName>
                <UserDescription>
                  <Paragraph size="14px" weight="400">
                    {gistData.description || "No tiene descripción"}
                  </Paragraph>
                </UserDescription>
                <Button
                  variant="text"
                  color=""
                  startIcon={<GitHub />}
                  href={`https://gist.github.com/${gistData.owner.login}/${gistData.id}`}
                >
                  Github
                </Button>
              </RightInfo>
            </>
          )}
        </InfoContainer>
        <ListContainer>
          {userGistsStatus === "loading" ? (
            <LoadingContainer>
              <ListItem>
                <Skeleton variant="rect" width={"100%"} height={50} />
              </ListItem>
              <ListItem>
                <Skeleton variant="rect" width={"100%"} height={50} />
              </ListItem>
              <ListItem>
                <Skeleton variant="rect" width={"100%"} height={50} />
              </ListItem>
              <ListItem>
                <Skeleton variant="rect" width={"100%"} height={50} />
              </ListItem>
              <ListItem>
                <Skeleton variant="rect" width={"100%"} height={50} />
              </ListItem>
            </LoadingContainer>
          ) : (
            <List>
              {userGistsData.map((item) => (
                <ListItem>
                  <Button
                    variant="text"
                    height={50}
                    fullWidth
                    sizeLarge
                    href={`https://gist.github.com/${item.owner.login}/${item.id}`}
                    endIcon={<LinkIcon />}
                  >
                    {Object.values(item.files).map((file) => (
                      <Span>{file.filename}</Span>
                    ))}
                  </Button>
                </ListItem>
              )) ?? []}
            </List>
          )}
        </ListContainer>
      </Container>
      <NavigationContainer>
        <Link to="/">
          <Button variant="text" startIcon={<ArrowBack />}>
            Volver
          </Button>
        </Link>
      </NavigationContainer>
    </Wrapper>
  );
};

export default UserInfo;
