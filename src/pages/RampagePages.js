
import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"
import JSONDATA from "../components/RampageData.json"

const RampagePages = () => {
    const { RampageId } = useParams();
    const RamDecTop = JSONDATA.find((RamTop) => RamTop.RampageId === RampageId)
    return <>
        <div className="InputD">
            <Link to='/Rampage' className="FontColor">返回百龍飾品列表</Link>
        </div>
        <div>
            <table className="Table1">
                <tr>
                    <th>
                        百龍飾品名稱
                    </th>
                    <th>
                        百龍技能名稱
                    </th>
                    <th>
                        百龍技能說明
                    </th>
                    <th>
                        百龍技能效果
                    </th>
                </tr>
            </table>
            <table className="Table1" key={RampageId}>
                <tr>
                    <td>
                        {RamDecTop.RampageDecorationsName}{RamDecTop.RampageDecorationsSlots}
                    </td>
                    <td>
                        {RamDecTop.RampageName}
                    </td>
                    <td>
                        {RamDecTop.RampageSkillContent}
                    </td>
                    <td>
                        {RamDecTop.RampageSkill}
                    </td>
                </tr>
            </table>
        </div>
    </>
}
export default RampagePages;