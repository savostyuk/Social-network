import React, {useState} from 'react';
import styles from "./Paginator.module.css";
import cn from 'classnames';
import {NavLink} from "react-router-dom";

let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / pageSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return <div className={cn(styles.paginator, {[styles.selectedPage] : true})}>
        {
            portionNumber > 1 &&
            <button className={styles.button + ' ' +styles.buttonLeft} onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>Влево</button>
        }
        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => {
                    return <span className={cn({
                        [styles.selectedPage]: currentPage === p
                    }, styles.pageNumber)}
                                 key={p}
                                 onClick={(e) => {
                                     onPageChanged(p);
                                 }}>{p}</span>
                }
            )}
        {portionCount>portionNumber &&
        <button className={styles.button + ' ' +styles.buttonRight} onClick={()=>{setPortionNumber(portionNumber+1)} }>Вправо</button>}
    </div>

}
export default Paginator;
