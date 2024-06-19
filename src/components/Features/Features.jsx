export default function Features() {
    return (
        <section id="features" className="p-10 bg-white text-gray-800 mt-5">
            <h2 className="text-3xl font-bold text-center mb-10">Features</h2>
            <div className="flex justify-around">
                <div className="w-1/3 text-center">
                    <h3 className="text-xl font-bold mb-2">Track Movies</h3>
                    <p>Keep a record of all the movies you've watched.</p>
                </div>
                <div className="w-1/3 text-center">
                    <h3 className="text-xl font-bold mb-2">Track TV Shows</h3>
                    <p>Track episodes and seasons of your favorite TV shows.</p>
                </div>
                <div className="w-1/3 text-center">
                    <h3 className="text-xl font-bold mb-2">Create Watchlists</h3>
                    <p>Organize movies and shows you want to watch.</p>
                </div>
            </div>
        </section>
    );
}

