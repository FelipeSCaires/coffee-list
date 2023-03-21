import { Button } from "@mui/material";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { IHeader } from "../interfaces/IHeader";
import styles from "./Header.module.css";
export function Header({ icon, title, textButton, navigate, onclick }: IHeader) {
    useEffect(() => {
        console.log(window.location.href)
    }, [])
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                {icon ? <Link to={navigate!}> {icon} </Link> : <></>}
                <h1>{title}</h1>
            </div>
            {
                window.location.href === 'http://localhost:3000/' ?
                    <Link to={navigate!}>  <Button variant="contained" color="primary" >{textButton}</Button></Link>
                    :
                    <Button variant="contained" color="primary" onClick={onclick}>{textButton}</Button>
            }
        </div>
    )
}