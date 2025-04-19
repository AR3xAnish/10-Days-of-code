import React from 'react'

function Card(props){
  return (
    <>
        <div class="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 mb-5 rounded-2xl border-2 border-yellow-300">
            
                <img class="size-50 shadow-xl rounded-md" alt="" src={props.pic} />
            
                <div class="flex items-center md:items-start">
                <span class="text-2xl font-medium">{props.content}</span>
                <span class="font-medium text-sky-500 md-5">{props.genre}</span>
                <span class="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
                    <span>No. 4</span>
                    <span>·</span>
                    <span>2025</span>
                </span>
            </div>
        </div>    
    </>
  )
}

export default Card;