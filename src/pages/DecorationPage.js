import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"
import JSONDATA from "../components/RiseData"

const DecorationPage = () => {
    const { DecId } = useParams();
    const DecTop = JSONDATA.find((DeTop) => DeTop.DecId === DecId)
    return <>
        <div className="InputD">
            <Link to='/Decoration' className="FontColor">返回裝飾品列表</Link>
        </div>
        <div>
            <table className="Table1">
                <tr>
                    <th>
                        裝飾品名稱
                    </th>
                    <th>
                        技能
                    </th>
                    <th>
                        技能說明
                    </th>
                    <th>
                        技能詳細資訊
                    </th>
                </tr>
            </table>
            <table className="Table1" key={DecId}>
                <tr>
                    <td className="LiStyle2">
                        <li>
                            {DecTop.DecorationName} {DecTop.DecSkillGrade}
                            {DecTop.DecorationSlots}
                        </li>
                        <li>
                            {DecTop.DecorationName1} {DecTop.DecSkillGrade1}
                            {DecTop.DecorationSlots1}
                        </li>
                        <li>
                            {DecTop.DecorationName2} {DecTop.DecSkillGrade2}
                            {DecTop.DecorationSlots2}
                        </li>
                        <li>
                            {DecTop.DecorationName3} {DecTop.DecSkillGrade3}
                            {DecTop.DecorationSlots3}
                        </li>
                    </td>
                    <td>
                        <Link to={`/SkillCotent/${DecTop.SkillId}`} className="FontColor">
                            {DecTop.skill}
                        </Link>
                    </td>
                    <td>
                        {DecTop.skillCotent}
                    </td>
                    <td className="LiStyle2">
                        <li>
                            {DecTop.skillCotentLv[0].s1}
                        </li>
                        <li>
                            {DecTop.skillCotentLv[0].s2}
                        </li>
                        <li>
                            {DecTop.skillCotentLv[0].s3}
                        </li>
                        <li>
                            {DecTop.skillCotentLv[0].s4}
                        </li>
                        <li>
                            {DecTop.skillCotentLv[0].s5}
                        </li>
                        <li>
                            {DecTop.skillCotentLv[0].s6}
                        </li>
                        <li>
                            {DecTop.skillCotentLv[0].s7}
                        </li>
                    </td>
                </tr>
            </table>
        </div>
    </>
}
export default DecorationPage;