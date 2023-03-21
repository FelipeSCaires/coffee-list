import { useState } from "react";
import { Header } from "../shared/components/Header";
import Select from "../shared/components/Select";
import Table from "../shared/components/Table";
import styles from "./Home.module.css";

export function Home() {
    const [seleted, setSelected] = useState(20)

    return (
        <div className={styles.wrapper}>
            <Header
                title="Cafés"
                textButton="Novo café"
                onclick={() => { }}
                navigate="/new-coffee"
            />
            <div className={styles.content}>
                <Select
                    type={setSelected}
                />
            </div>
            <div className={styles.container}>
                <Table
                    type={seleted!}
                />
            </div>
        </div>
    )
}