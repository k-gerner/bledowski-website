

function Rates() {
    return (
        <div>
            <h3 className="text-3xl font-semibold text-gray-900 mb-4 text-center">Rates</h3>
            <div className="flex flex-col md:flex-row gap-6 justify-between">
                <div className="rounded-lg bg-gray-100 p-6 shadow-md">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Spring Season</h4>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                        <li className="list-none">Weekend night: $210</li>
                        <li className="list-none">Weeknight: $165</li>
                        <li className="list-none">Week: $900</li>
                        <li className="list-none">Month: $2,580</li>
                    </ul>
                </div>
                <div className="rounded-lg bg-gray-100 p-6 shadow-md">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Summer Season</h4>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                        <li className="list-none">Weekend night: $265</li>
                        <li className="list-none">Weeknight: $250</li>
                        <li className="list-none">Week: $1,265</li>
                        <li className="list-none">Month: $3,565</li>
                    </ul>
                </div>
                <div className="rounded-lg bg-gray-100 p-6 shadow-md">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Autumn Season</h4>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                        <li className="list-none">Weekend night: $225</li>
                        <li className="list-none">Weeknight: $185</li>
                        <li className="list-none">Week: $980</li>
                        <li className="list-none">Month: $2,800</li>
                    </ul>
                </div>
                <div className="rounded-lg bg-gray-100 p-6 shadow-md">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Ski Season</h4>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                        <li className="list-none">Five months: $16,000</li>
                    </ul>
                </div>
            </div>
        </div>
    )

}


export default Rates