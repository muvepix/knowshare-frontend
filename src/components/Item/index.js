import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import io from 'socket.io-client';

import Bar from '../Bar';

import './Item.css';
import like from '../../images/like.png';

export default function Item() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      await axios.get(`${process.env.REACT_APP_URL}/posts`).then(res => {
        setItems({ items: res.data });
      });
    };
    const registerToSocket = () => {
      const socket = io(process.env.REACT_APP_URL);

      socket.on('like', itemLiked => {
        setItems({
          items: items.map(item =>
            item._id === itemLiked._id ? itemLiked : item
          ),
        });
      });
      socket.on('dislike', itemLiked => {
        setItems({
          items: items.map(item =>
            item._id === itemLiked._id ? itemLiked : item
          ),
        });
      });
    };
    getPosts();
    registerToSocket();
  });

  const handleLike = async id => {
    await axios.post(`${process.env.REACT_APP_URL}/posts/${id}/like`);
  };
  const handleDislike = async id => {
    await axios.post(`${process.env.REACT_APP_URL}/posts/${id}/dislike`);
  };
  const getVideoThumbnail = link => {
    if (link !== undefined && link !== null) {
      const regEx =
        '^(?:https?:)?//[^/]*(?:youtube(?:-nocookie)?.com|youtu.be).*[=/]([-\\w]{11})(?:\\?|=|&|$)';
      const matches = link.match(regEx);
      if (matches !== undefined && matches !== null) {
        return `https://img.youtube.com/vi/${matches[1]}/0.jpg`;
      }
    }
    return false;
  };
  items
    .sort((a, b) => a.likes - b.likes)
    .reverse()
    .map(item => (
      <div className="itemContainer">
        <div className="item">
          <div className="itemImage">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="itemLink"
            >
              <div className="imgOverlay" />

              <img src={getVideoThumbnail(item.link)} alt="" />
            </a>
          </div>
          <div className="itemDescription">
            <h4>
              {item.title} - {item.author}
            </h4>
            <p>{item.descripton}</p>
            <Link class="hashtags">{item.hashtags}</Link>
          </div>
          <div className="likeContainer">
            <img src={like} onClick={() => handleLike(item._id)} class="like" />
            {item.likes}
            <img
              src={like}
              onClick={() => handleDislike(item._id)}
              class="dislike"
              alt="dislike button"
            />
            {item.dislikes}
            <Bar green={item.likes} red={item.dislikes} className="bar" />
          </div>
        </div>
      </div>
    ));
  return <div>{items}</div>;
}
