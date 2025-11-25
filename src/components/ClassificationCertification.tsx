import { FaAirbnb, FaAward } from 'react-icons/fa'

export default function ClassificationCertification() {
    return (
        <section className="container mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    <div className="flex flex-col items-center text-center md:items-start md:text-left">
                        <div className="bg-red-100 p-4 rounded-full mb-4">
                            <FaAirbnb className="w-8 h-8 text-red-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                            Superhost
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Superhost. Chalet la Falaise owners hold the distinction of a “Superhost”
                            awarded by Airbnb, the home-sharing side. Superhosts are experienced hosts
                            who provide extraordinary service for their guests.
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center md:items-start md:text-left">
                        <div className="bg-green-100 p-4 rounded-full mb-4">
                            <FaAward className="w-8 h-8 text-green-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                            Certificate of Quebec Province
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Classification certification. Chalet la Falaise is accredited by the Corporation
                            de l’industrie touristique du Québec(CITQ). Our chalet has been certified a
                            “tourist home” by CITQ (No. 296435).
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
