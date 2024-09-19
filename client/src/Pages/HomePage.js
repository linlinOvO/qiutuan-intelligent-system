import React, {useState} from "react";
import './HomePage.css'
import '../App.css'


const Page = (props) => {
    return(
        <div style={{height: "70px", float: "left", padding: "6px"}}>
            <div className="hp-test1" onClick={() => {
                if(props.openedPages.indexOf(props.page) === -1){
                    const l = props.openedPages
                    l.push(props.page)
                    props.setOpenedPages(l)
                }
                props.setCurrentPage(props.page)
            }}>
                <div className="hp-test2">
                    <img src={require("../Pictures/navigateBar/" + props.icon)} alt={"1"}/>
                </div>
                <div className="hp-test3">
                    {props.page}
                </div>
            </div>
        </div>
    )
}

const NavigateWall = (props) => {

    const navigations = [
        {
            title: "数据库管理",
            pages: [
                {
                    title: "原料管理",
                    icon: "Picture 1.png"
                },
                // {
                //     title: "生产数据库",
                //     icon: "Picture 2.png"
                // }
            ]
        },
        {
            title: "生产状态监控",
            pages: [
                {
                    title: "氧势监控",
                    icon: "Picture 3.png"
                },
                {
                    title: "喷煤监控",
                    icon: "Picture 4.png"
                },
                {
                    title: "炉况监控",
                    icon: "Picture 5.png"
                }
            ]
        },
        {
            title: "工艺计算模型",
            pages: [
                {
                    title: "配料计算",
                    icon: "Picture 6.png"
                },
                {
                    title: "预设值参数",
                    icon: "Picture 6.png"
                },
                {
                    title: "离线计算",
                    icon: "Picture 8.png"
                },
                // {
                //     title: "链篦机系统",
                //     icon: "Picture 7.png"
                // },
                // {
                //     title: "回转窑系统",
                //     icon: "Picture 8.png"
                // },
                // {
                //     title: "环冷机系统",
                //     icon: "Picture 9.png"
                // },
                {
                    title: "链回环系统",
                    icon: "Picture 10.png"
                }
            ]
        },
        {
            title: "系统说明",
            pages: [
                {
                    title: "系统说明书",
                    icon: "Picture 11.png"
                },
                {
                    title: "帮助反馈",
                    icon: "Picture 12.png"
                }
            ]
        },
    ]

    return (
        <div className="homePage-part1">
            {navigations.map((navigation, index) => (
                <div className="homePage-form" key={index}>
                    <div className="homePage-title">
                        {navigation.title}
                    </div>
                    <div className="homePage-bar">
                        {navigation.pages.map((n, i) => (
                            <Page page={n.title}
                                  key={i}
                                  icon={n.icon}
                                  openedPages={props.openedPages}
                                  setOpenedPages={props.setOpenedPages}
                                  setCurrentPage={props.setCurrentPage}/>
                        ))}
                    </div>
                </div>
            ))}

        </div>
    )
}

