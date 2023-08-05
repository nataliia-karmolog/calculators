import React from 'react';
import { useNavigate } from 'react-router-dom';
import InstImg from '../../../assets/inst.png';
import TikTokImg from '../../../assets/tiktok.png';
import TelegramImg from '../../../assets/tg.png';
import Hero from '../../../assets/hero.png';

import './MatrixSelectionPage.scss';
import { storeSlice } from '../../../store/reducers/StoreSlice';
import { useAppDispatch } from '../../../hooks/redux';

export const MatrixSelectionPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <div className="matrix-selection-page_wrapper">
      <h3 className="matrix-selection-page_wrapper_h3">БЕЗКОШТОВНИЙ КАЛЬКУЛЯТОР</h3>
      <h1 className="matrix-selection-page_wrapper_h1">МАТРИЦІ ДОЛІ</h1>
      <div className="buttons_wrapper">
        <button
          className="btn buttons_wrapper-btn"
          onClick={async () => {
            dispatch(storeSlice.actions.setClearState());
            navigate('/personal-matrix');
          }}
        >
          РОЗРАХУВАТИ ОСОБИСТУ МАТРИЦЮ
        </button>
        <button
          className="btn buttons_wrapper-btn"
          onClick={async () => {
            dispatch(storeSlice.actions.setClearState());
            navigate('/compatibility-matrix');
          }}
        >
          РОЗРАХУВАТИ СУМІСНІСТЬ
        </button>
      </div>
      <div className="social-and-photo">
        <div className="social-links_wrapper">
          <div className="social-links">
            <div className="social-link">
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/irinayakubetsss">
                <img src={InstImg} alt="InstImg" width="50px" />
              </a>
            </div>
            <div className="social-link">
              <a target="_blank" rel="noreferrer" href="https://t.me/irinayakubetss">
                <img src={TelegramImg} alt="TelegramImg" width="50px" />
              </a>
            </div>
            <div className="social-link">
              <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@irina_matrixxx">
                <img src={TikTokImg} alt="TikTokImg" width="45px" />
              </a>
            </div>
          </div>
        </div>
        <div className="img-hero"> </div>
      </div>
    </div>
  );
};
