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
                        裝飾品名稱
                    </th>
                    <th>
                        孔位
                    </th>
                    <th>
                        技能
                    </th>
                </tr>
            </table>
            {JSONDATA.filter((DecTop) => {
                if (search === "") {
                    return DecTop
                } else if (
                    DecTop.DecorationName.toLowerCase().includes(search.toLowerCase()) ||
                    DecTop.skill.toLowerCase().includes(search.toLowerCase())
                ) {
                    return DecTop
                }
                return false;
            })
                .map((DecTop) => {
                    return (
                        <table className="Table1" key={DecTop.DecId}>
                            <tr>
                                <td>
                                    <Link to={`/Decoration/${DecTop.DecId}`} className="FontColor">
                                        {DecTop.DecorationName}
                                    </Link>
                                </td>
                                <td>
                                    <Link to={`/SkillCotent/${DecTop.SkillId}`} className="FontColor">
                                        {DecTop.skill}
                                    </Link>
                                </td>
                                <td>
                                    {DecTop.skillCotent}
                                </td>
                            </tr>
                        </table>
                    )
                })
            }
        </div>
    </>
}
export default Decoration;