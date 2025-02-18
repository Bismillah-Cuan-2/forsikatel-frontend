export interface DashboardResponse {
    hadists: string
    kalender: {
        [key: string]: string
    }
    last_juz: number
    latest_activity: [
        {
            entry_time: string
            juz_read: string
            name: string
            region: string
        }
    ]
    message: string
    today_report_region: []
    top_region: [
        {
            region: string
            total_juz: number
        }
    ]
}