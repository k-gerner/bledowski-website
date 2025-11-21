import { useState } from 'react'

interface DayAvailability {
    date: Date
    available: boolean
}

function AvailabilityCalendar() {
    const [startMonthOffset, setStartMonthOffset] = useState(0)

    // Generate dummy availability data
    const generateAvailability = (year: number, month: number): DayAvailability[] => {
        const daysInMonth = new Date(year, month + 1, 0).getDate()
        const availability: DayAvailability[] = []

        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month, day)
            // Random availability for demo - replace with real data
            const available = Math.random() > 0.3
            availability.push({ date, available })
        }

        return availability
    }

    const getMonthData = (offset: number) => {
        const today = new Date()
        const targetDate = new Date(today.getFullYear(), today.getMonth() + offset, 1)
        return {
            year: targetDate.getFullYear(),
            month: targetDate.getMonth(),
            monthName: targetDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
            availability: generateAvailability(targetDate.getFullYear(), targetDate.getMonth())
        }
    }

    const months = [
        getMonthData(startMonthOffset),
        getMonthData(startMonthOffset + 1),
        getMonthData(startMonthOffset + 2),
        getMonthData(startMonthOffset + 3)
    ]

    const scrollPrevious = () => {
        setStartMonthOffset(prev => Math.max(0, prev - 1))
    }

    const scrollNext = () => {
        setStartMonthOffset(prev => prev + 1)
    }

    const getFirstDayOffset = (year: number, month: number) => {
        return new Date(year, month, 1).getDay()
    }

    return (
        <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                <h2 className="text-3xl font-semibold text-gray-800 text-center md:text-left">Availability Calendar</h2>
                <div className="flex gap-4 justify-center md:justify-end">
                    <button
                        onClick={scrollPrevious}
                        disabled={startMonthOffset === 0}
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition hover:cursor-pointer"
                    >
                        ← Previous
                    </button>
                    <button
                        onClick={scrollNext}
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition hover:cursor-pointer"
                    >
                        Next →
                    </button>
                </div>
            </div>

            <div className="flex gap-2 mb-6">
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-500 rounded"></div>
                    <span className="text-sm text-gray-700">Available</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-red-500 rounded"></div>
                    <span className="text-sm text-gray-700">Unavailable</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {months.map((monthData, idx) => (
                    <div key={idx} className="border rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-center mb-4 text-gray-800">
                            {monthData.monthName}
                        </h3>

                        {/* Day headers */}
                        <div className="grid grid-cols-7 gap-1 mb-2">
                            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                                <div key={day} className="text-center text-xs font-semibold text-gray-600">
                                    {day}
                                </div>
                            ))}
                        </div>

                        {/* Calendar grid */}
                        <div className="grid grid-cols-7 gap-1">
                            {/* Empty cells for days before month starts */}
                            {Array.from({ length: getFirstDayOffset(monthData.year, monthData.month) }).map((_, idx) => (
                                <div key={`empty-${idx}`} className="aspect-square"></div>
                            ))}

                            {/* Actual days */}
                            {monthData.availability.map((day, dayIdx) => (
                                <div
                                    key={dayIdx}
                                    className={`aspect-square flex items-center justify-center text-sm rounded cursor-pointer transition ${day.available
                                        ? 'bg-green-500 text-white hover:bg-green-600'
                                        : 'bg-red-500 text-white hover:bg-red-600'
                                        }`}
                                    title={`${day.date.toLocaleDateString()} - ${day.available ? 'Available' : 'Unavailable'}`}
                                >
                                    {day.date.getDate()}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AvailabilityCalendar