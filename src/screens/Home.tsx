import { useEffect, useState } from "react";
import { Header } from "../shared/components/Header";
import Table from "../shared/components/Table";
import styles from "./Home.module.css";

export function Home() {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        console.log(loading)
    }, [loading])
    return (
        <>
            <Header
                title="Cafés"
                textButton="Novo café"
                onclick={() => setLoading(!!loading)}
                navigate="/new-coffee"
            />
            <div className={styles.container}>
                <Table
                />
            </div>
        </>
    )
}