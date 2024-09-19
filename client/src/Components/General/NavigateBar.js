const NavigateBar = (props) => {
    return(
        <div className="app-body-header">
            <div className={props.currentPage === "首页" ? "app-body-header-choice" : "app-body-header-choice1"}
                 onClick={() => {props.setCurrentPage("首页")}}>
                <div>{"首页"}</div>
            </div>
            {props.openedPages.map((page, index) => {
                return(
                    <div className={props.currentPage === page ? "app-body-header-choice" : "app-body-header-choice1"}
                         key={index}
                    >
                        <div onClick={() => {
                            props.setCurrentPage(page)
                        }}>{page}</div>
                        <i className="app-body-header-circle"
                           onClick={() => {
                               const l = []
                               for(let i in props.openedPages){
                                   if(props.openedPages[i] === page){
                                       continue
                                   }
                                   l.push(props.openedPages[i])
                               }
                               props.setOpenedPages(l)
                               if(l.length !== 0){
                                   props.setCurrentPage(l[0])
                               }else{
                                   props.setCurrentPage("首页")
                               }
                           }}/>
                    </div>
                )
            })}
        </div>
    )
}

export default NavigateBar