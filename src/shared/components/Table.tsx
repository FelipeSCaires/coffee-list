import { CircularProgress } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../services/api';
import styles from './Header.module.css';



export default function BasicTable(type: any) {
    const [rows, setRows] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState(false)


    async function LoadData() {
        let selectedString = type?.type === 10 ? 'iced' : 'hot'
        try {
            setIsLoading(true)
            const response = await api.get(`/${selectedString}`, {})
            const dataFormatted: any[] = response?.data.map((item: any) => {
                return {
                    name: item?.title,
                    type: selectedString
                }
            })
            setIsLoading(false)
            if (localStorage.getItem('newList')) {
                let newData = JSON.parse(localStorage.getItem('newList')!)
                newData.forEach((x: any) => {
                    if (x.type === selectedString)
                        dataFormatted.unshift(x)
                })
            }
            setRows(dataFormatted)



        } catch (error) {
            console.log(error)
        }
    }

    function params(row: any) {
        let newData = []
        newData.push(row)
        localStorage.setItem('params', JSON.stringify(newData))
        console.log(row)
    }

    useEffect(() => {
        LoadData()

    }, [type])


    return (
        <>
            {
                isLoading ?
                    <CircularProgress />
                    :
                    <></>
            }
            <TableContainer component={Paper} >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">

                    <TableBody>
                        {rows?.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" align='justify'>
                                    <Link to={"/coffee-detail"} className={styles.link} onClick={() => params(row)}>
                                        {row.name}
                                    </Link>
                                </TableCell>
                                <TableCell align="center">{row.type}</TableCell>
                            </TableRow>

                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}