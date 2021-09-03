import { Row, Container, Col } from "react-bootstrap";
import SongCard from "./SongCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CardRow = ({ artistName }) => {
  const [albumsArray, setAlbumsArray] = useState([]);
  console.log(albumsArray);

  const searchAlbumsFetch = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistName}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "58eb3e9c2amsh5fd41210fbeac96p1bb7bcjsn83e742160779",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          },
        }
      );

      let albumsList = await response.json();
      setAlbumsArray(albumsList.data.slice(0, 6));
      //   setalbumsArray(albumsList.data);
      console.log(albumsArray);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(albumsArray);
    searchAlbumsFetch();
    console.log(albumsArray);
  }, []);

  return (
    <Container>
      <Link to="/Artist">
        <h2>{artistName}</h2>
      </Link>
      <Row className="row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 ml-2 mr-1">
        {albumsArray.map((songObj) => (
          <Col className="px-1" key={songObj.id}>
            <SongCard songObj={songObj} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardRow;
