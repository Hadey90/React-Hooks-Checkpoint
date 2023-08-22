// // src/components/MovieDetails.js
// import React, { useState } from "react";
// import Modal from "react-bootstrap/Modal";
// import Button from "react-bootstrap/Button";

// const MovieDetails = ({ movie }) => {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <div className="mt-3">
//       <Button variant="primary" onClick={handleShow}>
//         Show Details
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>{movie.title}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <p>{movie.description}</p>
//           <p>Rating: {movie.rating}</p>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default MovieDetails;
// //
