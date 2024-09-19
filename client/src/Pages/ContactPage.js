import './ContactPage.css'

const ContactPage = () => {


    return (
        <div className="contactPage">
            <div className="cp_part">
                <img src={require("../Pictures/university_logo.png")} alt={"学校"}/>
                <h2>{"北京科技大学"}</h2>
                <text>{"求实鼎新"}</text>
                <div className="cp_textPart">
                    <div className="cp_line">
                        <span className="cp_icon">{"🎓"}</span>
                        <div className="cp_text">{"北京科技大学"}</div>
                    </div>
                    <div className="cp_line">
                        <span className="cp_icon">{"✉️"}</span>
                        <div className="cp_text">{"张建良 jl.zhang@ustb.edu.cn"}</div>
                    </div>
                    <div className="cp_line">
                        <span className="cp_icon">{"✉️"}</span>
                        <div className="cp_text">{"刘征建 liuzhengjian@ustd.edu.cn"}</div>
                    </div>
                    <div className="cp_line">
                        <span className="cp_icon">{"🎓"}</span>
                        <div className="cp_text">{"王耀祖 18813089698"}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage
