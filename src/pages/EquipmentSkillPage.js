import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"
import JSONDATA from "../components/RiseDataEqu.json"

const EquipmentSkillPage = () => {
    const { SkillId } = useParams();
    const DecTop = JSONDATA.find((DeTop) => DeTop.SkillId === SkillId)
    return <>
        <div className="InputD">
            <Link to='/EquipmentSkill' className="FontColor">返回裝備技能列表</Link>
        </div>
        <div>
            <table className="Table1">
                <tr>
                    <th>
                        技能名稱
                    </th>
                    <th>
                        最高等級
                    </th>
                    <th>
                        技能說明
                    </th>
                    <th>
                        技能資訊
                    </th>
                    <th>
                        裝飾品
                    </th>
                </tr>
            </table>
            <table className="Table1" key={SkillId}>
                <tr>
                    <td>
                        {DecTop.skill}
                    </td>
                    <td>
                        {DecTop.skillMaxLv}
                    </td>
                    <td>
                        {DecTop.skillCotent}
                    </td>
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
                </tr>
            </table>
        </div>
    </>
}
export default EquipmentSkillPage;