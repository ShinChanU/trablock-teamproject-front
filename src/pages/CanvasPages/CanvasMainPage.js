// 임시로 만든 캔버스 메뉴 리스트 페이지
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TravelSettingPage from './TravelSettingPage';
import SelectBlockPage from './SelectBlockPage';
import BuildBlockPage from './BuildBlockPage';
import TravelSharePage from './TravelSharePage';

// 여기에서 그리드 만들기

const CanvasMainPage = () => {
  return (
    <Routes>
      <Route element={<TravelSettingPage />} path="setting" />
      <Route element={<SelectBlockPage />} path="select" />
      <Route element={<BuildBlockPage />} path="build" />
      <Route element={<TravelSharePage />} path="share" />
    </Routes>
  );
};

export default CanvasMainPage;
