import React, { useState } from "react";
import axios from "axios";
import { FaWindowClose } from "react-icons/fa";
import Modal from "react-modal";
import { CgDetailsMore } from "react-icons/cg";
import { MdFavorite, MdDelete } from "react-icons/md";
import "./style.css";

const SingleMovie = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [like, setLike] = useState(props.like);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const favorite = async (elem, type) => {
    await axios.put(
      "https://group1-cap2backend.herokuapp.com/setMovieFavorite",
      {
        movie: elem,
        like: type,
      }
    );
    setLike(true);
  };

  return (
    <div className="single">
      <div className="cardIcons">
        <CgDetailsMore onClick={openModal} className="icon" id="detailsIcon" />
        {props.delete ? (
          <h3 className="lable">{props.elem.kind.toUpperCase()}</h3>
        ) : (
          ""
        )}
        {props.delete ? (
          <MdDelete
            className="iconunlike"
            onClick={() => favorite(props.elem, true)}
          />
        ) : props.added ? (
          <MdFavorite className="iconlike" />
        ) : (
          <MdFavorite
            className={like ? "iconlike" : "iconunlike"}
            onClick={() => favorite(props.elem, false)}
          />
        )}
      </div>
      <img
        className="singleImg"
        src={props.elem.artworkUrl100.replace("100x100", "1200x1200")}
        alt={`card ${props.elem.collectionName}`}
      />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="overlay"
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <div className="headerModal">
          <img
            id="gifM"
            alt={`${props.elem.collectionName} img`}
            src="https://i.pinimg.com/originals/5c/4a/1c/5c4a1cef8a1ebd3584fac99c817b173c.gif"
          />
          <FaWindowClose id="closeIcon" onClick={closeModal} />
        </div>
        <div className="modalDetails">
          <img
            className="modalImg"
            src={props.elem.artworkUrl100.replace("100x100", "1200x1200")}
            alt={`card ${props.elem.trackName}`}
          />
          <div className="details">
            <h2 id="name">{props.elem.trackName}</h2>
            <video
              src={props.elem.previewUrl}
              width="400px"
              height="300px"
              controls
            />
            <a href={`${props.elem.trackViewUrl}`}>
              <img
                alt={props.elem.trackName}
                className="itouns"
                src="https://help.apple.com/assets/5FFC9741F7B393613B23EEF1/5FFC9742F7B393613B23EEF8/ar_EG/6c4ec679fc7e16151828b2ad053880a3.png"
              />
            </a>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SingleMovie;
