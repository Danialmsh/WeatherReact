import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import getWeatherInfo from "../redux/weather/weatherActions";
import PersianDate from './PersianDate';


const Weather = () => {
    const {loading , data , error} = useSelector(state=>state);
    const dispatch = useDispatch();

    const [backMode , setBackMode] = useState('usual')
    const [query , setQuery] = useState('')

    const handleGetWeather = e=>{
        e.preventDefault()
        dispatch(getWeatherInfo(query))
        setQuery('')
    }

    useEffect(()=>{
        if (!data.main) {
            return
        }
        let temp = data.main.temp
        if (temp < 285) {
            setBackMode('cold')
        }else if (temp < 290 ) {
            setBackMode('usual')
        }else {
            setBackMode('warm')
        }
    } , [data])


    return (
        <div className={`app pt-4 container-fluid back_${backMode}`}>

            <div className='row justify-content-center py-3 pt-4'>
                <div className='col-10 col-md-6 col-lg-4 col-xl-3'>
                    <form onSubmit={handleGetWeather}>
                        <input type="text"
                               className='search_input w-100 text_color placeholder_color'
                               placeholder={data.name ||'نام شهر یا کشور'}
                               value = {query}
                               onChange={(e)=>setQuery(e.target.value)}
                        />
                    </form>
                </div>
            </div>

            <div className='row justify-content-center py-3 pt-4'>
                <div className='col-11 col-md-8 col-lg-4 col-xl-3'>
                    <h3 className='text-center text_color'>
                        <PersianDate/>
                    </h3>
                </div>
            </div>

            {loading ? (
                <>
                <div className="loader">
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                    <div className="bar4"></div>
                    <div className="bar5"></div>
                    <div className="bar6"></div>
                    <div className="bar7"></div>
                    <div className="bar8"></div>
                    <div className="bar9"></div>
                </div>
                </>
            ) : data.main ? (
                <>
                    <div className='row justify-content-center py-3'>
                        <div className='col-9 col-md-6 col-lg-4 col-xl-3'>
                            <div className='temprature_box pt-3'>
                                <span>{Math.round(data.main.temp)}</span> °C
                            </div>
                        </div>
                    </div>
                    <div className='row justify-content-center py-3 pt-4'>
                        <div className='col-11 col-md-8 col-lg-4 col-xl-3'>
                            <h1 className='text-center fa-3x lathin_text text_color'>{data.weather[0].main}</h1>
                        </div>
                    </div>
                </>

            ) : error ? (
                <h3 className='text-center text_color'>نام شهر یا کشور به درستی وارد کنید</h3>
            ) : (
                <h3 className='text-center text_color'>مکان مورد نظر را جستجو کنید</h3>
            ) }

        </div>
    );
}

export default Weather;
