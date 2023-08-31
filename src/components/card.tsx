'use client';

import KeyboardDoubleArrowUpOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowUpOutlined';
import KeyboardDoubleArrowDownOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowDownOutlined';
import { useState } from 'react'


export default function Card(props:{title:string,text:string,karma:number}) {
    const [currentKarma, setCurrentKarma] = useState(props.karma) 

    const upVote = () => {
        setCurrentKarma(currentKarma + 1)
    }
    
    const downVote = () => {
        setCurrentKarma(currentKarma - 1)
    }
    
    return (
        <>
            <div 
                className="max-h-36 px-4 card-text hover:cursor-pointer">
                <h2>{props.title}</h2>
                <p className="opacity-60">{props.text}</p>
            </div>
            <div className="px-4">
                <KeyboardDoubleArrowUpOutlinedIcon
                    onClick={upVote}/>
                {currentKarma}
                <KeyboardDoubleArrowDownOutlinedIcon
                onClick={downVote}/>
            </div>
            <hr className="opacity-30"/>
        </>
    )
}