const Calender = () => {
    const d = new Date()

    const [year, setYear] = useState(d.getFullYear())
    const [month, setMonth] = useState(d.getMonth() + 1)
    const [day, setDay] = useState(d.getDate())

    //console.log(year, month, day)

    const nextMonth = () => {
        if(month !== 12){
            setMonth(month + 1)
            return month + 1
        }else{
            setMonth(1)
            setYear(year + 1)
            return 1
        }
    }

    const previousMonth = () => {
        if(month !== 1){
            setMonth(month - 1)
        }else{
            setMonth(12)
            setYear(year - 1)
        }
    }

    const currentTime = () => {
        const now = new Date()
        setYear(now.getFullYear())
        setMonth(now.getMonth() + 1)
        setDay(now.getDate())
    }

    function getDaysInMonth(year, month) {
        return new Date(year, month, 0).getDate();
    }

    const GetCalender = () => {
        const allDays = []    // 长度为42
        const targetDate = new Date(month + "/" + 1 + "/" + year)

        // 上个月的天数
        for(let i = targetDate.getDay(); i > 0; i--){
            const temp = new Date(new Date().setDate(targetDate.getDate() - i));
            allDays.push(<div
                className="homePage-part2-unit"
                key={"last month " + i}
                style={{color:"#d5d7dd"}}
            >{temp.getDate()}</div> )
        }

        // 这个月
        for(let i = 1; i < getDaysInMonth(year, month) + 1; i++){
            const length = allDays.length
            if(length % 7 === 6 && i === day){
                allDays.push(
                    <div
                        className="homePage-part2-unit"
                        key={"this month " + i}
                        style={{color:"#62b7ff", backgroundColor:"#ecf5ff", borderRight:"1px solid #d5d7dd"}}
                    >{i}</div>
                )
            } else if(length % 7 === 6){
                allDays.push(
                    <div
                        className="homePage-part2-unit"
                        key={"this month " + i}
                        style={{borderRight:"1px solid #d5d7dd"}}
                    >{i}</div>
                )
            }else if(i === day) {
                allDays.push(
                    <div
                        className="homePage-part2-unit"
                        key={"this month " + i}
                        style={{color:"#62b7ff", backgroundColor:"#ecf5ff"}}
                    >{i}</div>
                )
            }else {
                allDays.push(
                    <div
                        className="homePage-part2-unit"
                        key={"this month " + i}
                    >{i}</div>
                )
            }
        }

        let l = allDays.length
        //下个月
        for(let i = 1; i < 42 - l + 1; i++){
            const length = allDays.length
            if(length % 7 === 6){
                allDays.push(
                    <div
                        className="homePage-part2-unit"
                        key={"next month " + i}
                        style={{borderRight:"1px solid #d5d7dd", color:"#d5d7dd"}}
                    >{i}</div>
                )
            }else{
                allDays.push(
                    <div
                        className="homePage-part2-unit"
                        key={"next month " + i}
                        style={{color:"#d5d7dd"}}
                    >{i}</div>
                )
            }
        }

        return allDays
    }

    return (
        <div className="homePage-part2">
            <div className="homePage-part2-title">
                <div className="homePage-part2-date">
                    {year + " 年 " + month + " 月"}
                </div>
                <div className="homePage-part2-button">
                    <button onClick={previousMonth}>
                        {"上个月"}
                    </button>
                    <button onClick={currentTime}>
                        {"今天"}
                    </button>
                    <button onClick={nextMonth}>
                        {"下个月"}
                    </button>
                </div>
            </div>
            <div className="homePage-part2-body">
                <div className="homePage-part2-day">
                    {["日", "一", "二", "三", "四", "五", "六"].map((day, index) => (
                        <div className="homePage-part2-unit" key={index}>{day}</div>
                    ))}
                </div>
                <div className="homePage-part2-calender">
                    <GetCalender/>
                </div>
            </div>
        </div>
    )
}

const HomePage = (props) => {
    // const partOne = ["系统总览", "系统说明"]
    // const partTwo = ["炉况监控", "氧势监控", "喷煤监控", "原料管理", "配料计算", "阈值管理"]
    // const partThree = ["链篦机系统", "回转窑系统", "环冷机系统", '链回环系统', "预设值参数", "离线计算"]
    /**
     <div className="hp-test4">
     {partOne.map((p, i) => (
                    <Page page={p} key={i}
                          openedPages={props.openedPages}
                          setOpenedPages={props.setOpenedPages}
                          setCurrentPage={props.setCurrentPage}/>
                ))}
     </div>
     <div className="hp-test5">
     {partTwo.map((p, i) => (
                    <Page page={p} key={i}
                          openedPages={props.openedPages}
                          setOpenedPages={props.setOpenedPages}
                          setCurrentPage={props.setCurrentPage}/>
                ))}
     </div>
     <div className="hp-test5">
     {partThree.map((p, i) => (
                    <Page page={p} key={i}
                          openedPages={props.openedPages}
                          setOpenedPages={props.setOpenedPages}
                          setCurrentPage={props.setCurrentPage}/>
                ))}
     </div>
     */

    return (
        <div className="homePage">
            <NavigateWall openedPages={props.openedPages} setOpenedPages={props.setOpenedPages} setCurrentPage={props.setCurrentPage}/>
            <Calender/>
            <div className="homePage-part3"></div>
        </div>
    )
}

export default HomePage
// export {NavigateWall}
