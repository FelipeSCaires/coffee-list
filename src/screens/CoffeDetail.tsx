import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { Header } from "../shared/components/Header";
import { IconArrow } from "../shared/components/Icons";
import NavTabs from "../shared/components/NavTabs";
import Select from "../shared/components/Select";
import styles from "./NewCoffee.module.css";

export function CoffeDetail() {
    const [items, setItems] = useState<any>([])
    async function loadData() {
        const res = JSON.parse(localStorage.getItem('params')!)
        setItems(res)
        console.log(res[0].type)
    }
    useEffect(() => {
        loadData()
    }, [])
    return (
        <div className={styles.wrapper}>
            <Header
                icon={IconArrow}
                title={"Detalhes do Café"}
                navigate={"/"}
                textButton={"Salvar"}
            />
            <div className={styles.container}>
                <NavTabs />
                <div className={styles.input}>
                    <TextField id="outlined-basic" label="Nome" value={items[0]?.name} variant="outlined" fullWidth />
                </div>
                <div className={styles.input}>
                    <Select selected={items[0]?.type} />
                </div>

            </div>
        </div>
    )
}