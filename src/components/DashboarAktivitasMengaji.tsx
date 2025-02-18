import Header2 from "./Header2"
import Table from "./Table"
import useFetch from "../hooks/useFetch"
import { API_DASHBOARD } from "../constants/URL_API"
import { ColumnDef } from "@tanstack/react-table";
import { useEffect } from "react";

interface User {
    region: string;
    name: string;
    juz_read: number;
    entry_time: Date;
  }
  
const dummyUsers: User[] = [
{ region: "Jakarta", name: "Ahmad", juz_read: 5, entry_time: new Date("2025-02-18") },
{ region: "Bandung", name: "Siti", juz_read: 3, entry_time: new Date("2025-02-17") },
{ region: "Surabaya", name: "Budi", juz_read: 7, entry_time: new Date("2025-02-16") },
{ region: "Medan", name: "Rina", juz_read: 4, entry_time: new Date("2025-02-15") },
{ region: "Yogyakarta", name: "Dewi", juz_read: 6, entry_time: new Date("2025-02-14") },
];

const columns: ColumnDef<any>[] = [
    { accessorKey: "region", header: "Regional" },
    { accessorKey: "name", header: "Name" },
    { accessorKey: "juz_read", header: "Juz yang Dibaca" },
    { 
        accessorKey: "entry_time", 
        header: "Waktu Laporan", 
        cell: (info) => new Intl
            .DateTimeFormat("en-GB", { day: "2-digit", month: "short", year: "numeric" })
            .format(info.getValue<Date>()) 
    },
];


const DashboarAktivitasMengaji = () => {
    const { data, loading, fetchData } = useFetch<any>(API_DASHBOARD, "GET", {Authorization: `Bearer ${localStorage.getItem("access_token")}`});

    useEffect(() => {
        fetchData();
        console.log(data);
    }, [])

  return (
    <div className="bg-neutral-50 flex flex-col justify-center w-full rounded-3xl box-shadow px-6 py-3 gap-2">
        <Header2 title="Aktivitas Mengaji Terbaru" className="px-2"/>
        {
            loading ? (
                <p>Loading...</p>
            ) : (
                <Table data={dummyUsers} columns={columns} classNameHeader="font-medium text-sm" borderBody="border-0 font-normal" firstHighlight={true}/>
            )
        }
    </div>
  )
}

export default DashboarAktivitasMengaji