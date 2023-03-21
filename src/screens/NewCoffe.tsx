import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Header } from "../shared/components/Header";
import { IconArrow } from "../shared/components/Icons";
import NavTabs from "../shared/components/NavTabs";
import Select from '../shared/components/Select';
import styles from "./NewCoffee.module.css";

export function NewCoffee() {
    const [name, setName] = useState('')
    const [type, setType] = useState(10)
    const [data, setData] = useState([{
        name,
        type
    }])


    async function saveData() {

        if (name !== '' && type) {

            const updateData = await JSON.parse(localStorage.getItem('newList')!)
            let newData = updateData ? updateData : []
            newData.push({ name, type: type === 10 ? 'iced' : 'hot' })
            localStorage.setItem('newList', JSON.stringify(newData))
            setData(newData)
            console.log(newData)
        }
    }
    return (
        <div className={styles.wrapper}>
            <Header
                title="Novo Café"
                textButton="Salvar"
                navigate="/"
                icon={IconArrow}
                onclick={saveData}
            />
            <div className={styles.container}>
                <NavTabs />
                <div className={styles.input}>
                    <TextField id="outlined-basic" label="Nome" variant="outlined" fullWidth onChange={(e) => setName(e.target.value)} />
                </div>
                <div className={styles.input}>
                    <Select
                        type={(value: any) => setType(value)}
                    />
                </div>

            </div>

        </div>
    )
}