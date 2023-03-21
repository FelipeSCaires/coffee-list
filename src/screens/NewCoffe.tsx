import TextField from '@mui/material/TextField';
import { Header } from "../shared/components/Header";
import { IconArrow } from "../shared/components/Icons";
import NavTabs from "../shared/components/NavTabs";
import Select from '../shared/components/Select';
import styles from "./NewCoffee.module.css";

export function NewCoffee() {
    return (
        <>
            <Header
                title="Novo Café"
                textButton="Salvar"
                navigate="/"
                icon={IconArrow}
            />
            <div className={styles.container}>
                <NavTabs />
                <div className={styles.input}>
                    <TextField id="outlined-basic" label="Nome" variant="outlined" fullWidth />
                </div>
                <div className={styles.input}>
                    <Select />
                </div>

            </div>

        </>
    )
}