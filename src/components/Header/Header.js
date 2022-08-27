/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from 'react-router-dom';

function Headerr() {
    return <>
        <ul className="Nav">
            <Link to='/HOME'>
                <li><a className="active">MonsterHunteRise</a></li>
            </Link>
            <Link to='/Decoration'>
                <li ><a>裝飾品</a></li>
            </Link>
            <Link to='/Rampage'>
                <li><a >百龍飾品</a></li>
            </Link>
            <Link to='/SkillCotent'>
                <li><a>技能</a></li>
            </Link>
            <Link to='/EquipmentSkill'>
                <li><a>裝備技能</a></li>
            </Link>
        </ul>
    </>
}
export default Headerr;