import cn from "classnames";
import { useEffect, useState } from "react";
import PushButton from "../PushButton/PushButton";
import style from './Paginator.module.css'


const Paginator = ({totalUsersCount, pageSize, currentPage, setCurrentPage, portionSize = 10 }) => {


    useEffect (() => {
        setPortionNumber(Math.ceil(currentPage/portionSize));
    }, [currentPage]);

    const pages = [];
    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rigthPortionPageNumber = portionNumber * portionSize;   


    let [goToPageNumber, setGoToPage] = useState(null);

    const goToPage = () => {
        if(goToPageNumber <= pagesCount && goToPageNumber > 0) {
            setCurrentPage(+goToPageNumber);
        };
        if(goToPageNumber > pagesCount) {
            setCurrentPage(pagesCount);
        };
        setGoToPage(null);   
    };

    const onHandleFocus = (event) => {
        event.target.select();
    }

    return (
        <div className = {style.wrapper}>
            <div className = {style.container}>
                <div className = {cn(style.button, style.left)}>
                    <PushButton onHandleChange = {() => setPortionNumber(portionNumber - 1)} 
                        disable = {!(portionNumber <= 1)} 
                        text = 'Prev' styleMod = {style.pushButton} />
                    
                </div>
                
                <div className = {style.pagesContainer}>
                    <div className = {style.pages}>                
                        {pages.map(p => {
                            if(p >= leftPortionPageNumber && p <= rigthPortionPageNumber)  {
                                return <span key = {p} 
                                    className = {cn(style.page, {[style.selectedPage]: currentPage === p})} 
                                    onClick = {() => setCurrentPage(p)}
                                    >{p}</span>
                            } return null;
                        })}
                    </div>
                </div>
                <div className = {cn(style.button, style.rigth)}>
                    <PushButton onHandleChange = {() => setPortionNumber(portionNumber + 1)} 
                        disable = {!(portionNumber >= portionCount) } 
                        text = 'Next' styleMod = {style.pushButton} />
                </div>

                <div className = {style.goToPageContainer}>
                    <input 
                        type = 'number' 
                        onChange = {(e) => setGoToPage(Math.ceil(e.target.value))} 
                        value = {goToPageNumber}
                        onFocus = {onHandleFocus}
                        min = '1'/>                   

                    <PushButton text = 'Go' onHandleChange = {goToPage} styleMod = {style.goToPageButton} styleModContainer = {style.goToPageButtonContainer}/>


                </div>
            </div>
        </div>
    )   
}

export default Paginator;