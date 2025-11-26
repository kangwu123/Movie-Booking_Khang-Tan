import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import { fetchMovieDetail } from './slice'
import { useDispatch, useSelector } from 'react-redux';

const MovieDetail = () => {
    const { maPhim } = useParams();
    const dispatch = useDispatch();
    const state = useSelector((state) => state.movieDetailReducer);

    const { dataDetail, loading } = state

    useEffect(() => {
        dispatch(fetchMovieDetail(maPhim));
    }, [dispatch, maPhim]);

    if (loading) {
        return (
            <div className="p-6 space-y-6 animate-pulse">
                <div className="w-full h-80 bg-gray-300/70 rounded-xl"></div>

                <div className="h-7 bg-gray-300/70 rounded w-2/3"></div>

                <div className="space-y-3">
                    <div className="h-4 bg-gray-300/70 rounded w-full"></div>
                    <div className="h-4 bg-gray-300/70 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-300/70 rounded w-4/6"></div>
                </div>

                <div className="h-12 bg-gray-300/70 rounded-xl w-40"></div>
            </div>
        )
    }

    const toEmbed = (url) => {
        if (!url) return "";
        return url.replace("youtu.be/", "www.youtube.com/embed/");
    };

    return (
        <div className="bg-white text-gray-800 py-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-15">

                    {/* LEFT CONTENT */}
                    <div className="lg:w-3/5 flex flex-col">

                        <h2 className="text-3xl font-bold border-t-2 border-b-2 border-red-500 py-3 mb-8">
                            {dataDetail?.tenPhim}
                        </h2>

                        <p className="bg-amber-500 text-white font-bold w-max px-4 py-1 rounded mb-10">
                            C16
                        </p>

                        <div className="mb-10">
                            <h3 className="text-xl text-red-600 font-semibold mb-3 tracking-wide uppercase">Synopsis</h3>
                            <p className="text-gray-700 leading-relaxed">
                                {dataDetail?.moTa}
                            </p>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl text-red-600 font-semibold mb-3 tracking-wide uppercase">Release Date</h3>
                            <p className="text-gray-700">
                                {dataDetail?.ngayKhoiChieu
                                    ? new Date(dataDetail.ngayKhoiChieu).toLocaleDateString("en-US", {
                                        month: "long",
                                        day: "numeric",
                                        year: "numeric",
                                    })
                                    : ""}
                            </p>
                        </div>

                        <div className="mb-4">
                            <h3 className="text-xl text-red-600 font-semibold mb-3 tracking-wide uppercase">Movie Trailer</h3>
                            <iframe
                                className="w-full md:h-80 rounded"
                                src={toEmbed(dataDetail?.trailer)}
                                title="Trailer"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="lg:w-2/5 flex flex-col gap-6">
                        <img
                            src={dataDetail?.hinhAnh}
                            alt="Movie Poster"
                            className="rounded-lg shadow-lg w-[70%] mx-auto object-cover"
                        />

                        <div className="flex justify-between bg-gray-100 p-4 border-t-2 border-b-2 border-red-500">
                            <div className="flex flex-col text-center">
                                <h4 className="text-red-600 font-semibold">RUNTIME</h4>
                                <p className="text-sm text-gray-700">108 mins</p>
                            </div>
                            <div className="flex flex-col text-center">
                                <h4 className="text-red-600 font-semibold">RATING</h4>
                                <p className="text-sm text-gray-700 flex items-center gap-1">
                                    <i class="fa-solid fa-star text-yellow-500"></i>
                                    {dataDetail?.danhGia}
                                </p>

                            </div>
                            <div className="flex flex-col text-center">
                                <h4 className="text-red-600 font-semibold">FORMAT</h4>
                                <p className="text-sm text-gray-700">2D / IMAX</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SHOWTIME TABLE */}
                <div className="mt-12 overflow-x-auto space-y-10">
                    <h3 className="text-xl text-red-600 font-semibold mb-3 tracking-wide uppercase">Times & Tickets</h3>

                    <table className="w-full border-collapse shadow-xl rounded-lg overflow-hidden">
                        <thead>
                            <tr className="text-sm text-white">
                                <th className="px-4 py-3 bg-blue-700 border-r border-white font-bold text-lg">GOLD HALL 1</th>
                                <th className="px-4 py-3 bg-red-500">MONDAY</th>
                                <th className="px-4 py-3 bg-gray-800">TUESDAY</th>
                                <th className="px-4 py-3 bg-gray-800">WEDNESDAY</th>
                                <th className="px-4 py-3 bg-gray-800">THURSDAY</th>
                                <th className="px-4 py-3 bg-gray-800">FRIDAY</th>
                                <th className="px-4 py-3 bg-gray-800">SATURDAY</th>
                                <th className="px-4 py-3 bg-gray-800">SUNDAY</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr className="border-t border-white">
                                <td className="px-4 py-4 bg-gray-900 text-white font-semibold border-r border-white">
                                    Predator: Badlands (2025)
                                </td>

                                <td colSpan={7} className="px-4 py-4 bg-gray-900">
                                    <div className="flex items-center gap-4">
                                        <button className="px-4 py-2 rounded-lg bg-gray-100 text-black hover:bg-amber-500 transition-all duration-300 cursor-pointer">
                                            10:50
                                        </button>
                                        <button className="px-4 py-2 rounded-lg bg-gray-100 text-black hover:bg-amber-500 transition-all duration-300 cursor-pointer">
                                            13:25
                                        </button>
                                        <button className="px-4 py-2 rounded-lg bg-gray-100 text-black hover:bg-amber-500 transition-all duration-300 cursor-pointer">
                                            19:00
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default MovieDetail
