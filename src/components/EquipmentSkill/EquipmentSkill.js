import React from "react";
import JSONDATA from "../RiseDataEqu.json";
import { Link } from "react-router-dom";

const EquipmentSkill = () => {
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
                        裝備技能名稱
                    </th>
                    <th>
                        裝備技能最高等級
                    </th>
                    <th>
                        裝備技能說明
                    </th>
                    <th>
                        裝備技能效果
                    </th>
                </tr>
            </table>
            {JSONDATA.filter((DecTop) => {
                if (search === "") {
                    return DecTop
                } else if (
                    DecTop.skillMaxLv.toLowerCase().includes(search.toLowerCase()) ||
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
                                    <Link to={`/EquipmentSkill/${DecTop.SkillId}`} className="FontColor">
                                        {DecTop.skill}
                                    </Link>
                                </td>
                                <td>
                                    {DecTop.skillMaxLv}
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
                            </tr>
                        </table>
                    )
                })}</div>
    </>
}
export default EquipmentSkill;