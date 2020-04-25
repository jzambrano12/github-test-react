import React, { useState, useMemo } from "react";

//React Router
import { Link } from "react-router-dom";

//Custom Hooks
import { useGetPublicGists } from "../../data/hooks/gists";

//Styles
import {
  Wrapper,
  Container,
  DirectionRow,
  TableText,
  LoadingContainer,
} from "./css";

//Material UI
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Pagination from "@material-ui/lab/Pagination";
import Avatar from "@material-ui/core/Avatar";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import EyeIcon from "@material-ui/icons/RemoveRedEye";

//Parse date
import { format } from "date-fns";

const TOTAL_PAGES = 3000 / 20;

const Home = () => {
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { data: publicData, status: publicStatus, refetch } = useGetPublicGists(
    currentPage
  );
  useMemo(() => {
    if (publicData) {
      setResults(publicData);
    }
  }, [publicData]);

  const handlePagination = (page) => {
    setCurrentPage(page);
    refetch();
  };

  const isLoading = publicStatus === "loading";

  return (
    <Wrapper>
      <Container noData={isLoading}>
        {isLoading ? (
          <LoadingContainer>
            <CircularProgress size={80} />
          </LoadingContainer>
        ) : (
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Ver</TableCell>
                  <TableCell>User</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Created At</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {results.length > 0 ? (
                  results.map((row) => (
                    <TableRow key={row.owner} hover>
                      <TableCell>
                        <Link to={`/${row.owner.login}/${row.id}`}>
                          <Button>
                            <EyeIcon />
                          </Button>
                        </Link>
                      </TableCell>
                      <TableCell scope="row">
                        <DirectionRow>
                          <Avatar
                            alt={row.owner.login}
                            src={row.owner.avatar_url}
                          />
                          <TableText>{row.owner.login}</TableText>
                        </DirectionRow>
                      </TableCell>
                      <TableCell scope="row">
                        <TableText>
                          {row.description || "No tiene descripción"}
                        </TableText>
                      </TableCell>
                      <TableCell scope="row">
                        <TableText>
                          {format(new Date(row.created_at), "dd-MM-yyyy")}
                        </TableText>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow hover>
                    <TableText>No hay resultados</TableText>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Container>
      <Pagination
        count={TOTAL_PAGES}
        onChange={(_event, page) => handlePagination(page)}
      />
    </Wrapper>
  );
};

export default Home;
