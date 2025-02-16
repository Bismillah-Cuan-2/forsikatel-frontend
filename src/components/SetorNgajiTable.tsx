import Header2 from './Header2';
import Table from './Table'
import { ColumnDef } from '@tanstack/react-table'

// Define the type for your dataset
interface User {
    date: Date;
    totalJuz: number;
    latestJuz: string;
    totalKhatam: string
  }

// Sample data
const userData: User[] = [
    { date: new Date("2024-02-01"), totalJuz: 5, latestJuz: "Juz 30", totalKhatam: "1x" },
    { date: new Date("2024-02-02"), totalJuz: 3, latestJuz: "Juz 15", totalKhatam: "2x" },
    { date: new Date("2024-02-03"), totalJuz: 4, latestJuz: "Juz 20", totalKhatam: "1x" },
    { date: new Date("2024-02-04"), totalJuz: 6, latestJuz: "Juz 25", totalKhatam: "3x" },
    { date: new Date("2024-02-05"), totalJuz: 2, latestJuz: "Juz 10", totalKhatam: "1x" },
    { date: new Date("2024-02-06"), totalJuz: 7, latestJuz: "Juz 29", totalKhatam: "2x" },
    { date: new Date("2024-02-01"), totalJuz: 5, latestJuz: "Juz 30", totalKhatam: "1x" },
    { date: new Date("2024-02-02"), totalJuz: 3, latestJuz: "Juz 15", totalKhatam: "2x" },
    { date: new Date("2024-02-03"), totalJuz: 4, latestJuz: "Juz 20", totalKhatam: "1x" },
    { date: new Date("2024-02-04"), totalJuz: 6, latestJuz: "Juz 25", totalKhatam: "3x" },
    { date: new Date("2024-02-05"), totalJuz: 2, latestJuz: "Juz 10", totalKhatam: "1x" },
    { date: new Date("2024-02-06"), totalJuz: 7, latestJuz: "Juz 29", totalKhatam: "2x" },
    { date: new Date("2024-02-01"), totalJuz: 5, latestJuz: "Juz 30", totalKhatam: "1x" },
    { date: new Date("2024-02-02"), totalJuz: 3, latestJuz: "Juz 15", totalKhatam: "2x" },
    { date: new Date("2024-02-03"), totalJuz: 4, latestJuz: "Juz 20", totalKhatam: "1x" },
    { date: new Date("2024-02-04"), totalJuz: 6, latestJuz: "Juz 25", totalKhatam: "3x" },
    { date: new Date("2024-02-05"), totalJuz: 2, latestJuz: "Juz 10", totalKhatam: "1x" },
    { date: new Date("2024-02-06"), totalJuz: 7, latestJuz: "Juz 29", totalKhatam: "2x" },
];
  
  
// Define table columns
const userColumns: ColumnDef<User>[] = [
    { accessorKey: "date", 
        header: "Tanggal", 
        cell: (info) => new Intl
        .DateTimeFormat("en-GB", { day: "2-digit", month: "short", year: "numeric" })
        .format(info.getValue<Date>()) 
    },
    { accessorKey: "totalJuz", header: "Banyak Juz Dibaca" },
    { accessorKey: "latestJuz", header: "Juz Terakhir" },
    { accessorKey: "totalKhatam", header: "Total Khatam" },
];
  

const SetorNgajiTable = () => {
  return (
    <div className='flex flex-col gap-2 w-full'>
        <Header2
            title="Riwayat Setoran Mengaji"
            text="Cek Perjalanan mengajimu sejauh ini!"
        />
        <div className="max-h-96 overflow-y-auto">
            <Table data={userData} columns={userColumns} />
        </div>
    </div>
  )
}

export default SetorNgajiTable