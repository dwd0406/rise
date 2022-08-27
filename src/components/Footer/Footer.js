/* eslint-disable jsx-a11y/anchor-is-valid */
import {Link} from "react-router-dom"

const Footer = () => {
    return (
        <div className="footer">
            <Link to='/HOME'>
                <a className="active">回到首頁</a>
            </Link>
                <a>本網站內所記載之遊戲相關稱呼、所引用之圖片以及資料之相關財產權皆歸屬於原始公司及單位。</a>
        </div>
    )
}
export default Footer;