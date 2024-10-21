import React from 'react';
import style from './football.module.css';
import MainDate from '@/Component/MainDate/mainDate';
import FootballCom from '@/Component/FootballCom/FootballCom';
import MatchAfter from '@/Component/MatchAfter/MatchAfter';

const page = () => {
  return (
    <div className={style.football}>
      <MainDate/>
      <FootballCom/>
      <MatchAfter/>
    </div>
  )
}

export default page
