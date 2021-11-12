import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import ReactPlayer from "react-player";
import { CgDetailsMore } from "react-icons/cg";
import { FaSearch ,FaWindowClose } from "react-icons/fa";
import {MdFavorite} from "react-icons/md"
import "./style.css";

const Audio = () => {
  const [music, setMusic] = useState([]);
  useEffect(() => {
    getPo();
  }, []);
  const getPo = async () => {
    const response = await axios.get(
      "http://itunes.apple.com/search?term=s&country=sa&media=music&limit=10"
    );
    console.log(response.data.results);
    setMusic(response.data.results);
    console.log(response.data.results);
  };
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  useEffect(()=>{
console.log("hi");
  },[modalIsOpen])

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  const favFunc=(e,i)=>{

      }
  return (
    <div className="audioContainer">
      <div className="banner"></div>
      <div className="search-containe">
        <form>
          <input 
          type="text" 
          name="search" 
          placeholder="Search... " />
          <button>
            <FaSearch />
          </button>
        </form>
      </div>
      <div className="audio">
        {music.map((elem) => (
          <div className="singleAudio">
            <img
              className="singleImg"
              src={elem.artworkUrl100}
              alt={`card ${elem.collectionName}`}
            />

            <div className="cardIcons">
            <CgDetailsMore
             onClick={openModal} 
             className="icon" 
             />
            <MdFavorite onClick={favFunc} className={elem.isLike ? ` icon like` : `icon unlike`}/> 
            </div>
            <h2>{elem.collectionName}</h2>

            <div>
              <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                className="modal"
                overlayClassName="overlay"
                contentLabel="Example Modal"
                ariaHideApp={false}
              >
         

                <div className="modal_content" >
                <div className="headerModal">
                <FaWindowClose  id="closeIcon" onClick={closeModal}/>
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
                  {elem.collectionName}
                </h2>
                
                  <img id="gifM" src="https://i.pinimg.com/originals/5c/4a/1c/5c4a1cef8a1ebd3584fac99c817b173c.gif" />
                  </div>
                <img
              className="modalImg"
              src={elem.artworkUrl100}
              alt={`card ${elem.collectionName}`}
            />
                  <ReactPlayer
                    url={elem.previewUrl}
                    width="400px"
                    height="50px"
                    playing={false}
                    controls={true}
                    className="aduioController"
                  />
                  </div>
               
              </Modal>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Audio;
