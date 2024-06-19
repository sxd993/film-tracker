export default function Logo() {
    return (
    <div className="flex items-center">
        <div className="flex gap-2 text-2xl">
            <h1>Film</h1>
            <div>|</div>
            <h1>Tracker</h1>
        </div>
        <img src="/public/logo.png" alt="" width={185} height={100} />
    </div>
    )
}