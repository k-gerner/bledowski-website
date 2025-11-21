function AboutOwners() {
    return (
        <div className="bg-white py-16">
            <div className="container mx-auto px-4 max-w-2xl">
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
                    About the Owners
                </h2>

                <div className="bg-gray-50 rounded-lg shadow-md p-8">
                    {/* Owner Image */}
                    <div className="mb-6">
                        <img
                            src="/about_the_owners.jpg"
                            alt="Owners"
                            className="w-full h-64 object-cover rounded-lg"
                        />
                    </div>

                    {/* Blurb */}
                    <div className="text-gray-700 space-y-4">
                        <p>
                            We are a family with a residence history on both sides of the Atlantic
                            that spans several decades now. Our love of outdoors (hiking, biking,
                            kayaking, skiing, snowboarding or tennis) finds echoes in the gear we
                            keep in our houses. Likewise, you’ll find our joy of cooking reflected
                            in the richly equipped kitchens. The practical steps we took to keep
                            our equipment handy should make your visits richer. And all three
                            locations offer numerous indoor cultural activities year-round. So,
                            plan your visits accordingly. We hope you’ll enjoy staying here as
                            much as we do.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutOwners
