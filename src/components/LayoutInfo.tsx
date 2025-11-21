function LayoutInfo() {
    return (
        <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Layout</h3>
            <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span><strong>Lower level:</strong> Spacious, fully equipped kitchen, dining area opening to living room, guest bedroom, and full bathroom</span>
                </li>
                <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span><strong>Upper level:</strong> Loft, master bedroom, children's bedroom, and full bath</span>
                </li>
                <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Cathedral ceiling spans the two floors</span>
                </li>
            </ul>
        </div>
    )
}

export default LayoutInfo
