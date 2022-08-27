import React from "react";
import JSONDATA from "../RampageData.json";
import { Link } from "react-router-dom";

const Rampage = () => {
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
            {JSONDATA.filter((RamDecTop) => {
                if (search === "") {
                    return RamDecTop
                } else if (
                    RamDecTop.RampageDecorationsName.toLowerCase().includes(search.toLowerCase()) ||
                    RamDecTop.RampageName.toLowerCase().includes(search.toLowerCase())
                ) {
                    return RamDecTop
                }
                return false;
            })
                .map((RamDecTop) => {
                    return (
                        <table className="Table1" key={RamDecTop.RampageId}>
                            <tr>
                                <td>
                                    <Link to={`/Rampage/${RamDecTop.RampageId}`} className="FontColor">
                                        {RamDecTop.RampageDecorationsName}{RamDecTop.RampageDecorationsSlots}
                                    </Link>
                                </td>
                                <td className="">
                                    <Link to={`/Rampage/${RamDecTop.RampageId}`} className="FontColor">
                                        {RamDecTop.RampageName}
                                    </Link>
                                </td>
                                <td>
                                    {RamDecTop.RampageSkillContent}
                                </td>
                                <td>
                                    {RamDecTop.RampageSkill}
                                </td>
                            </tr>
                        </table>
                    )
                })}</div>
    </>
}
export default Rampage;