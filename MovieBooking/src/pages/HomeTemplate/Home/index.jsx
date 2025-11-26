import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieList } from './../MovieList/slice';
import { fetchMovieCarousel } from './slice';
import Movie from '../MovieList/movie';

const Home = () => {
  const carouselSlide = {
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 6000,
    fade: true,
    cssEase: "linear",
    waitForAnimate: false
  };

  const dispatch = useDispatch();
  const stateList = useSelector((state) => state.movieListReducer);

  const stateCarousel = useSelector((state) => state.movieCarouselReducer);
  useEffect(() => {
    dispatch(fetchMovieList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchMovieCarousel());
  }, [dispatch]);

  const { data, loading } = stateList;
  const { dataCarousel } = stateCarousel;

  if (loading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-4">
        <div className="animate-pulse space-y-3">
          <div className="w-full aspect-3/4 bg-gray-200 rounded-lg" />
          <div className="h-4 bg-gray-200 rounded w-3/4" />
          <div className="h-3 bg-gray-200 rounded w-1/2" />
        </div>
        <div className="animate-pulse space-y-3">
          <div className="w-full aspect-3/4 bg-gray-200 rounded-lg" />
          <div className="h-4 bg-gray-200 rounded w-2/3" />
          <div className="h-3 bg-gray-200 rounded w-1/3" />
        </div>
        <div className="animate-pulse space-y-3">
          <div className="w-full aspect-3/4 bg-gray-200 rounded-lg" />
          <div className="h-4 bg-gray-200 rounded w-1/2" />
          <div className="h-3 bg-gray-200 rounded w-3/4" />
        </div>
        <div className="animate-pulse space-y-3">
          <div className="w-full aspect-3/4 bg-gray-200 rounded-lg" />
          <div className="h-4 bg-gray-200 rounded w-4/5" />
          <div className="h-3 bg-gray-200 rounded w-2/3" />
        </div>
        <div className="animate-pulse space-y-3">
          <div className="w-full aspect-3/4 bg-gray-200 rounded-lg" />
          <div className="h-4 bg-gray-200 rounded w-3/5" />
          <div className="h-3 bg-gray-200 rounded w-1/2" />
        </div>
      </div>
    );
  }

  const renderNowMovieList = () => {
    return data?.map((movie) => {
      if (movie.hot && movie.dangChieu) {
        return <Movie key={movie.maPhim} propMovie={movie} />;
      }
    });
  };

  const renderUpComingMovieList = () => {
    return data?.map((movie) => {
      if (!movie.dangChieu) {
        return <Movie key={movie.maPhim} propMovie={movie} />;
      }
    });
  };

  const renderMovieCarousel = () => {
    return dataCarousel?.map((movie) => {
      return (
        <div key={movie.maBanner} className="item relative group">
          <img
            src={movie.hinhAnh}
            className="w-full h-135 overflow-hidden object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
          <NavLink
            to="*"
            className="
    absolute right-[43%] bottom-20
    flex items-center justify-center gap-3
    bg-linear-to-r from-blue-500 to-purple-600
    text-white px-6 py-3 h-10
    rounded-full font-semibold shadow-lg
    opacity-0 translate-y-8 
    group-hover:opacity-100 group-hover:translate-y-0
    transition-all duration-500 ease-out
  "
          >
            <span className="flex items-center h-full">Get Tickets</span>

            <span className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-white">
              <i className="fi fi-rr-angle-double-small-right text-white text-base flex items-center justify-center leading-none"></i>
            </span>
          </NavLink>
        </div>
      )
    })
  }

  return (
    <>
      {/* CAROUSEL */}
      <div className="slider-container relative pb-10">
        <Slider {...carouselSlide}>
          {/* Intro */}
          <div className="item relative group">
            <img
              src="./img/Banners/atsayxe.jpg"
              className="w-full object-cover"
            />
          </div>

          {/* Movie 1 */}
          <div className="item relative group">
            <img
              src="./img/Banners/CuoiVkChoCha.jpg"
              className="w-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
            <NavLink
              to="*"
              className="
    absolute right-[43%] bottom-20
    flex items-center justify-center gap-3
    bg-linear-to-r from-blue-500 to-purple-600
    text-white px-6 py-3 h-10
    rounded-full font-semibold shadow-lg
    opacity-0 translate-y-8 
    group-hover:opacity-100 group-hover:translate-y-0
    transition-all duration-500 ease-out
  "
            >
              <span className="flex items-center h-full">Get Tickets</span>

              <span className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-white">
                <i className="fi fi-rr-angle-double-small-right text-white text-base flex items-center justify-center leading-none"></i>
              </span>
            </NavLink>
          </div>

          {renderMovieCarousel()}

          {/* Movie 2 */}
          <div className="item relative group">
            <img
              src="./img/Banners/truytimLDH.jpg"
              className="w-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
            <NavLink
              to="*"
              className="
    absolute right-[43%] bottom-20
    flex items-center justify-center gap-3
    bg-linear-to-r from-blue-500 to-purple-600
    text-white px-6 py-3 h-10
    rounded-full font-semibold shadow-lg
    opacity-0 translate-y-8 
    group-hover:opacity-100 group-hover:translate-y-0
    transition-all duration-500 ease-out
  "
            >
              <span className="flex items-center h-full">Get Tickets</span>

              <span className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-white">
                <i className="fi fi-rr-angle-double-small-right text-white text-base flex items-center justify-center leading-none"></i>
              </span>
            </NavLink>
          </div>

          {/* Movie 3 */}
          <div className="item relative group">
            <img
              src="./img/Banners/Tafiti NaoLoanSaMac.jpg"
              className="w-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
            <NavLink
              to="*"
              className="
    absolute right-[43%] bottom-20
    flex items-center justify-center gap-3
    bg-linear-to-r from-blue-500 to-purple-600
    text-white px-6 py-3 h-10
    rounded-full font-semibold shadow-lg
    opacity-0 translate-y-8 
    group-hover:opacity-100 group-hover:translate-y-0
    transition-all duration-500 ease-out
  "
            >
              <span className="flex items-center h-full">Get Tickets</span>

              <span className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-white">
                <i className="fi fi-rr-angle-double-small-right text-white text-base flex items-center justify-center leading-none"></i>
              </span>
            </NavLink>
          </div>

          {/* Movie 4 */}
          <div className="item relative group">
            <img
              src="./img/Banners/wicked-Season2.jpg"
              className="w-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
            <NavLink
              to="*"
              className="
    absolute right-[43%] bottom-20
    flex items-center justify-center gap-3
    bg-linear-to-r from-blue-500 to-purple-600
    text-white px-6 py-3 h-10
    rounded-full font-semibold shadow-lg
    opacity-0 translate-y-8 
    group-hover:opacity-100 group-hover:translate-y-0
    transition-all duration-500 ease-out
  "
            >
              <span className="flex items-center h-full">Get Tickets</span>

              <span className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-white">
                <i className="fi fi-rr-angle-double-small-right text-white text-base flex items-center justify-center leading-none"></i>
              </span>
            </NavLink>
          </div>

          {/* Movie 5 */}
          <div className="item relative group">
            <img
              src="./img/Banners/banner3.jpg"
              className="w-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
            <NavLink
              to="*"
              className="
    absolute right-[43%] bottom-20
    flex items-center justify-center gap-3
    bg-linear-to-r from-blue-500 to-purple-600
    text-white px-6 py-3 h-10
    rounded-full font-semibold shadow-lg
    opacity-0 translate-y-8 
    group-hover:opacity-100 group-hover:translate-y-0
    transition-all duration-500 ease-out
  "
            >
              <span className="flex items-center h-full">Get Tickets</span>

              <span className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-white">
                <i className="fi fi-rr-angle-double-small-right text-white text-base flex items-center justify-center leading-none"></i>
              </span>
            </NavLink>
          </div>

          {/* Movie 6 */}
          <div className="item relative group">
            <img
              src="./img/Banners/banner2.jpg"
              className="w-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
            <NavLink
              to="*"
              className="
    absolute right-[43%] bottom-20
    flex items-center justify-center gap-3
    bg-linear-to-r from-blue-500 to-purple-600
    text-white px-6 py-3 h-10
    rounded-full font-semibold shadow-lg
    opacity-0 translate-y-8 
    group-hover:opacity-100 group-hover:translate-y-0
    transition-all duration-500 ease-out
  "
            >
              <span className="flex items-center h-full">Get Tickets</span>

              <span className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-white">
                <i className="fi fi-rr-angle-double-small-right text-white text-base flex items-center justify-center leading-none"></i>
              </span>
            </NavLink>
          </div>
        </Slider>
      </div>

    </>
  )
}

export default Home