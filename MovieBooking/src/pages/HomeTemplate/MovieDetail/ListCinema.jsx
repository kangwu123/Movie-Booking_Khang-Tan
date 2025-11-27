import React from 'react'

const ListCinema = ({ propCinema, onSelectedCinema }) => {
    const handleShowCinema = (maHeThongRap) => {
        onSelectedCinema(maHeThongRap)
    }

    return (
        <button key={propCinema.maHeThongRap} className="flex flex-col items-center gap-3 bg-gray-200 hover:bg-orange-400 text-black font-semibold p-4 rounded-xl hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-400"
            onClick={() => handleShowCinema(propCinema.maHeThongRap)}>
            <img
                src={propCinema.logo}
                alt={propCinema.tenHeThongRap}
                className="w-8 h-8 rounded-full ring-1 ring-gray-800 bg-white"
            />

            <p className="text-xs">{propCinema.tenHeThongRap}</p>
        </button>

    )
}

export default ListCinema
