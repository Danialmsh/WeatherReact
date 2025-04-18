import moment from 'moment-jalaali';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const weekDays =  [
    'یکشنبه',
    'دوشنبه',
    'سه شنبه',
    'چهارشنبه',
    'پنجشنبه',
    'جمعه',
    'شنبه',
]

const yearMonth =  [
    'فروردین',
    'اردیبهشت',
    'خرداد',
    'تیر',
    'مرداد',
    'شهریور',
    'مهر',
    'آبان',
    'آذر',
    'دی',
    'بهمن',
    'اسفند',
]


const PersianDate = () => {
    const [date , setDate] = useState('')
    const [time , setTime] = useState('')
    const [TimeLeft , setTimeLeft] = useState('')

    const handleSetTimeDate = () => {
        let m = moment()
        let finalDate = `${weekDays[m.day()]} ${m.jDate()} ${yearMonth[m.jMonth()]} ماه ${m.jYear()}`
        setDate(finalDate);
        setTime(moment().format("HH:mm"));
    }

    let TimeBool =true;
    const SecondFunc = ()=> {
        let i = moment().format("ss")
        if (TimeBool) {
            if (i === 60 || 0) {
                TimeBool = false;
                setTimeLeft("60")
            } else {
                TimeBool = false;
                setTimeLeft(60 - i)
            }
        } else {
            setTimeLeft("60")
        }
        handleSetTimeDate();
    }
    setInterval(SecondFunc, TimeLeft);

    useEffect(()=>{
        handleSetTimeDate();
    } ,[time])




    return (
        <>
            <span className='mb-3 d-block text-center'>{date}</span>
            <span className='d-block text-center'>ساعت {time}</span>
        </>
    );
}

export default PersianDate;
