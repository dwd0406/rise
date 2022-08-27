import React from "react";
import JSONDATA from "../RiseData.json";
import { Link } from "react-router-dom";

const Decoration = () => {
    const [search, setSearch] = React.useState("");
    return <>
        <div className="InputD">
            <input
                type="text"
                onChange={(e) => { setSearch(e.target.value) }}
                className="Input"
            >
            </input>
        </div>
        <div>
            <table className="Table1">
                <tr>
                    <th>
                        技能名稱
                    </th>
                    <th>
                        技能說明
                    </th>
                    <th>
                        技能效果
                    </th>
                    <th>
                        裝飾品
                    </th>
                </tr>
                </table>
            {JSONDATA.filter((DecTop) => {
                if (search === "") {
                    return DecTop
                } else if (
                    DecTop.skillMaxLv.toLowerCase().includes(search.toLowerCase()) ||
                    DecTop.skillCotent.toLowerCase().includes(search.toLowerCase()) ||
                    DecTop.skill.toLowerCase().includes(search.toLowerCase())
                ) {
                    return DecTop
                }
                return false;
            })
                .map((DecTop) => {
                    return (
                        <table className="Table1" key={DecTop.SkillId}>
                            <tr>
                                <td>
                                    <Link to={`/SkillCotent/${DecTop.SkillId}`} className="FontColor">
                                        {DecTop.skill}
                                    </Link>
                                </td>
                                <td>
                                    {DecTop.skillCotent}
                                </td>
                                <td>
                                    <td className="LiStyle1">
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
                                </td>
                                <td>
                                    <td className="LiStyle2">
                                        <Link to={`/Decoration/${DecTop.DecId}`} className="FontColor">
                                            <li>
                                                {DecTop.DecorationName} {DecTop.DecSkillGrade}{DecTop.DecorationSlots}
                                            </li>
                                            <li>
                                                {DecTop.DecorationName1} {DecTop.DecSkillGrade1}{DecTop.DecorationSlots1}
                                            </li>
                                            <li>
                                                {DecTop.DecorationName2} {DecTop.DecSkillGrade2}{DecTop.DecorationSlots2}
                                            </li>
                                            <li>
                                                {DecTop.DecorationName3} {DecTop.DecSkillGrade3}{DecTop.DecorationSlots3}
                                            </li>
                                        </Link>
                                    </td>
                                </td>
                            </tr>
                        </table>
                    )
                })}</div>
    </>
}
export default Decoration;